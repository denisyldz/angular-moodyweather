import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { MyTemp } from '../models/weather';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root',
})
export class TemperatureService {
    weathers: MyTemp;
    temperature: number;
    getMoodsByWeather(moods: string) {
      throw new Error('Method not implemented.');
    }

    constructor(private http: HttpClient) {}
    
    getWeather() {
        return this.http
        .get(environment.apiUrl)
        .pipe(map((response)=> response as MyTemp));
    }
  
      
}

