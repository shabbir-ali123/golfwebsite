import { FunctionComponent } from "react";
import LiveScoreTeam1 from "./LiveScoreTeam1";
import LiveScoringHole from "./LiveScoringHole";
import { Link, useNavigate } from "react-router-dom";
const TeamScoreCardSection: FunctionComponent = () => {
  return (
    <div className="absolute top-[290px] left-[16px] w-[1302px] h-[558px] text-left text-13xl text-gray1-1800 font-poppins">
      <b className="absolute top-[44px] left-[104px] leading-[20px] [text-shadow:0px_7px_4px_rgba(0,_0,_0,_0.25)]">
        Team Score Card
      </b>
      <img
        className="absolute top-[0px] left-[0px] w-[90px] h-24 object-cover"
        alt=""
        src="/img/rectangle-1271@2x.png"
      />
      <div className="absolute top-[159px] left-[0px] w-[1302px] h-[399px] text-lg text-white">
        <div className="absolute top-[0px] left-[0px] w-[1302px] h-[399px] text-5xl">
          <div className="absolute top-[0px] left-[0px] w-[493px] h-[55px]">
            <div className="absolute top-[0px] left-[0px] w-[239px] h-[55px]">
              <div className="absolute top-[0px] left-[0px] rounded bg-fuchsia-200 w-[239px] h-[55px]" />
              <div className="absolute top-[18px] left-[54px] leading-[20px]">
                <Link
                  className="no-underline text-white"
                  to="/ongoing-team-score"
                >
                  Team View
                </Link>
              </div>
            </div>

            <div className="absolute top-[0px] left-[254px] w-[239px] h-[55px] text-darkslategray-100">
              <div className="absolute top-[0px] left-[0px] rounded bg-whitesmoke-200 w-[239px] h-[55px]" />

              <div className="absolute top-[18px] left-[24px] leading-[20px]">
                <Link
                  className="no-underline text-darkslategray-100"
                  to="/ongoing-indiviual-score"
                >
                  Individual Score
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-[86px] left-[0px] w-[1302px] h-[313px] text-lg text-dimgray-100">
            <LiveScoreTeam1 carNumber="23 " />
            <div className="absolute top-[289px] left-[184px] w-[934px] h-6 text-black">
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
            <div className="absolute top-[0px] left-[0px] w-[1302px] h-[251px] text-base text-white">
              <div className="absolute top-[0px] left-[0px] w-[1302px] h-[251px]">
                <LiveScoringHole />
                <div className="absolute top-[0px] left-[515px] w-[58px] h-[154px]">
                  <div className="absolute top-[0px] left-[0px] w-[58px] h-[154px]">
                    <div className="absolute top-[0px] left-[0px] bg-white w-[58px] h-[154px]" />
                  </div>
                  <div className="absolute top-[1px] left-[1px] w-14 h-[62px]">
                    <div className="absolute top-[0px] left-[0px] bg-gray1-1300 w-14 h-[62px]" />
                    <div className="absolute top-[21px] left-[14px] leading-[20px] font-medium">
                      Out
                    </div>
                  </div>
                  <div className="absolute top-[91px] left-[1px] w-14 h-[62px] text-lg">
                    <div className="absolute top-[0px] left-[0px] bg-gray1-1300 w-14 h-[62px]" />
                    <div className="absolute top-[21px] left-[17px] leading-[20px] font-medium">
                      39
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[516px] w-[438px] h-[251px] text-lg">
                  <div className="absolute top-[0px] left-[380px] w-[58px] h-[154px]">
                    <div className="absolute top-[0px] left-[0px] bg-white w-[58px] h-[154px]" />
                  </div>
                  <div className="absolute top-[1px] left-[381px] w-14 h-[62px] text-base">
                    <div className="absolute top-[0px] left-[0px] bg-gray1-1300 w-14 h-[62px]" />
                    <div className="absolute top-[21px] left-[20px] leading-[20px] font-medium">
                      IN
                    </div>
                  </div>
                  <div className="absolute top-[91px] left-[381px] w-14 h-[62px]">
                    <div className="absolute top-[0px] left-[0px] bg-gray1-1300 w-14 h-[62px]" />
                    <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] leading-[20px] font-medium">
                      37
                    </div>
                  </div>
                  <div className="absolute top-[180px] left-[381px] w-14 h-[71px]">
                    <div className="absolute top-[0px] left-[0px] bg-gray1-1300 box-border w-14 h-[71px] border-[1px] border-solid border-white" />
                    <div className="absolute top-[calc(50%_-_9.5px)] left-[calc(50%_-_9px)] leading-[20px] font-medium">
                      10
                    </div>
                  </div>
                  <div className="absolute top-[180px] left-[0px] w-14 h-[71px]">
                    <div className="absolute top-[0px] left-[0px] bg-gray1-1300 box-border w-14 h-[71px] border-[1px] border-solid border-white" />
                    <div className="absolute top-[calc(50%_-_9.5px)] left-[calc(50%_-_5px)] leading-[20px] font-medium">
                      7
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[92px] left-[5px] w-[134px] h-[60px] text-lg">
                <div className="absolute top-[0px] left-[0px] rounded bg-deepskyblue-100 w-[134px] h-[60px]" />
                <div className="absolute top-[20px] left-[5px] leading-[20px] font-medium">
                  Team Name
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[107px] left-[1199px] leading-[20px] font-medium">
          RESULT
        </div>
        <div className="absolute top-[198px] left-[1196px] leading-[20px] font-medium">
          WINNER
        </div>
      </div>
    </div>
  );
};

export default TeamScoreCardSection;
