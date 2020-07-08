import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
    CommanderInfoModel,
    SocialSecurityListService,
    SocialSecurityModel
} from '../../../../services/biz-services/social-security-list.service';
import {SocialSecurityEnum} from '../../../../core/vo-common/BusinessEnum';

@Component({
    selector: 'app-second-natural-disaster',
    templateUrl: './second-natural-disaster.component.html',
    styleUrls: ['./second-natural-disaster.component.less']
})
export class SecondFinancialDisasterComponent implements OnInit {
    @Input() currentPageNum: number;
    @Output() returnBack: EventEmitter<any>;
    @Input() id: number;
    dataInfo: SocialSecurityModel;
    commanderInfos: CommanderInfoModel;
    teamInfos: CommanderInfoModel[];
    socialSecurityEnum = SocialSecurityEnum;

    constructor(private dataService: SocialSecurityListService) {
        this.dataInfo = {
            id: null,
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

    async getSocialSecurityDetail() {
        await this.dataService.getSocialSecurityList(this.socialSecurityEnum.Financial).subscribe(res => {
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

    ngOnInit(): void {
        this.getSocialSecurityDetail();
    }
}
