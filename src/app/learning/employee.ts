export abstract class Person{
  public firstName = '';
  public lastName = '';

  get fullName(){
    return `${this.lastName}, ${this.firstName}`;
  }

}

export interface ProvidesConpensationInformation{
  getCompensation: () => number;
}

export class Employee extends Person /*implements ProvidesConpensationInformation*/{
  //private _sallary!:number;
  private _sallary:number = 0;


  constructor(startingSallary: number){
    super();
    this._sallary = startingSallary;
  }
  //getCompensation{
  //  return this._sallary;
  //};


  get sallary(){
    return this._sallary;
  }

  getRaise(amount: number){
    this._sallary = amount;
  }
}
