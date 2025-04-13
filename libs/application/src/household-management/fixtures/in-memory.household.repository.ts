import { Household, HouseholdId, HouseholdRepository } from '@parallel-parrot/domain';

export class InMemoryHouseholdRepository implements HouseholdRepository {

  households: Household[] = [];

  async save(household: Household): Promise<HouseholdId> {
    this.households.push(household);
    return Promise.resolve(new HouseholdId());
  }
}
