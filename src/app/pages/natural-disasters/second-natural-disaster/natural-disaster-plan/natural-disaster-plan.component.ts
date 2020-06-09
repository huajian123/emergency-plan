import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-natural-disaster-plan',
  templateUrl: './natural-disaster-plan.component.html',
  styleUrls: ['./natural-disaster-plan.component.less']
})
export class NaturalDisasterPlanComponent implements OnInit {
  /* selectIndex: number;*/
  @Output() returnBack: EventEmitter<any>;
  constructor() {
    /* this.selectIndex = 1;*/
    this.returnBack = new EventEmitter<any>();
  }
  // 返回
  goMainPage() {
    this.returnBack.emit();
  }
  ngOnInit(): void {
  }

}
