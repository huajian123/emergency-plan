import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {localUrl} from '../../../../environments/environment';
import {PageTypeEnum} from 'src/app/core/vo-common/BusinessEnum';




@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    currentPageNum: number;
    pageTypeEnum = PageTypeEnum;


    constructor(private router: Router) {
        this.currentPageNum = this.pageTypeEnum.List;
    }


    // 跳转回应急
    goEmergency() {
        window.open(localUrl + '/hazard/natural-disaster/', '_blank');
    }


    ngOnInit() {

    }

}
