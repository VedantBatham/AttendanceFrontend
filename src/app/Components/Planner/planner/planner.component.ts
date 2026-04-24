import { Component , inject, OnInit} from '@angular/core';
import { Planner } from '../../../DTO/Planner/planner';
import { PlannerService } from '../../../Services/PLanner/planner.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-planner',
  imports: [CommonModule],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css'
})
export class PlannerComponent implements OnInit{
  plans : Planner[]=[];

  plannerService=inject(PlannerService);
  router=inject(Router)

  ngOnInit(): void {
      this.getPlans()
  }

  getPlans(){
    this.plannerService.getPlan().subscribe((res: any)=>{
        this.plans=res
      })
  }

  onAddPlan(){
    this.router.navigateByUrl("add-plan")
  }

}
