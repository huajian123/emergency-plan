import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DisasterLevelEnum, PageTypeEnum, PublicHealthEnum} from '../../../../../core/vo-common/BusinessEnum';
import {CommanderInfoModel, PublicHealthListService} from '../../../../../services/biz-services/public-health-list.service';

@Component({
    selector: 'app-second-food-safety',
    templateUrl: './second-food-safety.component.html',
    styleUrls: ['./second-food-safety.component.less']
})
export class SecondFoodSafetyComponent implements OnInit {
    @Output() returnBack: EventEmitter<any>;
    currentPage: number;
    pageTypeEnum = PageTypeEnum;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    publicHealthEnum = PublicHealthEnum;
    disasterLevel = DisasterLevelEnum;
    dataList: {
        object: any,
        array: any
    };

    constructor(private dataService: PublicHealthListService) {
        this.returnBack = new EventEmitter<any>();
        this.currentPage = this.pageTypeEnum.List;
        this.teamInfos = [];
        this.dataList = {object: null, array: []};
        this.commanderInfos = {
            deptName: '',
            deptPhone: '',
            resyName: '',
            resyDetail: ''
        };

    }

    clickCities(cityName) {
        this.getRequestData();
    }

    returnToList(e) {
        this.returnBack.emit(this.currentPage = this.pageTypeEnum.List);
    }

    async getRequestData() {
        this.dataList.array.length = 0;
        await this.dataService.getPublicHealthList({
            id: this.publicHealthEnum.FoodSafety,
            planGrade: this.disasterLevel.LevelTwo
        }).subscribe(res => {
            if (res.planDeptResyEntities === null) {
                this.dataList = {object: null, array: []};
            } else {
                res.planDeptResyEntities.forEach(item => {
                    switch (item.grade) {
                        case 0:
                            this.commanderInfos = {
                                resyName: item.resyName,
                                resyDetail: item.resyDetail,
                                deptPhone: item.deptPhone,
                                deptName: item.deptName
                            };
                            break;
                        default:
                            const data = {
                                resyName: item.resyName,
                                resyDetail: item.resyDetail,
                                deptPhone: item.deptPhone,
                                deptName: item.deptName
                            };
                            this.teamInfos.push(data);
                            break;
                    }

                });
                this.dataList = {object: this.commanderInfos, array: this.teamInfos};
            }
            this.currentPage = this.pageTypeEnum.DetailOrExamine;
        });
    }

    ngOnInit(): void {
    }
}
