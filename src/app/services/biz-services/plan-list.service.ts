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

export interface DeptResyMessageModel {
    selectDepartmentDTOS: DepartmentDTOS[];
    emergencyTeamDTOS: EmergencyTeamDTOS[];
    command?: EmergencyTeamDTOS;
}

export interface DepartmentDTOS {
    id?: number;
    departmentName: string;
    departmentPhone: string;
}

export interface EmergencyTeamDTOS {
    id?: number;
    resyName: string;
    resyDetail: string;
}

export interface AddEditEmergencyTeamModel {
    id?: number;
    accidentType: number
    addEmergencyTeamDTOS: EmergencyTeamModel[];
    createBy?: string;
    updateBy?: string;
    deptId: number;
    resyId: number;
    planName: string;
}

export interface EmergencyTeamModel {
    deptId: number;
    resyId: number;
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

    /*新增预案*/
    public addPlan(params: AddEditEmergencyTeamModel): Observable<any> {
        return this.post('/plan', params);
    }

    /*编辑预案*/
    public editPlan(params: AddEditEmergencyTeamModel): Observable<any> {
        return this.put('/plan/' + params.id, params);
    }

    /*预案删除*/
    public getPlanListDelete(id: number): Observable<any> {
        return this.delete('/plan/' + id, {});
    }

    /*部门、小队信息接口下拉菜单*/
    public getDeptResyList(): Observable<DeptResyMessageModel> {
        return this.get('/dept-resy-message', {});

    }

}
