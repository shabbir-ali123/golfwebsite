import { FunctionComponent } from "react";
import LiveScoreHeader from "../components/LiveScoreHeader";
import LiveScoreHoles from "../components/LiveScoreHoles";
import SectionCard1 from "../components/LiveScoreTeam1";
import SectionCard5 from "../components/SectionCard5";
import LiveScoreTeams from "../components/LiveScoreTeams";
import SectionCard6 from "../components/SectionCard6";

const OngoingEvent: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[1586px] overflow-hidden text-left text-lg text-white font-poppins">
      <div className="absolute top-[38px] left-[calc(50%_-_620px)] w-[1241px] h-[234px] text-xl text-darkslategray-300 font-body-b2">
        <div className="absolute top-[63px] left-[calc(50%_-_620.5px)] w-[1210px] h-[171px]">
          <div className="absolute top-[0px] left-[calc(50%_-_605px)] w-[1210px] h-[171px]">
            <div className="absolute top-[0px] left-[calc(50%_-_605px)] bg-white shadow-[0px_0px_13px_rgba(0,_0,_0,_0.25)] w-[1210px] h-[171px]" />
          </div>
          <img
            className="absolute top-[24px] left-[59px] rounded-[50%] w-[123px] h-[123px] object-cover"
            alt=""
            src="/ellipse-9@2x.png"
          />
          <img
            className="absolute h-[14.04%] w-[1.86%] top-[70.76%] right-[77.98%] bottom-[15.2%] left-[20.17%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-1000008655.svg"
          />
          <div className="absolute top-[124px] left-[276px] tracking-[-0.17px] leading-[18px]">
            10,OCT ,2023
          </div>
          <div className="absolute top-[29px] left-[240px] w-[870px] h-[81px] text-21xl text-black">
            <div className="absolute top-[48px] left-[0px] tracking-[-0.17px] leading-[18px] font-semibold">
              ZOZO CHAMPIONSHIP
            </div>
            <div className="absolute top-[0px] left-[0px] w-[115px] h-[29px] text-3xl text-white">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-seagreen-200 w-[115px] h-[29px]" />
              <div className="absolute top-[6px] left-[9px] tracking-[-0.17px] leading-[18px]">
                OFFICIAL
              </div>
            </div>
            <div className="absolute h-[59.26%] w-[30.11%] top-[40.74%] right-[0%] bottom-[0%] left-[69.89%] text-5xl text-darkgray-400">
              <img
                className="absolute h-[58.13%] w-[8.78%] top-[20.83%] right-[91.22%] bottom-[21.04%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-1000008649.svg"
              />
              <div className="absolute top-[0px] left-[34px] w-[228px] h-12">
                <div className="absolute top-[0px] left-[0px] tracking-[-0.17px] leading-[18px]">
                  Hiroshima , Japan
                </div>
                <div className="absolute top-[30px] left-[0px] text-xl tracking-[-0.17px] leading-[18px] text-lightseagreen-200">
                  Cypress Lakes Golf Club
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute h-[99.36%] w-[12.81%] top-[0%] right-[0%] bottom-[0.64%] left-[87.19%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
      <div className="absolute top-[350px] left-[151px] w-[1339px] h-[1053px]">
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
        <SectionCard1
          carNumber="22 "
          ellipseIconTop="429px"
          ellipseIconLeft="16px"
          propWidth="177px"
          propWidth1="149px"
          propWidth2="149px"
          propLeft="119px"
        />
        <SectionCard5 />
        <LiveScoreTeams
          score="23 "
          playerAge="27"
          gameName="Hole-in-Won"
          imageId="/ellipse-23087@2x.png"
        />
        <LiveScoreTeams
          score="22"
          playerAge="28"
          gameName="Tee-rific Titan"
          imageId="/ellipse-23088@2x.png"
          propTop="717px"
          propBackgroundColor="#afffaf"
          propBackgroundColor1="#1d3d86"
        />
        <SectionCard6 />
        <img
          className="absolute top-[430px] left-[207px] w-[974px] h-[455px]"
          alt=""
          src="/group-1000009240.svg"
        />
      </div>
      <div className="absolute top-[691px] left-[67px] w-[135px] h-16 text-5xl">
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

export default OngoingEvent;
