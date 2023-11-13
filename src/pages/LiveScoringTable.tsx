import { FunctionComponent } from "react";
import LiveScoreHeader from "../components/LiveScoreHeader";
import LiveScoreHoles from "../components/LiveScoreOut";
import LiveScoreTeam1 from "../components/LiveScoreTeam1";
import LiveScoreTeams from "../components/LiveScoreTeams";
import LiveScoringThirdRow from "../components/LiveScoringThirdRow";
import LiveScoringLastRow from "../components/LiveScoringLastRow";
import ChampionShipName from "../components/ChampionShipName";

const LiveScoringTable: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[1586px] overflow-hidden text-left text-lg text-white font-poppins">
     <ChampionShipName/>
      <div className="absolute top-[350px] left-[230px] w-[1339px] h-[1053px]">
        <div className="absolute top-[0px] left-[0px] w-[1339px] h-[1053px]">
          <div className="absolute top-[0px] left-[0px] w-[1339px] h-[1053px]">
            <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#edfffd,_#f2fffa)] w-[1339px] h-[1053px] overflow-hidden">
              <div className="absolute top-[428px] left-[16px] bg-whitesmoke-100 shadow-[0px_4px_19px_rgba(0,_0,_0,_0.25)] w-[193px] h-[459px]" />
            </div>
          </div>
          <LiveScoreHeader />
          <LiveScoreHoles />
          <div className="absolute top-[272px] left-[1212px] leading-[20px] font-medium">
            RESULT
          </div>
          <div className="absolute top-[363px] left-[1208px] leading-[20px] font-medium">
            WINNER
          </div>
          <div className="absolute top-[915px] left-[200px] w-[934px] h-6 text-black">
            <div className="absolute top-[0px] left-[0px] w-[87px] h-6">
              <div className="absolute top-[2px] left-[35px] leading-[20px] font-medium">
                Birdie
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-mediumseagreen-100 w-6 h-6" />
            </div>
            <div className="absolute top-[0px] left-[115px] w-[65px] h-6">
              <div className="absolute top-[2px] left-[35px] leading-[20px] font-medium">
                Par
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-lightseagreen-200 w-6 h-6" />
            </div>
            <div className="absolute top-[0px] left-[208px] w-[154px] h-6">
              <div className="absolute top-[2px] left-[35px] leading-[20px] font-medium">
                Double Eagle
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-darkslateblue-100 w-6 h-6" />
            </div>
            <div className="absolute top-[0px] left-[390px] w-[85px] h-6">
              <div className="absolute top-[2px] left-[35px] leading-[20px] font-medium">
                Eagle
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-deepskyblue-200 w-6 h-6" />
            </div>
            <div className="absolute top-[0px] left-[503px] w-[92px] h-6">
              <div className="absolute top-[2px] left-[35px] leading-[20px] font-medium">
                Bogey
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-goldenrod w-6 h-6" />
            </div>
            <div className="absolute top-[0px] left-[623px] w-[167px] h-6">
              <div className="absolute top-[2px] left-[35px] leading-[20px] font-medium">
                Double-Bogey
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-orangered w-6 h-6" />
            </div>
            <div className="absolute top-[0px] left-[818px] w-[116px] h-6">
              <div className="absolute top-[2px] left-[35px] leading-[20px] font-medium">
                3+Bogey
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-sienna w-6 h-6" />
            </div>
          </div>
        </div>
        <LiveScoreTeam1
          carNumber="22 "
          ellipseIconTop="429px"
          ellipseIconLeft="16px"
          propWidth="177px"
          propWidth1="149px"
          propWidth2="149px"
          propLeft="119px"
        />
        
        <LiveScoreTeams
          score="23 "
          playerAge="27"
          gameName="Hole-in-Won"
          imageId="/img/ellipse-23087@2x.png"
        />
        <LiveScoreTeams
          score="22"
          playerAge="28"
          gameName="Tee-rific Titan"
          imageId="/img/ellipse-23088@2x.png"
          propTop="717px"
          propBackgroundColor="#afffaf"
          propBackgroundColor1="#1d3d86"
        />
        <LiveScoringThirdRow/>
        <LiveScoringLastRow />
        <img
          className="absolute top-[430px] left-[207px] w-[974px] h-[455px]"
          alt=""
          src="/img/group-1000009240.svg"
        />
      </div>
      <div className="absolute top-[691px] left-[145px] w-[135px] h-16 text-5xl">
        <div className="absolute top-[0px] left-[100px] bg-fuchsia-200 shadow-[0px_0px_5px_#cf24eb] w-[135px] h-16" />
        <div className="absolute top-[22px] left-[127px] leading-[20px]">{`Teams `}</div>
      </div>
      <div className="absolute top-[2197px] left-[1248px] leading-[20px] font-medium">
        RESULT
      </div>
      <div className="absolute top-[2287px] left-[1248px] leading-[20px] font-medium">
        WINNER
      </div>
    </div>
  );
};

export default LiveScoringTable;
