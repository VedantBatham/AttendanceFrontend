import { Component, inject } from '@angular/core';
import { ViewResourceService } from '../../../Services/viewResource/view-resource.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-resources',
  imports: [CommonModule],
  templateUrl: './view-resources.component.html',
  styleUrl: './view-resources.component.css'
})
export class ViewResourcesComponent {

  // resourceService = inject(ViewResourceService);
  // route = inject(ActivatedRoute);

  // resource: any;
  // quiz:any;

  // ngOnInit(): void {
  //   const title = this.route.snapshot.paramMap.get('title'); // ✅ get title from URL
  //   if (title) {
  //     this.getResources(title);
  //   }
  // }

  // getResources(title: string) {
  // this.resourceService.getResource(title).subscribe((res: any) => {
  //   console.log("resource:", res.resource);
  //   console.log("quiz:", res.quiz);
  //   console.log("Full API Response 👉", res);

  //   this.resource = res.resource;
  //   this.quiz = res.quiz;
  // });
}


