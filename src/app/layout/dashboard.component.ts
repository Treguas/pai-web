import { Component } from "@angular/core";
import { CalendarComponent } from "../components/calendar/calendar.component";
import { RouterModule } from "@angular/router";
import { ScheduleComponent } from "../components/schedule/schedule.component";

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CalendarComponent, RouterModule, ScheduleComponent],
  template: `
  <main class="flex-1 grid grid-cols-70-30 gap-4 p-4">
    <section>
      <app-calendar></app-calendar>
    </section>
    <section>
    </section>
  </main>
  <section class="bg-muted py-8 px-6">
  <app-schedule></app-schedule>
  </section>`,
})

export class DashboardComponent {

}