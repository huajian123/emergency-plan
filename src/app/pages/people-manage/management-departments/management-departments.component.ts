import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MyTableConfig} from 'src/app/share/comment/ant-table/ant-table.component';
import {PageTypeEnum} from 'src/app/core/vo-common/BusinessEnum';
import {NzModalService, NzTableQueryParams} from 'ng-zorro-antd';
import {
    DepartmentsManagementListModel,
    DepartmentsManagementListService,
    SearchModel
} from 'src/app/services/biz-services/department-list.service';
import {SearchCommonVO} from 'src/app/VO/types';
import {concatMap} from 'rxjs/operators';
import {GoBackParam} from 'src/app/core/vo-common/ReturnBackVo';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-management-departments',
    templateUrl: './management-departments.component.html',
    styleUrls: ['./management-departments.component.less']
})
export class ManagementDepartmentsComponent implements OnInit {
    validateForm: FormGroup;
    tableConfig: MyTableConfig;
    @ViewChild('operationTpl', {static: true}) operationTpl: TemplateRef<any>;
    dataList: DepartmentsManagementListModel[];
    itemId: number;
    currentPage: number;
    pageTypeEnum = PageTypeEnum;
    searchParam: SearchModel;

    constructor(private dataService: DepartmentsManagementListService, private modal: NzModalService) {
        this.currentPage = this.pageTypeEnum.List;
        this.searchParam = {};
        this.dataList = [];
    }

    /*重置*/
    resetForm(): void {
        this.searchParam = {};
    }

    /*新建*/
    add() {
        this.itemId = null;
        this.currentPage = this.pageTypeEnum.AddOrEdit;
    }


    /*编辑*/
    edit(id) {
        this.itemId = id;
        this.currentPage = this.pageTypeEnum.AddOrEdit;
    }


    /*删除*/
    del(id) {
        const that = this;
        this.modal.confirm({
            nzTitle: '<i>确定删除此项？</i>',
            nzOnOk: () => {
                this.dataService.getDepartmentsDelete(id).pipe(concatMap(() => {
                    return this.getDataList({pageIndex: this.tableConfig.pageIndex} as NzTableQueryParams);
                })).subscribe();
            },
            nzOkText: '已删除',
            nzOnCancel: () => {
                return;
            },
            nzCancelText: '取消',
        });
    }

    private initTable(): void {
        this.tableConfig = {
            headers: [
                {
                    title: '部门名称',
                    width: 100,
                    field: 'departmentName',
                },
                {
                    title: '座机',
                    width: 100,
                    field: 'departmentPhone',
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


    // 修改一页几条
    changePageSize(e) {
        this.tableConfig.pageSize = e;
    }

    async getDataList(e?: NzTableQueryParams) {
        this.tableConfig.loading = true;
        const params: SearchCommonVO<any> = {
            pageSize: this.tableConfig.pageSize,
            pageNum: e?.pageIndex || this.tableConfig.pageIndex,
            searchDTO: {
                name: this.searchParam.name || '',
            }
        };
        await this.dataService.getDepartmentsList(params).subscribe((data) => {
            const {list, total, pageNum} = data;
            this.dataList = list || [];
            this.tableConfig.total = total;
            this.tableConfig.pageIndex = pageNum;
            this.tableConfig.loading = false;
        }, () => {
            this.tableConfig.loading = false;
        });
    }

    async returnToList(e?: GoBackParam) {
        this.currentPage = this.pageTypeEnum.List;
        if (!(!!e && e.refesh)) {
            await this.getDataList({pageIndex: e.pageIndex} as NzTableQueryParams);
        }
    }

    ngOnInit(): void {
        this.initTable();
        this.getDataList();
    }


}
