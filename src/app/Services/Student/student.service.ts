import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getUrl="http://localhost:8080/api/analytics/student/"

  getStudent(rollNo : string){
    return this.http.get(this.getUrl+rollNo)
  }
}
