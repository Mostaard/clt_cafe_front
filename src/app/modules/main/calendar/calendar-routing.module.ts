import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './components/calendar/calendar.component';


const routes: Routes = [
  {path: 'calendar', component: CalendarComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CalendarRoutingModule {

}
