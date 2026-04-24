import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planner } from '../../DTO/Planner/planner';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  constructor(private http : HttpClient) { }

  

  baseUrl="http://localhost:8080/api/planner"

  getPlan(){
    return this.http.get(this.baseUrl)
  }

  addPlan(planobj : Planner){
    return this.http.post(this.baseUrl,planobj)
  }

}
