import { CreateHouseholdDto } from './create-household.dto';

export class CreateHouseholdCommand {
  id: string;

  constructor(dto: CreateHouseholdDto) {
    this.id = dto.id;
  }
}
