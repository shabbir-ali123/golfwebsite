import { FunctionComponent } from "react";
import TeamScoreCardSection from "../components/TeamScoreCardSection";
import FriendSection from "../components/FriendSection";

const OngoingTeamScore: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[1586px] overflow-hidden text-left text-lg text-white font-poppins">
      <div className="absolute top-[38px] left-[calc(50%_-_669px)] w-[1370px] h-[234px] text-xl text-darkslategray-300 font-body-b2">
        <div className="absolute top-[63px] left-[calc(50%_-_685px)] w-[1339px] h-[171px]">
          <div className="absolute top-[0px] left-[calc(50%_-_669.5px)] w-[1339px] h-[171px]">
            <div className="absolute top-[0px] left-[calc(50%_-_669.5px)] bg-white shadow-[0px_0px_13px_rgba(0,_0,_0,_0.25)] w-[1339px] h-[171px]" />
          </div>
          <img
            className="absolute top-[24px] left-[108px] rounded-[50%] w-[123px] h-[123px] object-cover"
            alt=""
            src="/ellipse-9@2x.png"
          />
          <img
            className="absolute h-[14.04%] w-[1.68%] top-[70.76%] right-[76.44%] bottom-[15.2%] left-[21.88%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-1000008655.svg"
          />
          <div className="absolute top-[124px] left-[325px] tracking-[-0.17px] leading-[18px]">
            10,OCT ,2023
          </div>
          <div className="absolute top-[29px] left-[289px] w-[870px] h-[81px] text-21xl text-black">
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
          className="absolute h-[99.36%] w-[11.61%] top-[0%] right-[0%] bottom-[0.64%] left-[88.39%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
      </div>
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
