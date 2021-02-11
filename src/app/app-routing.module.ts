import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriberListComponent } from './components/subscriber-list/subscriber-list.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'subscribers'
  },
  {
    path: 'subscribers', component: SubscriberListComponent,
  },
  {
    path: 'subscribers/:id', component: SubscriberComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
