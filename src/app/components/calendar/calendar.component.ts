import { Component, ChangeDetectorRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, DateInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { FullCalendarModule } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './events-utils';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  calendarVisible = signal(true);
  currentEvents = signal<EventApi[]>([]);
  newEvent = { title: '', start: '', end: '' };

  nameUser: string = "Treguas";
  today = new Date();
  newEventsStarts: String = ""
  newEventsEnds: String = ""

  calendarOptions = signal<CalendarOptions>({
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
  });

  constructor(private changeDetector: ChangeDetectorRef) { }

  handleCalendarToggle() {
    this.calendarVisible.update((visible) => !visible);
  }

  handleWeekendsToggle() {
    this.calendarOptions.update((options) => ({
      ...options,
      weekends: !options.weekends,
    }));
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    console.log(selectInfo)


    // // Pre-fill modal fields with selected date
    // this.newEvent.start = selectInfo.startStr;
    // this.newEvent.end = selectInfo.endStr;

    // Show the modal
    this.openModalCreateEvent(selectInfo);

  }

  addEvent() {
    const calendarApi = (document.querySelector('full-calendar') as any).getApi();

    if (this.newEvent.title) {
      calendarApi.addEvent({
        id: createEventId(),
        title: this.newEvent.title,
        start: this.newEvent.start,
        end: this.newEvent.end,
        allDay: true,
      });

      // Reset the newEvent object
      this.newEvent = { title: '', start: '', end: '' };
    }

  }



  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges();
  }

  openModalCreateEvent(data: DateSelectArg) {
    const modal = document.getElementById('form-modal') as HTMLDialogElement;
    modal.classList.remove('hidden');
    modal.classList.add('open');
    modal.classList.add('opened');

    debugger

    this.newEventsStarts = data.start.toISOString().slice(0, 16);

    // Adicionar 1 hora à data de início
    const endDate = new Date(data.start);
    endDate.setHours(endDate.getHours() + 1);

    this.newEventsEnds = endDate.toISOString().slice(0, 16);
  }

  // closeModal() {
  //   // Fecha o modal
  //   this.formModal.nativeElement.classList.add('hidden');
  // }
}
