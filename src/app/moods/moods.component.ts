import { Component, Input, OnInit } from '@angular/core';
import { TemperatureService } from '../services/my-service.service';
import { MyTemp } from '../models/weather';


@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css']
})

export class MoodsComponent implements OnInit {
  @Input('parentData1') public userInput; 
  indexofdate : number;
  temperature : number;

  constructor(private temperatureService: TemperatureService) {}
  weathers: MyTemp =  <MyTemp>{};

  ngOnInit(): void {
    
  }

  getWeather() {
      this.temperatureService.getWeather().subscribe((data)=> {
      this.weathers = data;
      this.indexofdate = this.weathers.hourly.time.indexOf(this.userInput);
      this.temperature = this.weathers.hourly.temperature_2m[this.indexofdate];
    });
  }

  getMood(){
  
    let Mood = '';

    if(0 <= this.temperature && this.temperature  <= 5){
      Mood = 'Happy';
    }
    else if(5 < this.temperature && this.temperature <=10){
      Mood = 'Depressed';
    }
    else if(10 < this.temperature && this.temperature <=25){
      Mood = 'Cheerful';
    }
    else if(35 < this.temperature ){
      Mood = 'Angry';
    }
    return Mood;
  }


  getError() : boolean{
  
    if(this.indexofdate == -1){
        return true;
    }
    else{
        return false;
    }
}

}
