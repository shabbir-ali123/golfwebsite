import { FunctionComponent } from "react";

const LiveScoreHeader: FunctionComponent = () => {
  return (
    <div className="absolute top-[24px] left-[16px] w-[1302px] h-[203px] text-left text-17xl text-darkslateblue-300 font-poppins">
      <div className="absolute top-[0px] left-[0px] w-[482px] h-[199px]">
        <div className="absolute top-[0px] left-[0px] w-[482px] h-[199px]">
          <div className="absolute top-[49px] left-[0px] rounded-[50%] [background:linear-gradient(180deg,_#8eff93,_rgba(171,_255,_132,_0.78))] w-[84px] h-[84px]" />
          <img
            className="absolute top-[0px] left-[6px] w-[57px] h-[103px] object-cover"
            alt=""
            src="/img/rectangle-1248@2x.png"
          />
          <img
            className="absolute top-[87px] left-[370px] rounded-[50%] w-28 h-28 object-cover"
            alt=""
            src="/img/ellipse-2301@2x.png"
          />
          <b className="absolute top-[103px] left-[51px] uppercase [text-shadow:0px_7px_4px_#ccf2fe]">
            LIVE Scoring Table
          </b>
        </div>
      </div>
      <div className="absolute top-[131px] left-[1062px] w-60 h-[72px] text-5xl text-white">
        <div className="absolute top-[0px] left-[0px] rounded-smi bg-deepskyblue-100 w-60 h-[72px]" />
        <div className="absolute top-[18px] left-[18px] w-[205px] h-9">
          <div className="absolute top-[0px] left-[41px] font-medium">
            Update Score
          </div>
          <img
            className="absolute h-[94.44%] w-[16.59%] top-[2.78%] right-[83.9%] bottom-[2.78%] left-[-0.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/img/group1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LiveScoreHeader;
