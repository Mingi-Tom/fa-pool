import {Player} from "./model/Player";
import {Agent} from "./model/Agent";

const createNewMember = (playerName: string, team: string, contractMonth: number, agentName: string): Player => {
  const noob = new Player(playerName);
  noob.join(team, contractMonth);
  noob.managedBy(new Agent(agentName));
  return noob;
};

const sony = createNewMember('손흥민', '토트넘 홋스퍼', 10000, '박민기');

sony.introduce();

sony.extendContract(99999);
sony.leave();

sony.introduce();


