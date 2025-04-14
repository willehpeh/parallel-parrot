import { Household, HouseholdRepository } from '@parallel-parrot/domain';

export class InMemoryHouseholdRepository implements HouseholdRepository {

  households: Household[] = [];

  async save(household: Household): Promise<void> {
    this.households.push(household);
    return Promise.resolve();
  }
}
