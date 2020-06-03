import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {PageTypeEnum} from '../../../core/vo-common/BusinessEnum';
import {MessageType, ShowMessageService} from "../../../share/show-message/show-message";
import {ProductListInitService} from "../../../services/biz-services/product-list.service";
import {UfastTableNs} from "../../../share/ufast-table/ufast-table.component";
import {GoBackParam} from "../../../core/vo-common/ReturnBackVo";

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  validateForm: FormGroup;
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse: boolean;
  /*表格配置项*/
  pageTypeEnum = PageTypeEnum;
  currentPage: number;
  itemId: number;
  listOfData: DataItem[];
  tableConfig: UfastTableNs.TableConfig;
  @ViewChild('operationTpl', {static: true}) operationTpl: TemplateRef<any>;

  constructor(private fb: FormBuilder,/* private messageService: ShowMessageService, private dataService: ProductListInitService*/) {
    this.isCollapse = true;
    this.currentPage = this.pageTypeEnum.List;
    this.listOfData = [{
      key: '1',
      name: 'John Brown',
      age: 1,
      address: 'New York No. 1 Lake Park'
    },
      {
        key: '2',
        name: 'Jim Green',
        age: 2,
        address: 'London No. 2 Lake Park'
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 3,
        address: 'Sidney No. 3 Lake Park'
      },
      {
        key: '4',
        name: 'John Brown',
        age: 4,
        address: 'New York No. 4 Lake Park'
      },
      {
        key: '5',
        name: 'Jim Green',
        age: 5,
        address: 'London No. 5 Lake Park'
      },
      {
        key: '6',
        name: 'Joe Black',
        age: 6,
        address: 'Sidney No. 6 Lake Park'
      },
      {
        key: '7',
        name: 'Joe Black',
        age: 7,
        address: 'Sidney No. 7 Lake Park'
      },
      {
        key: '8',
        name: 'Jim Green',
        age: 8,
        address: 'London No. 5 Lake Park'
      },
      {
        key: '9',
        name: 'Joe Black',
        age: 9,
        address: 'Sidney No. 6 Lake Park'
      },
      {
        key: '10',
        name: 'Joe Black',
        age: 10,
        address: 'Sidney No. 7 Lake Park'
      }
    ];

    this.itemId = null;
  }

  private initTable(): void {
    this.tableConfig = {
      pageSize: 7,
      pageNum: 1,
      showCheckbox: false,
      checkRowField: '_checked',
      showPagination: true,
      checkAll: false,
      total: 31,
      loading: false,
      headers: [
        {
          title: '名字',
          width: 80,
          field: 'name',
        },
        {
          title: '年纪',
          field: 'age',
          width: 50,
        },
        {
          title: '地址',
          width: 80,
          field: 'address',
        },
        {
          fixed: true,
          title: '操作',
          tdTemplate: this.operationTpl,
          width: 60
        }
      ]
    };
  }

  /*展开*/
  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 3 : true;
    });
  }

  /*新增*/
  addRow(): void {
    this.itemId = null;
    this.currentPage = this.pageTypeEnum.AddOrEdit;
  }

  /*重置*/
  resetForm(): void {
    this.validateForm.reset();
  }

  /*删除*/
  delete(id) {
   /* const modalCtrl = this.messageService.showAlertMessage('', '您确定要删除吗？', MessageType.Confirm);
    modalCtrl.afterClose.subscribe((type: string) => {
      if (type !== 'onOk') {
        return;
      }
      this.dataService.delHighRisk(id).then(() => this.getDataList(this.tableConfig.pageNum));
    });*/
  }

  edit(id) {
    this.itemId = id;
    this.currentPage = this.pageTypeEnum.AddOrEdit;
  }

  goDetail(id) {
    this.itemId = id;
    this.currentPage = this.pageTypeEnum.DetailOrExamine;
  }
  async returnToList(e?: GoBackParam) {
    this.currentPage = this.pageTypeEnum.List;
    if (!!e && e.refesh) {
      await this.getDataList(e.pageNo);
    }
  }
  async getDataList(pageNumber?: number) {
    const params = {
      pageNum: pageNumber || this.tableConfig.pageNum,
      pageSize: this.tableConfig.pageSize,
      filters: {}
    };
    //const {total, list, pageNum} = await this.dataService.getProductList(params);
    //this.tableConfig.total = total;
    //this.tableConfig.pageNum = pageNum;
    //this.dataList = list || [];
  }
  ngOnInit(): void {
    this.initTable();
   /* this.getDataList();*/
    this.validateForm = this.fb.group({});
    for (let i = 0; i < 5; i++) {
      this.controlArray.push({index: i, show: i < 3});
      this.validateForm.addControl(`field${i}`, new FormControl());
    }
  }

}
