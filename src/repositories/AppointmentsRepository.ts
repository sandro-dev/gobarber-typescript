import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public create({ provider, date }: Omit<Appointment, 'id'>): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    const findDate = this.appointments.find(appointment =>
      isEqual(appointment.date, date),
    );

    return findDate || null;
  }
}

export default AppointmentsRepository;
