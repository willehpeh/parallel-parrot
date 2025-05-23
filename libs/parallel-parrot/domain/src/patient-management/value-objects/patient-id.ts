import { ValueObject } from '../../contracts';

export class PatientId implements ValueObject<string> {
  private constructor(private readonly id: string) {
  }

  static fromString(id: string): PatientId {
    return new PatientId(id);
  }

  static create(): PatientId {
    const id = crypto.randomUUID();
    return new PatientId(id);
  }

  equals(other: ValueObject<string>): boolean {
    return this.value() === other.value();
  }

  value(): string {
    return this.id;
  }

}
