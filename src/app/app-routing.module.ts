import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/profile', pathMatch: 'full'},
  {path: '', loadChildren: './modules/main/profile/profile.module#ProfileModule'},
  {path: '', loadChildren: './modules/main/calendar/calendar.module#CalendarModule'},
  {path: '', loadChildren: './modules/main/search/search.module#SearchModule'},
  {path: '', loadChildren: './modules/main/history/history.module#HistoryModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
