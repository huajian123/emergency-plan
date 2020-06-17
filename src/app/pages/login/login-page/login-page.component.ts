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
            /* nzTitle: '此模块还在开发中...',*/
            nzContent: '<p>此模块还在开发中...</p>',
            nzOnOk: () => console.log('OK')
        });
    }
    // 跳转回应急
    goEmergency() {
        window.open(localUrl + '/hazard/natural-disaster/', '_blank');
    }


    ngOnInit() {

    }

}
