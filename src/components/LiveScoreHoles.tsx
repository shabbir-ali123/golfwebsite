import { FunctionComponent } from "react";
import SectionCard4 from "./SectionCard4";

const LiveScoreHoles: FunctionComponent = () => {
  return (
    <div className="absolute top-[251px] left-[16px] w-[1302px] h-[154px] text-left text-base text-white font-poppins">
      <SectionCard4 />
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
      <div className="absolute top-[0px] left-[896px] w-[58px] h-[154px]">
        <div className="absolute top-[0px] left-[0px] w-[58px] h-[154px]">
          <div className="absolute top-[0px] left-[0px] bg-white w-[58px] h-[154px]" />
        </div>
        <div className="absolute top-[1px] left-[1px] w-14 h-[62px]">
          <div className="absolute top-[0px] left-[0px] bg-gray1-1300 w-14 h-[62px]" />
          <div className="absolute top-[21px] left-[20px] leading-[20px] font-medium">
            IN
          </div>
        </div>
        <div className="absolute top-[91px] left-[1px] w-14 h-[62px] text-lg">
          <div className="absolute top-[0px] left-[0px] bg-gray1-1300 w-14 h-[62px]" />
          <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] leading-[20px] font-medium">
            37
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveScoreHoles;
