import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }

  getUrl="http://localhost:8080/api/analytics/student/getAll";
  attendanceUrl="";

  getStudents(){
    return this.http.get(this.getUrl)
  }

  markAttendance(){
    return this.http.get(this.attendanceUrl);
  }
}
