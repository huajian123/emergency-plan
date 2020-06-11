import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from '../services.module';
import {Observable} from 'rxjs';


export interface LoginModel {
    account: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})

export class LoginService extends BaseHttp {

    constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string) {
        super(http, uri);
    }

    public UserLogin(params: LoginModel): Observable<any> {
        return this.post('/user/login', params);
    }

}



