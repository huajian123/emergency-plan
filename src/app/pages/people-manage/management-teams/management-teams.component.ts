import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MyTableConfig} from '../../../share/comment/ant-table/ant-table.component';
import {PageTypeEnum} from '../../../core/vo-common/BusinessEnum';
import {NzModalService, NzTableQueryParams} from 'ng-zorro-antd';
import {concatMap} from 'rxjs/operators';
import {SearchCommonVO} from '../../../VO/types';
import {GoBackParam} from '../../../core/vo-common/ReturnBackVo';
import {TeamListModel, TeamListService} from 'src/app/services/biz-services/team-list.service';

@Component({
    selector: 'app-management-teams',
    templateUrl: './management-teams.component.html',
    styleUrls: ['./management-teams.component.less']
})
export class ManagementTeamsComponent implements OnInit {
    tableConfig: MyTableConfig;
    @ViewChild('operationTpl', {static: true}) operationTpl: TemplateRef<any>;
    dataList: TeamListModel[];
    itemId: number;
    currentPage: number;
    pageTypeEnum = PageTypeEnum;

    constructor(private dataService: TeamListService, private modal: NzModalService) {
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


    /*删除*/
    del(id) {
        const that = this;
        this.modal.confirm({
            nzTitle: '<i>确定删除此项？</i>',
            nzOnOk: () => {
                this.dataService.getTeamJobsDelete(id).pipe(concatMap(() => {
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
                    title: '职责名称',
                    width: 100,
                    field: 'responsibilityName',
                },
                {
                    title: '职责内容',
                    width: 180,
                    field: 'responsibilityDetail',
                },
                {
                    title: '操作',
                    tdTemplate: this.operationTpl,
                    width: 80,
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
        await this.dataService.getTeamList(params).subscribe((data) => {
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

