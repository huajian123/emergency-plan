import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {localUrl} from '../../../../environments/environment';
import {SearchCommonVO} from '../../../core/vo-common/SearchCommonVO';
import {ParkMainLayoutService, ParkMainLayoutServiceNs} from '../../../services/biz-services/park-main-layout.service';
import NoticeModel = ParkMainLayoutServiceNs.NoticeModel;

export enum PageTypeEnum {
  Announcement = 1, // 公告
  IndustryNews, // 行业动态发布
  FileNotifi, // 文件通知
  ParkIntroduction, // 园区介绍
  MainPage,
  AnnouncementDetail,
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
  parkIntroductionInfo: NoticeModel;
  announcementList: NoticeModel[];
  sleAnnouncementOrNews: NoticeModel; // 选中的公告或行业动态
  industryNewsList: NoticeModel[]; // 行业动态列表
  fileNotifiList: NoticeModel[]; // 文件通知列表

  constructor(private router: Router, private dataService: ParkMainLayoutService) {
    this.currentPageNum = this.pageTypeEnum.MainPage;
    this.announcementList = [];
    this.industryNewsList = [];
    this.fileNotifiList = [];
    this.parkIntroductionInfo = {
      pictureUrl: '',
      detail: ''
    };
    this.sleAnnouncementOrNews = {};
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
    window.open( '', '_blank');
  }

  // 跳转到封闭园区
  goCompany() {
    window.open('', '_blank');
  }

  // 跳转公告页
  goAnnouncementPage() {
    this.currentPageNum = this.pageTypeEnum.Announcement;
  }

  // 去公告详情页
  goNoticeInfo(i, type: 'announcement' | 'industryNews') {
    this.currentPageNum = this.pageTypeEnum.AnnouncementDetail;
    if (type === 'announcement') {
      this.sleAnnouncementOrNews = this.announcementList[i];
    } else {
      this.sleAnnouncementOrNews = this.industryNewsList[i];
    }
  }

  // 去行业动态详情页
  goIndustryNewsInfo() {
    this.currentPageNum = this.pageTypeEnum.IndustryNewsDetail;
  }
  // 跳转园区介绍
  goParkIntroductionPage() {
    if (!!this.parkIntroductionInfo && this.parkIntroductionInfo.pictureUrl.trim()) {
      this.currentPageNum = this.pageTypeEnum.ParkIntroduction;
    }
  }

  // 跳转行业动态发布列表
  goIndustryNewsPage() {
    this.currentPageNum = this.pageTypeEnum.IndustryNews;
  }

  // 跳转文件通知列表
  goFileNotifiPage() {
    this.currentPageNum = this.pageTypeEnum.FileNotifi;
  }
  benxitong() {
    this.router.navigate(['/main/index']);
  }

  goMnagePage() {
    this.router.navigate(['/park/index']);
  }

  // 获取企业介绍
  getPageInfo() {
    // 获取园区介绍
    const params: SearchCommonVO<{ noticeType: number }> = {
      pageSize: 1,
      pageNum: 1,
      filters: {noticeType: PageTypeEnum.ParkIntroduction}
    };
    this.dataService.getAnnouncementList(params).then(res => this.parkIntroductionInfo = res.list[0]);

    // 获取公告
    params.pageSize = 5;
    params.filters.noticeType = this.pageTypeEnum.Announcement;
    this.dataService.getAnnouncementList(params).then(res => this.announcementList = res.list);

    // 获取行业动态
    params.pageSize = 2;
    params.filters.noticeType = this.pageTypeEnum.IndustryNews;
    this.dataService.getAnnouncementList(params).then(res => this.industryNewsList = res.list);

    // 获取文件通知列表
    params.pageSize = 5;
    params.filters.noticeType = this.pageTypeEnum.FileNotifi;
    this.dataService.getAnnouncementList(params).then(res => this.fileNotifiList = res.list);
  }
  ngOnInit() {
    this.getPageInfo();
  }

}
