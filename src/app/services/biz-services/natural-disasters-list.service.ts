import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {NzMessageService} from 'ng-zorro-antd';


export interface NaturalDisastersModel {
    id: number,
    plainName: string,
    accidentType: number
}

export interface CommanderInfoModel {
    id?: number,
    departmentName: string,
    departmentPhone: string,
    responsibilityName: string,
    responsibilityDetail: string,
    grade?: string
}

@Injectable({
    providedIn: 'root'
})
export class NaturalDisastersListService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    /*预案列表查询接口*/
    public getNaturalDisastersList(id: number): Observable<NaturalDisastersModel[]> {
        return this.get('/getPlainList/' + id, {}, {needSuccessInfo: true});
    }

    /*预案详情接口*/
    public getNaturalDisastersPlan(id: number): Observable<any> {
        return this.get('/getEmergencyTeam/' + id, {}, {needSuccessInfo: true});
    }

}
