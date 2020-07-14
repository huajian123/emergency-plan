import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {localUrl} from '../../../../environments/environment';
import {PageTypeEnum} from 'src/app/core/vo-common/BusinessEnum';
import {NzModalService} from 'ng-zorro-antd';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    currentPageNum: number;
    pageTypeEnum = PageTypeEnum;


    constructor(private router: Router, private modal: NzModalService) {
        this.currentPageNum = this.pageTypeEnum.List;
    }

    /*临时*/
    goAlert() {
        this.modal.info({
            nzContent: '<p>此模块还在开发中...</p>',
            nzOnOk: () => console.log('OK')
        });
    }

    // 跳转应急预案库
    goEmergencyPlanFile() {

        window.open(localUrl + '/hazard-emergency-plan', '_blank');
    }

    // 跳转决策指挥
    goEmergency() {
        window.open(localUrl + '/hazard/natural-disaster/drought-and-flood-first', '_blank');
    }

    // 跳转状态预警
    goStatusWarning() {
        window.open(localUrl + '/hazard-status/status-warning/natural-drought-and-flood-level', '_blank');
    }

    // 跳转省级联动
    goProvincialLinkage() {
        window.open(localUrl + '/provincial-linkage/natural-disaster/drought-and-flood-first', '_blank');
    }

    // 跳转地方响应
    goLocalEmergency() {
        window.open(localUrl + '/local-emergency/natural-disaster/drought-and-flood-first', '_blank');
    }

    ngOnInit() {

    }

}
