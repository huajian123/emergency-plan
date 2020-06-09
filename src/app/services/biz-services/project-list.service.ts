import {Inject, Injectable} from '@angular/core';
import {BaseHttp} from '../http/base-http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_CONFIG} from '../services.module';
import {PageInfo} from '../../VO/types';

export interface ProjectModel {
  productName: string;
  casNo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectListService extends BaseHttp {

  constructor(public http: HttpClient, @Inject(API_CONFIG) public uri: string) {
    super(http, uri);
  }

  public getProjectlist(params): Observable<PageInfo<ProjectModel>> {
    return this.get('/data/major/hazard/sensors', params);
  }

}
