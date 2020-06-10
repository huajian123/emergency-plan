import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProjectListService, ProjectModel} from '../../../services/biz-services/project-list.service';
import {NzTableQueryParams} from 'ng-zorro-antd';
import {SearchCommonVO} from '../../../VO/types';
import {MyTableConfig} from '../../../share/comment/ant-table/ant-table.component';

@Component({
    selector: 'app-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.less']
})
export class TableListComponent implements OnInit {

    validateForm: FormGroup;
    tableConfig: MyTableConfig;
    isCollapse: boolean;
    @ViewChild('operationTpl', {static: true}) operationTpl: TemplateRef<any>;
    dataList: ProjectModel[];


    constructor(private fb: FormBuilder, private dataService: ProjectListService) {
        this.isCollapse = true;
        this.dataList = [];
    }


    check(name) {
        console.log(name);
    }

    private initTable(): void {
        this.tableConfig = {
            headers: [
                {
                    title: '名称',
                    width: 100,
                    field: 'sensorNo',
                }, {
                    title: '年龄',
                    width: 100,
                    field: 'id',
                },
                {
                    title: '名称',
                    width: 100,
                    field: 'sensorNo',
                }, {
                    title: '年龄',
                    width: 100,
                    field: 'id',
                },
                {
                    title: '名称',
                    width: 100,
                    field: 'sensorNo',
                },
                {
                    title: '年龄',
                    width: 100,
                    field: 'id',
                },
                {
                    title: '名称',
                    width: 100,
                    field: 'sensorNo',
                }, {
                    title: '年龄',
                    width: 100,
                    field: 'id',
                },
                {
                    title: '名称',
                    width: 100,
                    field: 'sensorNo'
                }, {
                    title: '年龄',
                    width: 100,
                    field: 'id',
                },
                {
                    title: '名称',
                    width: 100,
                    field: 'sensorNo',
                },
                {
                    title: '操作',
                    tdTemplate: this.operationTpl,
                    width: 150,
                }
            ],
            total: 0,
            loading: false,
            pageSize: 10,
            pageIndex: 1,
        };
    }

    /*展开*/
    toggleCollapse(): void {
        this.isCollapse = !this.isCollapse;
    }

    /*新增*/
    addRow(): void {
    }

    /*重置*/
    resetForm(): void {
        this.validateForm.reset();
    }

    initForm() {
        this.validateForm = this.fb.group({
            ruleName: [null],
            desc: [null],
        });
    }

    // 修改一页几条
    changePageSize(e) {
        this.tableConfig.pageSize = e;
    }

    getDataList(e?: NzTableQueryParams) {
        this.tableConfig.loading = true;
        const params: SearchCommonVO<any> = {
            pageSize: this.tableConfig.pageSize,
            pageNum: e?.pageIndex || this.tableConfig.pageIndex
        };
        this.dataService.getProjectlist(params).subscribe((data) => {
            const {list, total, pageNum} = data;
            this.dataList = list;
            this.tableConfig.total = total;
            this.tableConfig.pageIndex = pageNum;
            this.tableConfig.loading = false;
        }, () => {
            this.tableConfig.loading = false;
        });
    }

    add() {
        console.log(123);
    }

    ngOnInit(): void {
        this.initForm();
        this.initTable();
        // this.getDataList();
    }

}
