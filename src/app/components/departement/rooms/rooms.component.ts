import { Component, OnInit } from '@angular/core';
import { FetchData } from '../../../services/FetchData.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  room= "";
  departments= "";
  department: string;
  roomCode: string;
  roomName: string;
  roomPlace: number;
  // place: number;

  constructor(private fetchData: FetchData) { }

  ngOnInit() {
    this.getDepartement();
    let endPoint = "api/department/room/";

    this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          this.room = data;
        },
        (error) => {
          console.log('unable to get info');
        });
  }

  getDepartement(){
    let endPoint = 'api/department/department/';

    this.fetchData.get(endPoint)
      .subscribe(
        (data) => {
          this.departments = data;
          console.log(this.departments[0]);
        },
        (error) => {
        console.log('unable to get info');
          
        });
  }

  onSave() {

    const roomForm = {
      // : this.roomCode
      name : this.roomName,
      places: this.roomPlace,
      department: this.department,

    }

    let endPoint = "api/department/room/";

    this.fetchData.post(endPoint, roomForm)
      .subscribe();
  }
}
