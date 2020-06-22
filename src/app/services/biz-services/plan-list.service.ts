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

export interface PlanDetailModel {
    id?: number;
    accidentType: number,
    planName: string,
    planDeptResyEntities: PlanDeptResyEntitiesDTOS[];
}

export interface PlanDeptResyEntitiesDTOS {
    id?: number;
    resyId?: number,
    resyName?: string;
    resyDetail: string;
    deptId?: number,
    deptName: string;
    deptPhone: string;
    grade?: number;
}

@Injectable({
    providedIn: 'root'
})
export class PlanListService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    /*获取所有的预案列表*/
    public getPlanList(params): Observable<PageInfo<PlanListModel>> {
        return this.post('/plans', params);
    }

    /*获取预案详情*/
    public getPlanDetail(id: number): Observable<PlanDetailModel> {
        return this.get('/plan/' + id, {});
    }

    /*预案删除*/
    public getPlanListDelete(id: number): Observable<any> {
        return this.delete('/plan/' + id, {});
    }

}
