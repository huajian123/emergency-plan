import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
    selector: 'app-level-two',
    templateUrl: './level-two.component.html',
    styleUrls: ['./level-two.component.less']
})
export class LevelTwoComponent implements OnInit {
    constructor(public element: ElementRef, private renderer2: Renderer2) {
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
