/*
import {Injectable, Injector} from '@angular/core';
import {HttpUtilNs, HttpUtilService} from '../http/http-util.service';


// tslint:disable-next-line:no-namespace
export namespace LoginServiceNs {
    export interface LoginModel {
        account: string;
        password: string;
    }


    export class LoginServiceClass {

        private http: HttpUtilService;
        private defaultConfig: HttpUtilNs.UfastHttpConfig;

        constructor(private injector: Injector) {
            this.http = this.injector.get(HttpUtilService);
            this.defaultConfig = {
                gateway: HttpUtilNs.GatewayKey.Bs
            };
        }

        public UserLogin(param: LoginModel): Promise<any> {
            return this.http.Post('/user/login', param).toPromise();
        }


    }
}


@Injectable({
    //providedIn: 'root'
})
export class LoginService extends LoginServiceNs.LoginServiceClass {
    constructor(injector: Injector) {
        super(injector);
    }
}
*/
