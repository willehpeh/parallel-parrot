import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateHouseholdCommand } from './create-household.command';
import { Household, HouseholdId, HouseholdRepository } from '@parallel-parrot/domain';

@CommandHandler(CreateHouseholdCommand)
export class CreateHouseholdCommandHandler implements ICommandHandler<CreateHouseholdCommand> {

  constructor(private readonly repository: HouseholdRepository) {}

  async execute(command: CreateHouseholdCommand): Promise<HouseholdId> {
    const householdId = new HouseholdId(command.id);
    const household = Household.create({ id: householdId });
    await this.repository.save(household);
    return householdId;
  }
}
