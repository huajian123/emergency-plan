import {Injectable, Injector} from '@angular/core';
import {HttpUtilNs, HttpUtilService} from '../http/http-util.service';
import {SearchCommonVO} from '../../core/vo-common/SearchCommonVO';
import {PageInfo} from '../../core/vo-common/PageInfo';


// tslint:disable-next-line:no-namespace
export namespace ParkMainLayoutServiceNs {

    export enum NoticeTypeEnum {
        Announcement = 1, // 公告
        IndustryNews, // 行业动态发布
        FileNotifi, // 文件通知
        ParkIntroduction // 园区介绍
    }

    export interface NoticeModel {
        id?: number;
        noticeType?: number;
        title?: string;
        detail?: string;
        pictureUrl?: string;
        fileUrl?: string;
        createTime?: Date;
        fileName?: string;
    }

    export class ParkMainLayoutServiceClass {
        private http: HttpUtilService;
        private defaultConfig: HttpUtilNs.UfastHttpConfig;

        constructor(private injector: Injector) {
            this.http = this.injector.get(HttpUtilService);
            this.defaultConfig = {
                gateway: HttpUtilNs.GatewayKey.Bs
            };
        }

        // 获取通知列表
        public getAnnouncementList(param: SearchCommonVO<{ noticeType: number }>): Promise<PageInfo<NoticeModel>> {
            return this.http.Post('/basic/notice/query', param).toPromise();
        }

        // 新增列表
        /* public addNotice(param: SearchCommonVO<{ noticeType: number }>): Promise<PageInfo<NoticeModel>> {
             return this.http.Post('/basic/notice/insert', param, {needSuccessInfo: true}).toPromise();
         }*/

        // 删除通知列表
        /* public delNotice(id: number): Promise<PageInfo<NoticeModel>> {
             return this.http.Post('/basic/notice/delete', {id: id}, {needSuccessInfo: true}).toPromise();
         }*/


    }
}

@Injectable({
    providedIn: 'root'
})
export class ParkMainLayoutService extends ParkMainLayoutServiceNs.ParkMainLayoutServiceClass {
    constructor(injector: Injector) {
        super(injector);
    }
}
