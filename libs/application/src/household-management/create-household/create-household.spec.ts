import { CreateHouseholdCommand } from './create-household.command';
import { CreateHouseholdCommandHandler } from './create-household.command-handler';
import { InMemoryHouseholdRepository } from '../fixtures/in-memory.household.repository';
import { CreateHouseholdDto } from './create-household.dto';
import { HouseholdId } from '@parallel-parrot/domain';

describe('Create Household', () => {
  let command: CreateHouseholdCommand;
  let handler: CreateHouseholdCommandHandler;
  let repository: InMemoryHouseholdRepository;
  let dto: CreateHouseholdDto;

  beforeEach(() => {
    dto = { id: '123' };
    command = new CreateHouseholdCommand(dto);
    repository = new InMemoryHouseholdRepository();
    handler = new CreateHouseholdCommandHandler(repository);
  });

  it('should create a household with the right ID', async () => {
    await handler.execute(command);
    expect(repository.households[0].snapshot()).toMatchObject({ id: dto.id });
  });

  it('should return the Household ID of the created household', async () => {
    const id = await handler.execute(command);
    expect(id).toBeInstanceOf(HouseholdId);
    expect(id.value()).toEqual(dto.id);
  });
});
