import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoodsComponent } from './moods/moods.component';


const routes: Routes = [
  { path : '',  component: HomeComponent},
  { path : 'showmood', component: MoodsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MoodsComponent, HomeComponent]
