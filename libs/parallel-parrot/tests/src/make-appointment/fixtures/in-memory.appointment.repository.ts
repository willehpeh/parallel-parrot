import { Appointment, AppointmentRepository } from '@parallel-parrot/domain';

export class InMemoryAppointmentRepository implements AppointmentRepository {
  public list: Appointment[] = [];

  async make(appointment: Appointment): Promise<void> {
    this.list.push(appointment);
  }
}
