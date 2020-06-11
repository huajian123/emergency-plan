import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {localUrl} from '../../../../environments/environment';


export enum PageTypeEnum {
    MainPage,
    IndustryNewsDetail
}

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    currentPageNum: number;
    pageTypeEnum = PageTypeEnum;


    constructor(private router: Router) {
        this.currentPageNum = this.pageTypeEnum.MainPage;
    }


    // 跳转回本页
    goMainPage() {
        this.currentPageNum = this.pageTypeEnum.MainPage;
    }


    // 跳转回环保
    goEnvir() {
        window.open('', '_blank');
    }

    // 跳转回应急
    goEmergency() {
        window.open(localUrl + '/hazard/natural-disaster/', '_blank');
    }

    goSafe() {
        window.open('', '_blank');
    }

    // 跳转到封闭园区
    goCompany() {
        window.open('', '_blank');
    }




    // 去行业动态详情页
    goIndustryNewsInfo() {
        this.currentPageNum = this.pageTypeEnum.IndustryNewsDetail;
    }





    benxitong() {
        this.router.navigate(['/main/index']);
    }

    goMnagePage() {
        this.router.navigate(['/park/index']);
    }

    // 获取企业介绍


    ngOnInit() {

    }

}
