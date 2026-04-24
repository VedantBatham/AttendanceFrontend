import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mark-attendance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent {
  
  message: string = '';

  constructor(private http: HttpClient) {}

  // Called when user picks a file
  onFileSelected(event: any) {
    
    if(event.target.files.length>0){
      const file=event.target.files[0];
      const formData=new FormData();
      formData.append('image',file);
      this.http.post<any>('http://172.17.146.161:5000/predict', formData).subscribe((res:any)=>{
        this.message=res.result.students[0].status;
      });
    }
  }

  // // Called when form is submitted
  // onSubmit() {
    
  // }
    
}
