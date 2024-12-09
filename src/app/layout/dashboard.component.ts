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
      <div class="accordion accordion-shadow max-w-lg">
  <div class="accordion-item accordion-item-active:scale-[1.05] accordion-item-active:mb-3 active transition-transform ease-in duration-300 delay-[1ms]" id="payment-popout" >
    <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="payment-popout-collapse" aria-expanded="true">
      <span class="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      Eventos/Reservas
    </button>
    <div id="payment-popout-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-popout" role="region">
      <div class="px-5 pb-4">

<button type="button" class="btn btn-primary w-full" aria-haspopup="dialog" aria-expanded="false" aria-controls="form-modal" data-overlay="#form-modal">Criar uma Reserva</button>

<div id="form-modal" class="overlay modal overlay-open:opacity-100 hidden" role="dialog" tabindex="-1">
  <div class="modal-dialog overlay-open:opacity-100">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">User details</h3>
        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#form-modal"><span class="icon-[tabler--x] size-4"></span></button>
      </div>
      <form>
        <div class="modal-body pt-0">
          <label class="form-control mb-4">
            <div class="label">
              <span class="label-text">Full Name</span>
            </div>
            <input type="text" placeholder="John Doe" class="input" />
          </label>
          <div class="mb-0.5 flex gap-4 max-sm:flex-col">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Email</span>
              </div>
              <input type="email" placeholder="johndoe@123@gmail.com" class="input" />
            </label>
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">DOB</span>
              </div>
              <input type="date" class="input" />
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-soft btn-secondary" data-overlay="#form-modal">Close</button>
          <button type="submit" class="btn btn-primary">Save changes</button>
        </div>
      </form>
    </div>
  </div>
</div>      </div>
    </div>
  </div>
  <div class="accordion-item accordion-item-active:scale-[1.05] accordion-item-active:my-3 transition-transform ease-in duration-300 delay-[1ms]" id="delivery-popout" >
    <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="delivery-popout-collapse" aria-expanded="false">
      <span class="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
      <span class="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
      Cadastros
    </button>
    <div id="delivery-popout-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-popout" role="region">
      <div class="px-5 pb-4">
        <button class="w-full mb-2 btn">Cadastrar Sala</button>
        <button class="w-full mb-2 btn">Cadastrar Equipamento</button>
      </div>
    </div>
  </div>

</div>
    </section>
  </main>
  <section class="bg-muted py-8 px-6">
  <app-schedule></app-schedule>
  </section>`,
})

export class DashboardComponent {

}