import { Appointment } from '../aggregates';

export abstract class AppointmentRepository {
  abstract make(appointment: Appointment): Promise<void>;
}
