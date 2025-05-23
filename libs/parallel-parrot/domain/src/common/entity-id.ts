import { ValueObject } from '../contracts';

export class EntityId implements ValueObject<string> {
  protected constructor(private readonly id: string) {
  }

  static fromString(id: string): EntityId {
    return new EntityId(id);
  }

  static create(): EntityId {
    const id = crypto.randomUUID();
    return new EntityId(id);
  }

  equals(other: ValueObject<string>): boolean {
    return this.value() === other.value();
  }

  value(): string {
    return this.id;
  }

}
