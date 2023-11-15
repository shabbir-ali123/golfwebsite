import { FunctionComponent } from "react";
import TeamScoreCardSection from "../components/TeamScoreCardSection";
import FriendSection from "../components/SingleTeamName";
import ChampionShipName from "../components/ChampionShipName";

const OngoingTeamScore: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[1586px] overflow-hidden text-left text-lg text-white font-poppins">
      <ChampionShipName/>
      <div className="absolute top-[calc(50%_-_468px)] left-[calc(50%_-_669px)] w-[1339px] h-[1031px]">
        <div className="absolute top-[calc(50%_-_515.5px)] left-[calc(50%_-_669.5px)] w-[1339px] h-[1031px]">
          <div className="absolute top-[calc(50%_-_515.5px)] left-[calc(50%_-_669.5px)] w-[1339px] h-[1031px]">
            <div className="absolute top-[calc(50%_-_515.5px)] left-[calc(50%_-_669.5px)] [background:linear-gradient(180deg,_#edfffd,_#f2fffa)] w-[1339px] h-[1031px] overflow-hidden" />
          </div>
          <TeamScoreCardSection />
        </div>
      </div>
      <div className="absolute top-[2197px] left-[1248px] leading-[20px] font-medium">
        RESULT
      </div>
      <div className="absolute top-[2287px] left-[1248px] leading-[20px] font-medium">
        WINNER
      </div>
      <FriendSection />
    </div>
  );
};

export default OngoingTeamScore;
