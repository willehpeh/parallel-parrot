import {
  MakeAppointmentCommand,
  MakeAppointmentCommandHandler,
  MakeAppointmentDto
} from '@parallel-parrot/application';
import { InMemoryAppointmentRepository } from './fixtures/in-memory.appointment.repository';

describe('Making an appointment', () => {

  let command: MakeAppointmentCommand;
  let handler: MakeAppointmentCommandHandler;
  let dto: MakeAppointmentDto;
  let appointments: InMemoryAppointmentRepository;

  beforeEach(() => {
    appointments = new InMemoryAppointmentRepository();
    handler = new MakeAppointmentCommandHandler(appointments);
    dto = {
      studentId: 'studentId',
    };
    command = new MakeAppointmentCommand(dto);
  });

  describe('Given the room and the staff member are available', () => {
    it('should successfully make one appointment', async () => {
      await handler.execute(command);
      expect(appointments.list.length).toBe(1);
    });
  });
});
