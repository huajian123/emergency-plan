import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CitiesNameService} from '../../../../services/biz-services/earthquake-warning-list.service';
import {
    CommanderInfoModel,
    NaturalDisastersListService,
    NaturalDisastersModel
} from '../../../../services/biz-services/natural-disasters-list.service';
import {NzMessageService} from 'ng-zorro-antd';
import {DisasterLevelEnum, NaturalEnum} from '../../../../core/vo-common/BusinessEnum';

export interface FourthCitiesModel {
    countName: string;
    emergencyUrl: string;
}

@Component({
    selector: 'app-fourth-natural-disaster',
    templateUrl: './fourth-natural-disaster.component.html',
    styleUrls: ['./fourth-natural-disaster.component.less']
})
export class FourthEarthquakeDisasterComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    dataInfo: NaturalDisastersModel;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    naturalEnum = NaturalEnum;
    disasterLevel = DisasterLevelEnum;
    type: number;
    cityId: number;
    cityName: FourthCitiesModel;
    isTrue: boolean;

    constructor(private activatedRoute: ActivatedRoute, private dataServices: CitiesNameService,
                private dataService: NaturalDisastersListService, public message?: NzMessageService) {
        this.isTrue = false;
        this.cityId = null;
        this.type = null;
        this.cityName = {
            countName: '',
            emergencyUrl: ''
        };
        this.dataInfo = {
            id: null,
            planGrade: null,
            accidentType: null,
            planName: '',
            planDeptResyEntities: [],
        };
        this.teamInfos = [];
        this.commanderInfos = {
            id: null,
            resyName: '',
            resyDetail: '',
            deptName: '',
            deptPhone: '',
            grade: null
        };
        this.returnBack = new EventEmitter<any>();
    }

    async getNaturalDisastersDetail() {
        await this.dataService.getNaturalDisastersList({
            id: this.naturalEnum.Earthquake,
            planGrade: this.disasterLevel.LevelFour
        }).subscribe(res => {
            this.dataInfo = res;
            this.dataInfo.planDeptResyEntities.forEach(item => {
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
        });
    }

    linkToEmergency() {
        window.open('this.cityName.emergencyUrl', '_blank');
    }

    sendMsg() {
        this.message.success('发送信息成功');
    }

    ngOnInit(): void {
        /*  this.activatedRoute.queryParams.subscribe(param => {
              this.cityId = param.cityId;
              this.type = param.type;
              if (this.cityId === null || this.type === null) {
                  return;
              }
              this.dataServices.getNameList({id: this.cityId, type: this.type}).subscribe(res => {
                  if (res === null) {
                      return;
                  } else {
                      this.cityName = res;
                      this.isTrue = true;
                  }
              });
          });*/
        this.getNaturalDisastersDetail();

    }

}
