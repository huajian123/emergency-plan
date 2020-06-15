import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {PageInfo} from '../../VO/types';
import {NzMessageService} from 'ng-zorro-antd';

export interface TeamListModel {
    productName: string;
    casNo: string;
}

@Injectable({
    providedIn: 'root'
})
export class TeamListService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    public getTeamList(params): Observable<PageInfo<TeamListModel>> {
        return this.get('/data/major/hazard/sensors', params);
    }

}
