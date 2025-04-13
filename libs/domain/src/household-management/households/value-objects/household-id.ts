export class HouseholdId {

  constructor(private readonly _id: string) {}

  value(): string {
    return this._id;
  }
}
