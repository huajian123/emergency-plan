import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import queryString from 'query-string';
import {NzMessageService} from 'ng-zorro-antd';

export interface MyHttpConfig {
    needIntercept?: boolean;
    needSuccessInfo?: boolean;
    showLoading?: boolean;
}

export class ActionResult<T> {
    code: number;
    msg: string;
    data: T;
}


export abstract class BaseHttp {

    constructor(public http: HttpClient, public uri: string, private message?: NzMessageService) {
    }

    protected get<T>(path: string, param?, config?: MyHttpConfig): Observable<any> {
        config = config || {};
        const params = new HttpParams({fromString: queryString.stringify(param)});
        return this.http.get<ActionResult<T>>(this.uri + path, {params}).pipe(
            filter((item) => this.handleFilter(item, config.needSuccessInfo)),
            map(item => item.data)
        );
    }

    protected post<T>(path: string, param?: any, config?: MyHttpConfig): Observable<any> {
        const params = new HttpParams({fromString: queryString.stringify(param)});
        return this.http.post<ActionResult<T>>(this.uri + path, params).pipe(
            filter((item) => this.handleFilter(item, config.needSuccessInfo)),
            map(item => item.data)
        );
    }

    handleFilter(item, needSuccessInfo) {
        if (item.code !== 0) {
            this.message.success('操作成功');
        } else if (needSuccessInfo) {
            this.message.error('操作失败');
        }
        return item.code === 0;
    }
}
