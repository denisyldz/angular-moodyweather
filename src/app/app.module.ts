import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureService } from './services/my-service.service';
import { MoodsComponent } from './moods/moods.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [					
    AppComponent,
    MoodsComponent,
    HomeComponent
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
 
  ],
  providers: [TemperatureService,HomeComponent,MoodsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
