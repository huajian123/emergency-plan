import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {SimpleReuseStrategy} from '../../utils/reuse-strategy';

export interface TabModel {
  title: string,
  path: string,
}

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private _tabArray: TabModel[];
  private _currSelectedIndexTab: number = 0;

  constructor(private router: Router) {
    this._tabArray = [];
  }

  addTab(param: TabModel) {
    if (!this._tabArray.find((value) => value.title === param.title)) {
      this._tabArray.push(param);
    }
  }

  getTabArray() {
    return this._tabArray;
  }

  // 右键移除tab
  delRightTab(path, index) {
    this._tabArray.length = index + 1;
    let tempCacheRouters = {};
    this._tabArray.forEach(({path}) => {
      const tempPath = this.formatePath(path);
      for (let i in SimpleReuseStrategy._cacheRouters) {
        if (i === tempPath) {
          tempCacheRouters[i] = SimpleReuseStrategy._cacheRouters[i];
        }
      }
    });
    SimpleReuseStrategy._cacheRouters = {...tempCacheRouters};
    if (this._currSelectedIndexTab > index) {
      this.router.navigateByUrl(path);
      SimpleReuseStrategy.waitDelete = path;
    }
  }

  // 右键移除其他tab
  delOtharTab(path, index) {
    for (let i = 0; i < this._tabArray.length; i++) {
      if (this._tabArray[i].path !== path) {
        this._tabArray.splice(i, 1);
        i--;
      }
    }
    const tempPath = this.formatePath(path);
    for (let i in SimpleReuseStrategy._cacheRouters) {
      if (i !== tempPath) {
        SimpleReuseStrategy.deleteRouteSnapshot(i);
      }
    }
    this.router.navigateByUrl(path);
    SimpleReuseStrategy.waitDelete = path;
  }

  // 点击tab标签上x图标删除tab的动作,右键删除当前tab动作
  delTab(path, index) {
    // 移除当前选中的tab
    if (index === this._currSelectedIndexTab) {
      this._tabArray.splice(index, 1);
      this._currSelectedIndexTab = index - 1 < 0 ? 0 : index - 1;
      this.router.navigateByUrl(this._tabArray[this._currSelectedIndexTab].path);
    } else if (index < this._currSelectedIndexTab) {
      this._tabArray.splice(index, 1);
      this._currSelectedIndexTab = this._currSelectedIndexTab - 1;
    } else if (index > this._currSelectedIndexTab) {
      this._tabArray.splice(index, 1);
    }
    const tempPath = this.formatePath(path);
    SimpleReuseStrategy.deleteRouteSnapshot(tempPath);
  }

  findIndex(path) {
    const current = this._tabArray.findIndex((tabItem) => {
      return tabItem.path == path;
    });
    this._currSelectedIndexTab = current;
    return current;
  }

  getCurrentTabIndex() {
    return this._currSelectedIndexTab;
  }

  formatePath(path: string) {
    return path.substring(path.lastIndexOf('\/') + 1);
  }

}
