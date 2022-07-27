import {Agent} from "../agent/Agent";
import {Player} from "./Player";
import {Teams} from "../team/Teams";

export class PlayerBuilder {
  private readonly _name: string;
  private _team!: Teams;
  private _contractPeriodMonth!: number;
  private _agent!: Agent;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get team(): Teams {
    return this._team;
  }

  setTeam(value: Teams) {
    this._team = value;
    return this;
  }

  get contractPeriodMonth(): number {
    return this._contractPeriodMonth;
  }

  setContractPeriodMonth(value: number) {
    this._contractPeriodMonth = value;
    return this;
  }

  get agent(): Agent {
    return this._agent;
  }

  setAgent(value: Agent) {
    this._agent = value;
    return this;
  }

  build() {
    const player = new Player(this.name);
    player.join(this._team, this._contractPeriodMonth);
    player.managedBy(this._agent);
    return player;
  }
}
