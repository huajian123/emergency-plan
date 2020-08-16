import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {DepartInfoModel} from '../../../../../../services/biz-services/earthquake-warning-list.service';
import {fromEvent} from 'rxjs';

@Component({
    selector: 'app-level-three',
    templateUrl: './level-three.component.html',
    styleUrls: ['./level-three.component.less']
})
export class LevelThreeComponent implements OnInit {

    currentTree = 15;
    @Input() responsibilityEntities: DepartInfoModel;

    constructor(public element: ElementRef, private renderer2: Renderer2) {
    }

    changeTree(num) {
        this.currentTree = num;
    }

    ngOnInit(): void {
        const temp = this.element.nativeElement.getElementsByClassName('hexagon-item');
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < temp.length; i++) {
            const mouseClick = fromEvent(temp[i], 'click');
            const subscription = mouseClick.subscribe(() => {
                // tslint:disable-next-line:prefer-for-of
                for (let j = 0; j < temp.length; j++) {
                    this.renderer2.removeClass(temp[j], 'hexagon-item-click');
                }
                this.renderer2.addClass(temp[i], 'hexagon-item-click');
            });
        }
    }

}
