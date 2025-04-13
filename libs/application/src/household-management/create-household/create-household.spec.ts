import { CreateHouseholdCommand } from './create-household.command';
import { CreateHouseholdCommandHandler } from './create-household.command-handler';
import { InMemoryHouseholdRepository } from '../fixtures/in-memory.household.repository';
import { CreateHouseholdDto } from './create-household.dto';

describe('Create Household', () => {
  let command: CreateHouseholdCommand;
  let handler: CreateHouseholdCommandHandler;
  let repository: InMemoryHouseholdRepository;
  let dto: CreateHouseholdDto;

  beforeEach(async () => {
    dto = { id: '123' };
    command = new CreateHouseholdCommand(dto);
    repository = new InMemoryHouseholdRepository();
    handler = new CreateHouseholdCommandHandler(repository);

    await handler.execute(command);
  });

  it('should create a household with the right ID', async () => {
    expect(repository.households[0].snapshot()).toMatchObject({ id: '123' });
  });
});
