import { CommonModule } from '@angular/common';
import { Component , inject, OnInit} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { Student } from '../../../DTO/Student/student';
import { TeacherService } from '../../../Services/Teacher/teacher.service';

@Component({
  selector: 'app-teacher',
  imports: [CommonModule,RouterLink],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {
  
  students : Student[]=[]
  teacherService=inject(TeacherService)
  router=inject(Router)
  ngOnInit(): void {
      this.getStudents();
  }

  getStudents(){
    this.teacherService.getStudents().subscribe((res:any)=>{
      this.students=res;
    })
  }

  markAttendance(){
    this.router.navigateByUrl("markAttendance");
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }
}
