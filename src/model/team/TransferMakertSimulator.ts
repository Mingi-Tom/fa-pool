import {PlayerBuilder} from "../player/PlayerBuilder";
import {FreeAgent} from "../agent/FreeAgent";
import {Teams} from "./Teams";
import {Player} from "../player/Player";
import {Agent} from "../agent/Agent";

export class TransferMakertSimulator {
  private static instance: TransferMakertSimulator;
  private constructor() {
  }

  static getInstance(): TransferMakertSimulator {
    if(!TransferMakertSimulator.instance) {
      TransferMakertSimulator.instance = new TransferMakertSimulator();
    }
    return TransferMakertSimulator.instance;
  }

  simulate(): void {
    console.log("선수 생성");
    let player: Player = new PlayerBuilder("박민기")
    .setAgent(new FreeAgent())
    .setTeam(Teams.NA)
    .setContractPeriodMonth(0)
    .build();

    console.log("선수 입단");
    player.introduce();
    player.join(Teams.SEOUL, 3);
    player.managedBy(new Agent("황석규"));

    console.log("선수 갱신")
    player.extendContract(3);
    player.introduce();

    console.log("선수 계약해지");
    player.leave();
    player.introduce();
  }
}
