import { Employee, Person } from "./employee";

export class Retiree extends Person{
  private _pension: number = 0;
  constructor(pension:number){
    super();
    this._pension = pension;
  }

  get pension(){
    return this._pension;
  }
}
