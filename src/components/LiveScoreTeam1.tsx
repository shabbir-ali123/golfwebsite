import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link, useNavigate } from "react-router-dom";
type LiveScoreTeam1Type = {
  carNumber?: string;

  /** Style props */
  ellipseIconTop?: CSSProperties["top"];
  ellipseIconLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
};

const LiveScoreTeam1: FunctionComponent<LiveScoreTeam1Type> = ({
  carNumber,
  ellipseIconTop,
  ellipseIconLeft,
  propWidth,
  propWidth1,
  propWidth2,
  propLeft,
}) => {
  const groupDiv3Style: CSSProperties = useMemo(() => {
    return {
      top: ellipseIconTop,
      left: ellipseIconLeft,
    };
  }, [ellipseIconTop, ellipseIconLeft]);

  const groupDiv4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupDiv5Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const rectangleDiv4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const ellipseIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    
    <div
      className="absolute top-[179px] left-[0px] w-[1302px] h-[72px] text-left text-lg text-dimgray-100 font-poppins"
      style={groupDiv3Style}
    >
       <Link className="no-underline text-white" to="/ongoing-team-score">
      <div className="absolute top-[0px] left-[0px] rounded bg-lightblue shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[1302px] h-[72px]" />
     
      <div className="absolute top-[7px] left-[5px] w-[1269px] h-[58px]">
        <div className="absolute top-[16px] left-[192px] w-[99px] h-[26.9px] text-white">
          <div className="absolute top-[3px] left-[75px] text-xl leading-[20px] font-semibold text-darkslategray-700">
            {carNumber}
          </div>
          <div className="absolute top-[1px] left-[0px] w-[25px] h-[24.1px]">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-seagreen-100 w-[25px] h-[24.1px]" />
            <div className="absolute top-[2px] left-[2px] leading-[20px]">
              26
            </div>
          </div>
          <div className="absolute top-[0px] left-[34px] w-[27.9px] h-[26.9px]">
            <div className="absolute top-[0px] left-[0px] rounded-smi bg-blueviolet w-[27.9px] h-[26.9px]" />
            <div className="absolute top-[3px] left-[5px] leading-[20px]">
              15
            </div>
          </div>
        </div>
        <div className="absolute top-[8px] left-[1182px] w-[87px] h-[41px] text-base text-black">
          <div className="absolute top-[0px] left-[0px] rounded-md box-border w-[87px] h-[41px] border-[1px] border-solid border-dimgray-100" />
          <div className="absolute top-[10px] left-[39px] leading-[20px]">
            -
          </div>
        </div>
        <div className="absolute top-[19px] left-[306px] w-[191px] h-5">
          <div className="absolute top-[0px] left-[0px] leading-[20px]">-</div>
          <div className="absolute top-[0px] left-[37px] leading-[20px]">-</div>
          <div className="absolute top-[0px] left-[71px] leading-[20px]">-</div>
          <div className="absolute top-[0px] left-[108px] leading-[20px]">
            -
          </div>
          <div className="absolute top-[0px] left-[144px] leading-[20px]">
            -
          </div>
          <div className="absolute top-[0px] left-[181px] leading-[20px]">
            -
          </div>
        </div>
        <div className="absolute top-[19px] left-[579px] w-[191px] h-5">
          <div className="absolute top-[0px] left-[0px] leading-[20px]">-</div>
          <div className="absolute top-[0px] left-[37px] leading-[20px]">-</div>
          <div className="absolute top-[0px] left-[71px] leading-[20px]">-</div>
          <div className="absolute top-[0px] left-[108px] leading-[20px]">
            -
          </div>
          <div className="absolute top-[0px] left-[144px] leading-[20px]">
            -
          </div>
          <div className="absolute top-[0px] left-[181px] leading-[20px]">
            -
          </div>
        </div>
        <div className="absolute top-[19px] left-[794px] w-[81px] h-5">
          <div className="absolute top-[0px] left-[0px] leading-[20px]">-</div>
          <div className="absolute top-[0px] left-[37px] leading-[20px]">-</div>
          <div className="absolute top-[0px] left-[71px] leading-[20px]">-</div>
        </div>
        <div
          className="absolute top-[0px] left-[0px] w-[167px] h-[58px] text-base text-white"
          style={groupDiv4Style}
        >
          <div
            className="absolute top-[0px] left-[0px] w-[145px] h-[58px]"
            style={groupDiv5Style}
          >
            <div
              className="absolute top-[0px] left-[0px] rounded-10xs bg-mediumaquamarine w-[145px] h-[58px]"
              style={rectangleDiv4Style}
            />
            <div className="absolute top-[19px] left-[5px] leading-[20px] font-semibold">
              Fore Friends
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[109px] rounded-[50%] w-[58px] h-[58px] object-cover"
            alt=""
            src="/ellipse-23085@2x.png"
            style={ellipseIconStyle}
          />
        </div>
      </div>
      </Link>
     
    </div>
  );
};

export default LiveScoreTeam1;
