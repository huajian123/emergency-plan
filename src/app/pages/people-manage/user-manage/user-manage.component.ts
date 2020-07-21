import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MyTableConfig} from '../../../share/comment/ant-table/ant-table.component';
import {LoginInfoModel, PageTypeEnum} from '../../../core/vo-common/BusinessEnum';
import {NzModalService, NzTableQueryParams} from 'ng-zorro-antd';
import {GoBackParam} from '../../../core/vo-common/ReturnBackVo';
import {UserManageModel, UserManageService} from 'src/app/services/biz-services/user-list.service';
import {EVENT_KEY} from '../../../../environments/staticVariable';
import {SearchCommonVO} from '../../../VO/types';
import {concatMap} from 'rxjs/operators';

@Component({
    selector: 'app-user-manage',
    templateUrl: './user-manage.component.html',
    styleUrls: ['./user-manage.component.less']
})
export class UserManageComponent implements OnInit {
    tableConfig: MyTableConfig;
    @ViewChild('operationTpl', {static: true}) operationTpl: TemplateRef<any>;
    dataList: UserManageModel[];
    itemId: number;
    currentPage: number;
    pageTypeEnum = PageTypeEnum;
    loginInfo: LoginInfoModel;

    constructor(private dataService: UserManageService, private modal: NzModalService) {
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
                this.dataService.userDelete({delId: id, myId: this.loginInfo.id}).pipe(concatMap(() => {
                    return this.getDataList();
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
                    title: '账号名称',
                    width: 100,
                    field: 'account',
                },
                {
                    title: '账号密码',
                    width: 100,
                    field: 'password',
                },
                {
                    title: '账号角色',
                    width: 100,
                    field: 'role',
                    pipe: 'roleManage',
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

    async getDataList(e?: NzTableQueryParams) {
        this.tableConfig.loading = true;
        const params: SearchCommonVO<any> = {
            pageSize: this.tableConfig.pageSize,
            pageNum: e?.pageIndex || this.tableConfig.pageIndex
        };
        await this.dataService.userLoginList(params).subscribe((data) => {
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
        this.loginInfo = JSON.parse(window.sessionStorage.getItem(EVENT_KEY.loginInfo));
        this.initTable();
        this.getDataList();
    }


}
