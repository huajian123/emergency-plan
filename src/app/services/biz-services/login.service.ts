import {Injectable, Injector} from '@angular/core';
import {HttpUtilNs, HttpUtilService} from '../http/http-util.service';
import {ActionResult} from '../../core/vo-common/ActionResult';


// tslint:disable-next-line:no-namespace
export namespace LoginServiceNs {
    /* import LoginInfoModel = BasicInfoServiceNs.LoginInfoModel;*/

    export enum ChildSystemEnum {
        ENVIRONMENTAL = 1, // 智慧环保
        SUBSYSTEM_TYPE_EMERGENCY, // 智慧应急
        SUBSYSTEM_TYPE_GARDEN, // 封闭园区
        SUBSYSTEM_TYPE_LDAR // LDAR管理
    }


    export interface LoginModel {
        password: string;
        userAccount: string;
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

        /*  public login(param: LoginModel): Promise<ActionResult<LoginInfoModel>> {
              return this.http.Post('/user/login', param, {needSuccessInfo: false, needIntercept: false}).toPromise();
          }
  */
        public goChildSystem(param: { subsystemType: ChildSystemEnum, userId: number }): Promise<string> {
            return this.http.Post('/basic/subsystem/login', param).toPromise();
        }

        public loginOut(param: { id: number }): Promise<any> {
            return this.http.Post('/basic/subsystem/loginOut', param).toPromise();
        }

        /* public test(): Promise<any> {
             return this.http.Post('/basic/storagetankinfo/add', {'userAccount': 'ceshi', 'password': '123'}).toPromise();
         }*/
    }
}


@Injectable({
    providedIn: 'root'
})
export class LoginService extends LoginServiceNs.LoginServiceClass {

    constructor(injector: Injector) {
        super(injector);
    }
}
