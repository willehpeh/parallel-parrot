import { MakeAppointmentDto } from './make-appointment.dto';

export class MakeAppointmentCommand {
  constructor(public readonly dto: MakeAppointmentDto) {
  }
}
