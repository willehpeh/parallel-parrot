import { ValueObject } from '../contracts';

export class AppointmentDate implements ValueObject<string> {

  private readonly year: number;
  private readonly month: number;
  private readonly day: number;

  constructor(dateString: string) {
    const [year, month, day] = dateString.split('-').map(Number);
    if (this.invalidMonth(month)) {
      throw new Error('Invalid month');
    }
    if (this.invalidDay(day)) {
      throw new Error('Invalid day');
    }
    if (this.invalid31(day, month)) {
      throw new Error('Invalid day for the given month');
    }
    if (this.invalidFebruary(day, month)) {
      throw new Error('Invalid day for the given month');
    }
    this.year = year;
    this.month = month;
    this.day = day;
  }

  private invalidFebruary(day: number, month: number) {
    return day > 29 && month === 2;
  }

  private invalid31(day: number, month: number) {
    return day > 30 && (month === 2 || month === 4 || month === 6 || month === 9 || month === 11);
  }

  private invalidDay(day: number) {
    return day < 1 || day > 31;
  }

  private invalidMonth(month: number) {
    return month < 1 || month > 12;
  }

  value(): string {
    return `${ this.yearString() }-${ this.monthString() }-${ this.dayString() }`;
  }

  equals(other: AppointmentDate): boolean {
    return this.value() === other.value();
  }

  private yearString(): string {
    return this.year.toString();
  }

  private monthString(): string {
    return this.month.toString().padStart(2, '0');
  }

  private dayString(): string {
    return this.day.toString().padStart(2, '0');
  }
}
