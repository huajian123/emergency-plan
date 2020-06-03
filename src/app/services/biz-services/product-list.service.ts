import {Injectable, Injector} from '@angular/core';
import {HttpUtilNs, HttpUtilService} from '../http/http-util.service';



// tslint:disable-next-line:no-namespace
export namespace ProductListInitServiceNs {
/*  export interface HighRiskModel {
    id?: number;
    processType: number;
    majorHazardGrade: string;
    placeName: string;
    processParameters: number[] | string;
  }*/


  export class ProductListInitServiceClass {
    private http: HttpUtilService;
    private defaultConfig: HttpUtilNs.UfastHttpConfig;

    constructor(private injector: Injector) {
      this.http = this.injector.get(HttpUtilService);
      this.defaultConfig = {
        /*gateway: HttpUtilNs.GatewayKey.Bs*/
      };
    }

  /*  public addHighRisk(param: HighRiskModel): Promise<void> {
      return this.http.Post('/basic/process/add', param, {needSuccessInfo: true}).toPromise();
    }

    public editHighRisk(param: HighRiskModel): Promise<void> {
      return this.http.Post('/basic/process/update', param, {needSuccessInfo: true}).toPromise();
    }

    public getHighList(param: SearchCommonVO<any>): Promise<PageInfo<HighRiskModel>> {
      return this.http.Post('/basic/process/page', param).toPromise();
    }

    public getHighRiskDetail(id: number): Promise<HighRiskModel> {
      return this.http.Post('/basic/process/query', {id: id}).toPromise();
    }

    public delHighRisk(id: number): Promise<HighRiskModel> {
      return this.http.Post('/basic/process/delete', {id: id}, {needSuccessInfo: true}).toPromise();
    }*/
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductListInitService extends ProductListInitServiceNs.ProductListInitServiceClass {
  constructor(injector: Injector) {
    super(injector);
  }
}
