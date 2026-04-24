import { Component, inject } from '@angular/core';
import { Planner } from '../../../DTO/Planner/planner';
import { FormsModule } from '@angular/forms';
import { PlannerService } from '../../../Services/PLanner/planner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-plan',
  standalone: true,   // if using standalone
  imports: [FormsModule, CommonModule],
  templateUrl: './add-plan.component.html',
  styleUrl: './add-plan.component.css'
})
export class AddPlanComponent {
  newPlan: Planner = new Planner();

  plannerService = inject(PlannerService);

  onSavePlan() {
    this.plannerService.addPlan(this.newPlan).subscribe((res: any) => {
      console.log("Plan saved successfully:", res);
      this.newPlan = new Planner(); // reset form
    });
  }
}
