import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-plan',
  templateUrl: './total-plan.component.html',
  styleUrls: ['./total-plan.component.less']
})
export class TotalPlanComponent implements OnInit {
  accidentId = 0;
  accidentType = 0;
  planGrade = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
