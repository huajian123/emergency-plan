import {Component, OnInit} from '@angular/core';
import {MapPipe, MapSet} from '../../../share/directives/pipe/map.pipe';

export enum VariableEnum {
    zero = 0,
    one = 1,
    two = 2,
    three = 3,
    four = 4,
    twenty = 20
}

interface OptionsInterface {
    value: number;
    label: string;
}

@Component({
    selector: 'app-decision-support-list',
    templateUrl: './decision-support-list.component.html',
    styleUrls: ['./decision-support-list.component.less']
})
export class DecisionSupportListComponent implements OnInit {
    currentPage: number;
    accidentType: number;
    accidentId: number;
    numVariable = VariableEnum;
    /*中间数组变量*/
    temporaryNameOptions: OptionsInterface[];
    /*灾害类型下拉*/
    accidentTypeOptions: OptionsInterface[];
    /*自然灾害名称下拉*/
    naturalNameOptions: OptionsInterface[];
    /*事故灾害名称下拉*/
    accidentNameOptions: OptionsInterface[];
    /*公共卫生下拉*/
    publicHealthNameOptions: OptionsInterface[];
    /*社会安全下拉*/
    socialSecurityNameOptions: OptionsInterface[];

    constructor() {
        this.accidentType = null;
        this.accidentId = null;
        this.temporaryNameOptions = [];
        this.accidentTypeOptions = [];
        this.naturalNameOptions = [];
        this.publicHealthNameOptions = [];
        this.socialSecurityNameOptions = [];
    }


    changeAccidentIdValue(index) {
        this.temporaryNameOptions = [];
        if (index !== null) {
            switch (index) {
                case 1:
                    this.temporaryNameOptions = this.naturalNameOptions;
                    break;
                case 2:
                    this.temporaryNameOptions = this.accidentNameOptions;
                    break;
                case 3:
                    this.temporaryNameOptions = this.publicHealthNameOptions;
                    break;
                default:
                    this.temporaryNameOptions = this.socialSecurityNameOptions;
                    break;
            }
            this.accidentId = null;
        }
    }


    goRest() {
        this.accidentType = null;
        this.accidentId = null;
        this.currentPage = 0;
    }

    goSure() {
        this.currentPage = this.accidentId;
    }

    ngOnInit(): void {
        this.accidentTypeOptions = [...MapPipe.transformMapToArray(MapSet.accidentType)];
        this.naturalNameOptions = [...MapPipe.transformMapToArray(MapSet.naturalDisastersType)];
        this.accidentNameOptions = [...MapPipe.transformMapToArray(MapSet.accidentDisastersType)];
        this.publicHealthNameOptions = [...MapPipe.transformMapToArray(MapSet.publicHealthType)];
        this.socialSecurityNameOptions = [...MapPipe.transformMapToArray(MapSet.socialSecurityType)];
    }

}