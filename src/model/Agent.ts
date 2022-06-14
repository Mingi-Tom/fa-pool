export class Agent{
  constructor(private name: string) {
  }

  introduce(): void {
    console.log(`Agent : ${this.name}`);
  }
}
