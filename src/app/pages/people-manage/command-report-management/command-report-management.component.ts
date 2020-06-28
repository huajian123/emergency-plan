import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MyTableConfig} from '../../../share/comment/ant-table/ant-table.component';
import {NzModalService, NzTableQueryParams} from 'ng-zorro-antd';
import {SearchCommonVO} from '../../../VO/types';
import {CommandReportListModel, CommandReportListService} from 'src/app/services/biz-services/command-report-list.service';
import {PageTypeEnum} from 'src/app/core/vo-common/BusinessEnum';
import {GoBackParam} from 'src/app/core/vo-common/ReturnBackVo';
import {concatMap} from 'rxjs/operators';

@Component({
    selector: 'app-command-report-management',
    templateUrl: './command-report-management.component.html',
    styleUrls: ['./command-report-management.component.less']
})
export class CommandReportManagementComponent implements OnInit {
    tableConfig: MyTableConfig;
    @ViewChild('operationTpl', {static: true}) operationTpl: TemplateRef<any>;
    dataList: CommandReportListModel[];
    itemId: number;
    currentPage: number;
    pageTypeEnum = PageTypeEnum;

    constructor(private dataService: CommandReportListService, private modal: NzModalService) {
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
                this.dataService.getDeleteList(id).pipe(concatMap(() => {
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
                    title: '事故类型',
                    width: 100,
                    field: 'accidentType',
                    pipe: 'accidentType'
                },
                {
                    title: '事故灾害等级',
                    width: 100,
                    field: 'accidentGrade',
                },
                {
                    title: '状态',
                    width: 250,
                    field: 'temporary',
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
        await this.dataService.getCommandReportList(params).subscribe((data) => {
            const {list, total, pageNum} = data;
            this.dataList = list || [];
            this.dataList.forEach(item => {
                switch (item.accidentGrade) {
                    case 1:
                        item.temporary = '由' + item.sendDepartmentName + '向' + item.acceptDepartmentName + '汇报';
                        break;
                    default:
                        item.temporary = '由' + item.sendDepartmentName + '向' + item.acceptDepartmentName + '指挥';
                        break;
                }
            });
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
