import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {PageInfo} from '../../VO/types';
import {NzMessageService} from 'ng-zorro-antd';

export interface CommandReportListModel {
    id?: number,
    accidentGrade: number,
    accidentType?: number,
    sendDepartmentName: string,
    acceptDepartmentName: string,
    temporary?: string
}

@Injectable({
    providedIn: 'root'
})
export class CommandReportListService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string, public message: NzMessageService) {
        super(http, uri, message);
    }

    public getCommandReportList(params): Observable<PageInfo<CommandReportListModel>> {
        return this.get('/departments', params);
    }

    public getDeleteList(id: number): Observable<CommandReportListModel> {
        return this.delete('/department' + id, {});
    }

}
