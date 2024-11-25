import { Component } from '@angular/core';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { NavComponent } from '../components/nav/nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CalendarComponent, RouterModule, NavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  
  // const [reservations, setReservations] = useState([
  //   {
  //     id: "R001",
  //     room: "Sala de Reunião 1",
  //     date: "2023-06-15",
  //     startTime: "10:00",
  //     endTime: "12:00",
  //     purpose: "Reunião de Planejamento",
  //     participants: 8,
  //   },
  //   {
  //     id: "R002",
  //     room: "Auditório",
  //     date: "2023-06-16",
  //     startTime: "14:00",
  //     endTime: "16:00",
  //     purpose: "Palestra",
  //     participants: 50,
  //   },
  //   {
  //     id: "R003",
  //     room: "Sala de Aula 2",
  //     date: "2023-06-17",
  //     startTime: "09:00",
  //     endTime: "11:00",
  //     purpose: "Aula de Programação",
  //     participants: 25,
  //   },
  // ])
  // const [newReservation, setNewReservation] = useState({
  //   room: "",
  //   date: "",
  //   startTime: "",
  //   endTime: "",
  //   purpose: "",
  //   participants: 0,
  // })
  // const handleReservationChange = (field, value) => {
  //   setNewReservation({ ...newReservation, [field]: value })
  // }
  // const handleReservationSubmit = () => {
  //   const newReservationId = `R00${reservations.length + 1}`
  //   setReservations([...reservations, { ...newReservation, id: newReservationId }])
  //   setNewReservation({
  //     room: "",
  //     date: "",
  //     startTime: "",
  //     endTime: "",
  //     purpose: "",
  //     participants: 0,
  //   })
  // }
  // const handleReservationDelete = (id) => {
  //   setReservations(reservations.filter((reservation) => reservation.id !== id))
  // }

}
