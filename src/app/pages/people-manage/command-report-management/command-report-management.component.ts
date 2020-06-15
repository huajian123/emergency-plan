import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MyTableConfig} from '../../../share/comment/ant-table/ant-table.component';
import {NzTableQueryParams, NzModalService} from 'ng-zorro-antd';
import {SearchCommonVO} from '../../../VO/types';
import {CommandReportListService, CommandReportListModel} from 'src/app/services/biz-services/command-report-list.service';
import {PageTypeEnum} from 'src/app/core/vo-common/BusinessEnum';

@Component({
    selector: 'app-command-report-management',
    templateUrl: './command-report-management.component.html',
    styleUrls: ['./command-report-management.component.less']
})
export class CommandReportManagementComponent implements OnInit {
    validateForm: FormGroup;
    tableConfig: MyTableConfig;
    @ViewChild('operationTpl', {static: true}) operationTpl: TemplateRef<any>;
    dataList: CommandReportListModel[];
    itemId: number;
    currentPage: number;
    pageTypeEnum = PageTypeEnum;

    constructor(private fb: FormBuilder, private dataService: CommandReportListService, private modal: NzModalService) {
        this.dataList = [];
    }

    /*查看*/
    check(name) {
        console.log(name);
    }

    /*编辑*/
    edit(id) {
        this.itemId = id;
        this.currentPage = this.pageTypeEnum.AddOrEdit;
    }

    /*删除*/
    del(id) {
        this.modal.confirm({
            nzTitle: '<i>确定删除此项？</i>',
            nzOnOk: () => {
                // @ts-ignore
                /*this.dataService.delCameraManage(id).then(() => this.getDataList(this.tableConfig.pageIndex))*/},
            nzOkText: '已删除',
            nzOnCancel: () => {return},
            nzCancelText: '取消',
        });
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
        this.dataService.getCommandReportList(params).subscribe((data) => {
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
        this.itemId = null;
        this.currentPage = this.pageTypeEnum.AddOrEdit;
    }

    ngOnInit(): void {
        this.initForm();
        this.initTable();
        // this.getDataList();
    }


}
