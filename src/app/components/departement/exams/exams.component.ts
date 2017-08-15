import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  exams= "";
  // departments= "";
  // department: string;
  examCode: string;
  examName: string;
  examStartDate: string;
  examEndDate: string;

  constructor(private fetchData: FetchData) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    let endPoint = "api/student/exam/";

    this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          this.exams = data;
        },
        (error) => {
          console.log('unable to get info');
        });
  }

  onSave() {

    const ExamForm = {
      // : this.roomCode
      name : this.examName,
      code: this.examCode,
      start_date: this.examStartDate,
      end_date: this.examEndDate,

    }

    let endPoint = "api/student/exam/";

    this.fetchData.post(endPoint, ExamForm)
      .subscribe();
      
    this.getInfo();
  }

  
}
