import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-warehouse',
  templateUrl: './resource-warehouse.component.html',
  styleUrls: ['./resource-warehouse.component.less']
})
export class ResourceWarehouseComponent implements OnInit {

  constructor() { }

  goPage() {
    window.open('http://ajj.jiangsu.gov.cn/col/col64954/index.html', '_blank');
  }

  ngOnInit(): void {
  }

}
