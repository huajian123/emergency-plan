import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl , FormGroup} from '@angular/forms';
interface ItemData {
  id: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.less']
})


export class ProductCategoryComponent implements OnInit {
  i: number;
  validateForm!: FormGroup;
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse: boolean;
  /*table列数据*/
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[];
  constructor(private fb: FormBuilder) {
    this.isCollapse = true;
    this.listOfData = [];
    this.i = 0;
  }
  /*新增*/
  addRow(): void {
   /* this.listOfData = [
      {
        id: `${this.i}`,
        name: `Edward King ${this.i}`,
        age: 32,
        address: `London, Park Lane no. ${this.i}`
      }
  ];
    this.i++;*/
  }
  /*删除*/
  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }
  /*展开*/
  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 3 : true;
    });
  }
  /*重置*/
  resetForm(): void {
    this.validateForm.reset();
  }
  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }
  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }
  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }
  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }
  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 45; i++) {
      data.push({
        id: `${i}`,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`
      });
    }
    this.listOfData = data;
    this.updateEditCache();
    this.validateForm = this.fb.group({});
    for (let i = 0; i < 5; i++) {
      this.controlArray.push({ index: i, show: i < 3 });
      this.validateForm.addControl(`field${i}`, new FormControl());
    }
  }

}
