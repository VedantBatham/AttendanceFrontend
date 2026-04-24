import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planner } from '../../DTO/Planner/planner';

@Injectable({
  providedIn: 'root'
})
export class ViewResourceService {

  constructor(private http:HttpClient) { }


  posturl="http://localhost:8080/api/addResource";

  getUrl="http://localhost:8080/api/suggestResource/";

  addResources(plan : Planner){
    return this.http.post(this.posturl,plan);
  }

  getResource(title : string){
    return this.http.get(this.getUrl+title);
  }


}
