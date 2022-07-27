import {Greeter} from "./Greeter";

export class Person implements Greeter {
  constructor(private _name: string) {
  }

  introduce(): void {
    console.log(`name : ${this._name}`);
  }
}
