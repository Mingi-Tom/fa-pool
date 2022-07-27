import {Agent} from "../agent/Agent";
import {Person} from "../Person";
import {FreeAgent} from "../agent/FreeAgent";

export class Player extends Person{
  private team:string = 'FA';
  private contractPeriodMonth: number = 0;
  private agent: Agent = new FreeAgent();

  constructor(name: string) {
    super(name);
  }

  introduce(): void {
    super.introduce();
    console.log(`소속팀 : ${this.team}`);
    console.log(`계약기간: ${this.contractPeriodMonth}`);
    console.log(`에이전트: `);
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
