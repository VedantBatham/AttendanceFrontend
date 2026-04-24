import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../../DTO/Student/student';
import { PlannerService } from '../../../Services/PLanner/planner.service';
import { Planner } from '../../../DTO/Planner/planner';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../../Services/Student/student.service';
import { Router } from '@angular/router';
import { ViewResourceService } from '../../../Services/viewResource/view-resource.service';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  studentDetails: Student = new Student();
  plans: Planner[] = [];
  rollNo: string = "";
  overallAttendance: number = 0;   // ✅ initialize properly

  studentService = inject(StudentService);
  plannerService = inject(PlannerService);
  router = inject(Router);
  resourceService=inject(ViewResourceService)

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.rollNo = JSON.parse(userString).data.rollNumber; // ✅ correct key
      this.getStudent();
    }

    this.getPlans();
  }

  getStudent() {
    this.studentService.getStudent(this.rollNo).subscribe((res: any) => {
      this.studentDetails = res;                         // ✅ store full student
      this.overallAttendance = parseFloat(res.attendancePercentage.toFixed(2));
    });
  }

  getPlans() {
    this.plannerService.getPlan().subscribe((res: any) => {
      this.plans = res;
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }

  toViewResource(plan:Planner){
    this.resourceService.addResources(plan).subscribe((res:any)=>{
      console.log(res);
    })
    this.router.navigate(['/viewResources', plan.title]);
  }

}
