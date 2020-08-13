import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tree-tpl',
    templateUrl: './tree-tpl.component.html',
    styleUrls: ['./tree-tpl.component.less']
})
export class TreeTplComponent implements OnInit {
    @Input() currentNum;

    constructor() {
    }

    showModal(id) {

    }

    ngOnInit(): void {
    }
}
