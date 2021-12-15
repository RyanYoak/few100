import { Employee, ProvidesConpensationInformation } from "./employee";

describe('creating and using classes', () => {
  it('Creating an Employee', () => {

    const bob = new Employee(120_000);
    bob.firstName = 'Robert';
    bob.lastName = 'Smith';

    expect(bob.firstName).toBe('Robert');
    expect(bob.lastName).toBe('Smith');
    expect(bob.fullName).toBe('Smith, Robert');

    expect(bob.sallary).toBe(120_000);

    bob.getRaise(1000);

    expect(bob.sallary).toBe(130_000);



    function getTotalCompensation(list: ProvidesConpensationInformation[]): number{
      return list.reduce((l, r) => l + r.getCompensation(), 0);
    }
  });
});
