import {Component, OnInit} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours, startOfMonth
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import {Subject} from 'rxjs';
import {first} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {OpportunitySeizeDialogComponent} from '../../../opportunity/components/opportunity-seize-dialog/opportunity-seize-dialog.component';
import {Opportunity} from '../../../opportunity/models/opportunity.model';
import {OpportunityService} from '../../../opportunity/services/opportunity.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};


@Component({
  selector: 'app-month-calendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.scss']
})
export class MonthCalendarComponent implements OnInit {

  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  activeDayIsOpen = false;


  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.opportunities = this.opportunities.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  opportunities: CalendarEvent<Opportunity>[] = [];

  constructor(private matchService: OpportunityService, private dialog: MatDialog) {
  }

  ngOnInit() {
    const date = new Date();
    const firstDay = startOfMonth(date);
    const lastDay = endOfMonth(date);
    this.matchService.getAll(firstDay, lastDay).subscribe(matches => this.setOpportunities(matches));
  }

  private setOpportunities(opportunities: Opportunity[]) {
    opportunities.forEach(opportunity => this.addOpportunity(opportunity));
  }

  private addOpportunity(opportunity: Opportunity) {
    this.opportunities.push({
      start: opportunity.moment,
      end: addHours(opportunity.moment, 1),
      title: `${opportunity.percentage * 100} % matching`,
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: false,
        afterEnd: false
      },
      draggable: false,
      meta: opportunity
    });
  }


  handleEvent(action: string, event: CalendarEvent): void {
    this.dialog.open(OpportunitySeizeDialogComponent, {data: event.meta});
    console.log('action', action);
  }

  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    this.opportunities = this.opportunities.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }


}
