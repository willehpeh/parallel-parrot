import { Household } from '../entities';

export interface HouseholdRepository {
  save(household: Household): Promise<void>;
}
