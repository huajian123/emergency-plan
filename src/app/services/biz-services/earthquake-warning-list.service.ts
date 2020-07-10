import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../services.module';
import {Observable} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd';


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

}


