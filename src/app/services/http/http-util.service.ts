import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { filter, map } from 'rxjs/operators';
import {PageInfo} from "../../core/vo-common/PageInfo";
import {ActionResult} from "../../core/vo-common/ActionResult";
import {MessageType, ShowMessageService} from "../../share/show-message/show-message";



export namespace HttpUtilNs {

  export interface UfastHttpRes {
    code: number;
    message: string;
  }

  export interface UfastFilterBody {
    filters: { [key: string]: any };
    pageSize: number;
    pageNum: number;
  }

  export interface UfastResListT<T> extends PageInfo<T> {
  }

  export interface UfastHttpResT<T> extends ActionResult<T> {
  }



  export enum HttpMethod {
    Post = 'POST',
    Get = 'GET'
  }

  export enum ResponseType {
    Blob = 'blob',
    Json = 'json'
  }

  export interface UfastHttpConfig {
    gateway?: string;
    headers?: HttpHeaders;
    params?: UfastHttpParams;
    needIntercept?: boolean;
    needSuccessInfo?: boolean;
    showLoading?: boolean;
  }

  export interface UfastHttpParams {
    [param: string]: string | any;
  }

  export class HttpUtilServiceClass {
    private http: HttpClient;
    private loadingCounter = 0;
    constructor(private injector: Injector, private messageService: ShowMessageService) {
      this.http = this.injector.get(HttpClient);
    }

    private setOptions(params?: UfastHttpParams, headers?: HttpHeaders, reportProgress?: boolean):
      { headers: HttpHeaders; params: HttpParams; observe: 'body'; reportProgress: boolean; } {
      return {
        headers,
        params: new HttpParams({
          fromObject: params
        }),
        observe: 'body',
        reportProgress: Boolean(reportProgress)
      };
    }

    private handleFilter(item: ActionResult<any>, needIntercept: boolean, needSuccessInfo: boolean, showLoading: boolean): boolean {
      if (showLoading) {
        this.loadingCounter--;
      }
      if (this.loadingCounter <= 0) {
        this.messageService.closeLoading();
        this.loadingCounter = 0;
      }
      // 不需要拦截处理
      if (!needIntercept) {
        return true;
      }
      // 拦截处理
      if (item.code !== 0) {
        this.messageService.showAlertMessage('', item.msg, MessageType.Warning);
      } else if (needSuccessInfo) {
        this.messageService.showToastMessage('操作成功', MessageType.Success);
      }
      return item.code === 0;
    }

    private handleSuccess(item: any, responseSubject: Subject<any>): void {
      responseSubject.next(item);
      responseSubject.complete();
    }

    private handleError(error: ActionResult<void>, responseSubject: Subject<any>, needIntercept: boolean, showLoading: boolean): void {
      if (showLoading) {
        this.loadingCounter--;
      }
      if (this.loadingCounter <= 0) {
        this.messageService.closeLoading();
        this.loadingCounter = 0;
      }
      // 不需要拦截处理
      if (!needIntercept) {
        responseSubject.error('');
        responseSubject.complete();
        return;
      }
      this.messageService.showAlertMessage('', error.msg, MessageType.Warning);
    }

    public getFullUrl(baseUrlName: string, path: string, isUpload?: boolean): string {
      /*const url = environment.baseUrl[baseUrlName || GatewayKey.Bs] + path;*/
     /* if (isUpload) {
        // 先不处理
        url = url.replace(webServerUrl, webServerUrl + '/zuul');
      }*/
     return ;
    }

    public Get<T>(path: string, params?: UfastHttpParams, config?: UfastHttpConfig): Observable<any> {
      config = config || {};
      const needIntercept = config.needIntercept !== false; // 默认为请求异常需要拦截
      const needSuccessInfo = config.needSuccessInfo === true; // 默认为不提示成功操作
      const showLoading = config.showLoading !== false; // 默认为打开加载提示
      const url = this.getFullUrl(config.gateway, path);
      const options = this.setOptions(params, config.headers);
      const responseSubject = new Subject<any>();
      if (showLoading) {
        this.loadingCounter++;
      }
      if (this.loadingCounter > 0) {
        this.messageService.showLoading();
      }
      this.http.get<ActionResult<any>>(url, options)
        .pipe(
          filter((item) => this.handleFilter(item, needIntercept, needSuccessInfo, showLoading)),
          map((item) => needIntercept ? item.data : item)
        )
        .subscribe(
          item => this.handleSuccess(item, responseSubject),
          error => this.handleError(error, responseSubject, needIntercept, showLoading)
        );
      return responseSubject.asObservable();
    }

    public Post<T>(path: string, body?: any, config?: UfastHttpConfig): Observable<any> {
      config = config || {};
      const needIntercept = config.needIntercept !== false;
      const needSuccessInfo = config.needSuccessInfo === true;
      const showLoading = config.showLoading !== false; // 默认为打开加载提示
      const url = this.getFullUrl(config.gateway, path);
      const options = this.setOptions(config.params, config.headers);
      const responseSubject = new Subject<any>();
      if (showLoading) {
        this.loadingCounter++;
      }
      if (this.loadingCounter > 0) {
        this.messageService.showLoading();
      }
      this.http.post<ActionResult<T>>(url, body, options)
        .pipe(
          filter((item) => this.handleFilter(item, needIntercept, needSuccessInfo, showLoading)),
          map((item) => needIntercept ? item.data : item)
        )
        .subscribe(
          item => this.handleSuccess(item, responseSubject),
          error => this.handleError(error, responseSubject, needIntercept, showLoading)
        );
      return responseSubject.asObservable();
    }

    public Put<T>(path: string, body?: any, config?: UfastHttpConfig): Observable<any> {
      config = config || {};
      const url = this.getFullUrl(config.gateway, path);
      const options = this.setOptions(config.params, config.headers);

      return this.http.put<T>(url, body, options);
    }

    public Delete<T>(path: string, params?: UfastHttpParams, config?: UfastHttpConfig): Observable<any> {
      config = config || {};
      const url = this.getFullUrl(config.gateway, path);
      const options = this.setOptions(params, config.headers);

      return this.http.delete<T>(url, options);
    }

    public Head<T>(path: string, params?: UfastHttpParams, config?: UfastHttpConfig): Observable<any> {
      config = config || {};
      const url = this.getFullUrl(config.gateway, path);
      const options = this.setOptions(params, config.headers);

      return this.http.head<T>(url, options);
    }

    public Options<T>(path: string, params?: UfastHttpParams, config?: UfastHttpConfig): Observable<any> {
      config = config || {};
      const url = this.getFullUrl(config.gateway, path);
      const options = this.setOptions(params, config.headers);

      return this.http.options<T>(url, options);
    }

    /**
     * 下载请求
     * @param path
     * @param params
     * @param usePost
     * @param gateway
     * @constructor
     */
    public DownLoadRequest<R>(path: string, params?: any, usePost?: boolean, gateway?: string): Observable<HttpEvent<R>> {
      const url = this.getFullUrl(gateway, path);
      const options: any = {
        reportProgress: true,
        responseType: ResponseType.Blob
      };
      let request: HttpRequest<any>;

      if (usePost) {
        request = new HttpRequest(HttpMethod.Post, url, params, options);
      } else {
        options.params = new HttpParams({
          fromObject: params
        });
        request = new HttpRequest(HttpMethod.Get, url, options);
      }
      return this.http.request<R>(request);
    }

    /**
     * 上传请求
     * @param path
     * @param body
     * @param gateway
     * @constructor
     */
    public UploadRequest<R>(path: string, body?: FormData, gateway?: string): Observable<HttpEvent<R>> {
      const url = this.getFullUrl(gateway, path, true);
      const request = new HttpRequest(HttpMethod.Post, url, body, { reportProgress: true });
      return this.http.request(request);
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService extends HttpUtilNs.HttpUtilServiceClass {
  constructor(injector: Injector, messageService: ShowMessageService) {
    super(injector, messageService);
  }
}



