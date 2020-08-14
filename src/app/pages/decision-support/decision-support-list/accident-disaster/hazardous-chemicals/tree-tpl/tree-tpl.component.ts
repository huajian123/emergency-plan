import {Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {DepartInfoModel} from '../../../../../../services/biz-services/earthquake-warning-list.service';

@Component({
    selector: 'app-tree-tpl',
    templateUrl: './tree-tpl.component.html',
    styleUrls: ['./tree-tpl.component.less'],
})
export class TreeTplComponent implements OnInit {
    @Input() currentNum;
    @Input() responsibilityEntities: DepartInfoModel[];
    isVisible = false;
    data: DepartInfoModel;

    constructor() {
    }

    handleCancel() {
        this.isVisible = false;
    }

    showModal(id, e) {
        this.data = this.responsibilityEntities.find((item) => {
            return item.id === id;
        });
        this.isVisible = true;
        console.log(this.data);
        e.stopPropagation();
    }

    ngOnInit(): void {
        console.log(this.responsibilityEntities);
    }
}
