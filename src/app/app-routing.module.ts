import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { FramestatsComponent } from './framestats/framestats.component';
import { WeaponstatsComponent } from './weaponstats/weaponstats.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = 
[
  { path: 'events', component: EventsComponent },
  { path: '', component: HomeComponent },
  { path: 'warframestats', component: FramestatsComponent },
  { path: 'weaponstats', component: WeaponstatsComponent },
  { path: 'tutorials', component: TutorialsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
