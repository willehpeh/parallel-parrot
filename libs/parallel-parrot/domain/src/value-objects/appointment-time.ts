import { ValueObject } from '../contracts';

export class AppointmentTime implements ValueObject<string> {
  private readonly hour: number;
  private readonly minute: number;

  constructor(timeString: string) {
    const [hour, minute] = timeString.split(':').map(Number);
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
      throw new Error('Invalid time format');
    }
    this.hour = hour;
    this.minute = minute;
  }

  value(): string {
    return `${ this.hourString() }:${ this.minuteString() }`;
  }

  equals(other: AppointmentTime): boolean {
    return this.value() === other.value();
  }

  private hourString() {
    return this.hour.toString().padStart(2, '0');
  }

  private minuteString() {
    return this.minute.toString().padStart(2, '0');
  }
}
