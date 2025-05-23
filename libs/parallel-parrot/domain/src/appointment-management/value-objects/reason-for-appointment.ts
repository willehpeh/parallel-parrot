import { ValueObject } from '../../contracts';

export class ReasonForAppointment implements ValueObject<string> {

  constructor(private readonly reason: string) {
  }

  equals(other: ValueObject<string>): boolean {
    return this.value() === other.value();
  }

  value(): string {
    return this.reason;
  }

}
