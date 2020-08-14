import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../services.module';
import {Observable} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd';


export interface DepartInfoModel {
    id: number;
    accidentPlanId: number;
    responsibilityName: string;
    responsibilityDetail: string;
    completeSchedule: string;
    linkman: string;
    linkPhone: string;
    responsibilityDetailSort: string[];
}


export interface DisasterDataModel {
    id: number;
    accidentName: string;
    responsibilityEntities: DepartInfoModel[];
}

export interface CitiesNameModel {
    id: number;
    cityName: string;
    emergentUrl: string;
    countDTOS: CountDTOSModel[];
}

export interface CountDTOSModel {
    id: number;
    cityId?: number;
    countName: string;
    emergentUrl: string;
}

export interface UpdateScheduleDTO {
    completeSchedule: string;
    id: number;
}

@Injectable({
    providedIn: 'root'
})

export class CitiesNameService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    public getCitiesNameList(): Observable<CitiesNameModel[]> {
        return this.get('/cities', {});
    }

    public getNameList(param: { id: number, type: number }): Observable<any> {
        return this.get('/city', {id: param.id, type: param.type});
    }


    public getGroupInfo(param: { id: number, cityName: string }): Observable<any> {
        return this.get('/responsibility/' + param.id, param);
    }

    /*完成进度修改*/
    public getSchedule(params: UpdateScheduleDTO): Observable<any> {
        return this.put('/schedule', params);
    }
}



