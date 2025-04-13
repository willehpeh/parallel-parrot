import { HouseholdId } from '../value-objects';

export class Household {

  private _id: HouseholdId;

  private constructor(id: HouseholdId) {
    this._id = id;
  }

  static create(props: {
    id: HouseholdId;
  }) {
    return new Household(props.id);
  }

  snapshot() {
    return {
      id: this._id.value(),
    };
  }
}
