import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccidentEnum, DisasterLevelEnum, PageTypeEnum} from '../../../../../core/vo-common/BusinessEnum';
import {AccidentDisastersListService, CommanderInfoModel} from '../../../../../services/biz-services/accident-disasters-list.service';

@Component({
    selector: 'app-fourth-hazardous-chemicals',
    templateUrl: './fourth-hazardous-chemicals.component.html',
    styleUrls: ['./fourth-hazardous-chemicals.component.less']
})
export class FourthHazardousChemicalsComponent implements OnInit {
    @Output() returnBack: EventEmitter<any>;
    currentPage: number;
    pageTypeEnum = PageTypeEnum;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    accidentEnum = AccidentEnum;
    disasterLevel = DisasterLevelEnum;
    dataList: {
        object: any,
        array: any
    };

    constructor(private dataService: AccidentDisastersListService) {
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
        await this.dataService.getAccidentDisastersList({
            id: this.accidentEnum.HazardousChemicals,
            planGrade: this.disasterLevel.LevelFour
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
