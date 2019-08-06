import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './components/calendar/calendar.component';
import {CalendarRoutingModule} from './calendar-routing.module';
import {CalendarModule as CalendarExternalModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {MonthCalendarComponent} from './components/month-calendar/month-calendar.component';
import {OpportunityModule} from '../opportunity/opportunity.module';

@NgModule({
  declarations: [CalendarComponent, MonthCalendarComponent],
  imports: [
    CalendarRoutingModule,
    CalendarExternalModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CommonModule,
    OpportunityModule,
  ]
})
export class CalendarModule {
}
