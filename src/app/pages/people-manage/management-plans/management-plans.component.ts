import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MyTableConfig} from 'src/app/share/comment/ant-table/ant-table.component';
import {PlanListModel, PlanListService} from 'src/app/services/biz-services/plan-list.service';
import {NzModalService, NzTableQueryParams} from 'ng-zorro-antd';
import {PageTypeEnum} from 'src/app/core/vo-common/BusinessEnum';
import {concatMap} from 'rxjs/operators';
import {SearchCommonVO} from 'src/app/VO/types';
import {GoBackParam} from 'src/app/core/vo-common/ReturnBackVo';

@Component({
    selector: 'app-management-plans',
    templateUrl: './management-plans.component.html',
    styleUrls: ['./management-plans.component.less']
})
export class ManagementPlansComponent implements OnInit {
    tableConfig: MyTableConfig;
    @ViewChild('operationTpl', {static: true}) operationTpl: TemplateRef<any>;
    dataList: PlanListModel[];
    itemId: number;
    currentPage: number;
    pageTypeEnum = PageTypeEnum;

    constructor(private dataService: PlanListService, private modal: NzModalService) {
        this.currentPage = this.pageTypeEnum.List;
        this.dataList = [];
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

    detail(id) {
        this.itemId = id;
        this.currentPage = this.pageTypeEnum.DetailOrExamine;
    }
    /*删除*/
    del(id) {
        const that = this;
        this.modal.confirm({
            nzTitle: '<i>确定删除此项？</i>',
            nzOnOk: () => {
                this.dataService.getPlanListDelete(id).pipe(concatMap(() => {
                    return this.getDataList({pageIndex: this.tableConfig.pageIndex} as NzTableQueryParams);
                })).subscribe();
            },
            nzOkText: '确定',
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
                    title: '预案名称',
                    width: 100,
                    field: 'planName',
                },
                {
                    title: '事故类型',
                    width: 100,
                    field: 'accidentType',
                    pipe: 'accidentType'
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
            pageNum: e?.pageIndex || this.tableConfig.pageIndex
        };
        await this.dataService.getPlanList(params).subscribe((data) => {
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

