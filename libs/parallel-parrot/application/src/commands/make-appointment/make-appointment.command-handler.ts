import { Appointment, AppointmentRepository } from '@parallel-parrot/domain';
import { MakeAppointmentCommand } from './make-appointment.command';

export class MakeAppointmentCommandHandler {
  constructor(private readonly appointments: AppointmentRepository) {
  }

  async execute(command: MakeAppointmentCommand): Promise<void> {
    await this.appointments.make(new Appointment());
  }
}
