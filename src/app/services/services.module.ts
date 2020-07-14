import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {environment} from '../../environments/environment';

export const API_CONFIG = new InjectionToken('ApiConfigToken');
export const DOWNLOAD_CONFIT = new InjectionToken('DownLoadConfigToken');

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {provide: API_CONFIG, useValue: environment.production ? '/' : '/site'},
        {provide: DOWNLOAD_CONFIT, useValue: environment.production ? '/' : 'http://192.168.131.1:9998/'}
    ]
})
export class ServicesModule {
}
