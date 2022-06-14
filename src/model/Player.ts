import {Agent} from "./Agent";

export class Player {
  private team:string = 'FA';
  private contractPeriodMonth: number = 0;
  private agent: Agent = new Agent('none');

  constructor(private name: string) {
  }

  introduce(): void {
    console.log(`이름 : ${this.name}`);
    console.log(`소속팀 : ${this.team}`);
    console.log(`계약기간: ${this.contractPeriodMonth}`);
    this.agent.introduce();
  }

  join(team: string, contractMonth: number): void {
    this.team = team;
    this.contractPeriodMonth = contractMonth;
  }

  leave(): void {
    this.team = "FA";
  }

  extendContract(peroidMonth: number): void {
    this.contractPeriodMonth += peroidMonth;
  }

  managedBy(agent: Agent): void {
    this.agent = agent;
  }
}
