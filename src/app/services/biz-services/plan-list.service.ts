import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {PageInfo} from '../../VO/types';
import {NzMessageService} from 'ng-zorro-antd';

export interface PlanListModel {
    id?: number;
    planName: string;
    accidentType: number;
    updateTime: Date;
    updateBy: string;
    createTime: Date;
    createBy: string;
    delFlag?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class PlanListService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    public getPlanList(params): Observable<PageInfo<PlanListModel>> {
        return this.get('/data/major/hazard/sensors', params);
    }

}
