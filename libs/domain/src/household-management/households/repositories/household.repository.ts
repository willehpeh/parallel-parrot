import { Household } from '../entities';
import { HouseholdId } from '../value-objects';

export interface HouseholdRepository {
  save(household: Household): Promise<HouseholdId>;
}
