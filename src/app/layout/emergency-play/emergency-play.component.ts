import {Component, OnInit} from '@angular/core';
import {EmergencyPlanFileList, PlanListModel, PlanListService} from '../../services/biz-services/plan-list.service';

@Component({
    selector: 'app-emergency-play',
    templateUrl: './emergency-play.component.html',
    styleUrls: ['./emergency-play.component.less']
})
export class EmergencyPlayComponent implements OnInit {
    dataList: EmergencyPlanFileList;
    cityUrl: { name: string, url: string }[];

    constructor(public dataService: PlanListService) {
        this.cityUrl = [
            {
                name: 'NanJing',
                url: 'http://www.nanjing.gov.cn/zdgk/201811/t20181126_1221379.html',
            },
            {
                name: 'WuXi',
                url: 'http://bot.wuxi.gov.cn/ss/search?searchTarget=self&dsId=www.wuxi.gov.cn&dsText=%E2%80%9C%E4%B8%AD%E5%9B%BD%E6%97%A0%E9%94%A1%E2%80%9D%E9%97%A8%E6%88%B7%E7%BD%91%E7%AB%99&q=%E9%A2%84%E6%A1%88',
            },
            {
                name: 'XuZhou',
                url: 'http://58.218.194.20:8088/search/fullsearch.html?wd=%E9%A2%84%E6%A1%88',
            },
            {
                name: 'ChangZhou',
                url: 'http://search.changzhou.gov.cn/index.php?keyword=%D4%A4%B0%B8',
            },
            {
                name: 'SuZhou',
                url: 'http://www.suzhou.gov.cn/search4/s',
            },
            {
                name: 'NanTong',
                url: 'http://www.nantong.gov.cn/truecms/searchController/getResult.do',
            },
            {
                name: 'LianYunGang',
                url: 'http://www.lyg.gov.cn/TrueCMS/searchController/getResult.do?flag=1&siteId=147d8e37-a461-4dbc-863d-0fa52d92bb44&siteName=&excludeSites=&siteCode=&canChooseSite=&sysId=&sysName=&pageSize=10&timeScope=&order=&obj=&fileType=&columns=&query=%E9%A2%84%E6%A1%88',
            },
            {
                name: 'HuaiAn',
                url: 'http://www.huaian.gov.cn/search.html?layer=0161&keyword=%E9%A2%84%E6%A1%88',
            },
            {
                name: 'YanCheng',
                url: 'http://www.yancheng.gov.cn/jrobot/search.do?q=%E9%A2%84%E6%A1%88&webid=1&pg=10&p=1&tpl=12&category=',
            },
            {
                name: 'YangZhou',
                url: 'http://www.yangzhou.gov.cn/so/s?qt=%E9%A2%84%E6%A1%88&siteCode=3210000002',
            },
            {
                name: 'ZhenJiang',
                url: 'http://bot.zhenjiang.gov.cn/ss/search?searchTarget=&page=0&view=&q=%E9%A2%84%E6%A1%88',
            },
            {
                name: 'TaiZhou',
                url: 'http://www.taizhou.gov.cn/jrobot/search.do?q=%E9%A2%84%E6%A1%88&webid=1&pg=10&p=1&tpl=2&category=',
            },
            {
                name: 'SuQian',
                url: 'http://so.kaipuyun.cn/s?siteCode=3213000002',
            },
        ];
        this.dataList = {
            allType: [],
            accidentDisaster: [],
            naturalDisaster: [],
            publicHealth: [],
            societySafety: [],
        };
    }

    downFile() {
        this.dataService.downLoadPlan('file\/《江苏省水上搜救应急预案》.docx', '《江苏省水上搜救应急预案》.docx').subscribe((res) => {
            console.log(res);
        });
    }

    getDataList() {
        this.dataService.getPlans().subscribe(res => {
            this.dataList = res;
            console.log(this.dataList);
        });
    }

    goDetail(cityName) {
        window.open(this.cityUrl.find(({name}) => name === cityName).url, '_blank');
    }

    ngOnInit(): void {
        this.getDataList();
    }

}
