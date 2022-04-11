import { Component, OnInit } from '@angular/core';
import { MoodsComponent } from '../moods/moods.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  timeInput : string;
  dateInput : string;

  constructor(private moodsComponent : MoodsComponent) {
    
  }

  ngOnInit() {
   
  }

   getDay(userDate: string , userTime : string) : string {

    return  String(userDate+'T'+userTime);
  }
}
