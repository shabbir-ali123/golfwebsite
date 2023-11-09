import { FunctionComponent, useMemo, type CSSProperties } from "react";

type LiveScoreTeamsType = {
  score?: string;
  playerAge?: string;
  gameName?: string;
  imageId?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const LiveScoreTeams: FunctionComponent<LiveScoreTeamsType> = ({
  score,
  playerAge,
  gameName,
  imageId,
  propTop,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const groupDiv6Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const rectangleDiv5Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDiv6Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div
      className="absolute top-[621px] left-[16px] w-[1302px] h-[72px] text-left text-lg text-white font-poppins"
      style={groupDiv6Style}
    >
      <div
        className="absolute top-[0px] left-[0px] rounded bg-lightsteelblue shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[1302px] h-[72px]"
        style={rectangleDiv5Style}
      />
      <div className="absolute top-[7px] left-[5px] w-[1269px] h-[58px]">
        <div className="absolute top-[16px] left-[194px] w-[95px] h-[26.9px]">
          <div className="absolute top-[3px] left-[0px] w-6 h-5 text-xl text-darkslategray-700">
            <div className="absolute top-[0px] left-[0px] w-6 h-5">
              <div className="absolute top-[0px] left-[0px] leading-[20px] font-semibold">
                {score}
              </div>
            </div>
          </div>
          <div className="absolute top-[1px] left-[70px] w-[25px] h-[24.1px]">
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-seagreen-100 w-[25px] h-[24.1px]" />
            <div className="absolute top-[2px] left-[2px] leading-[20px]">
              {playerAge}
            </div>
          </div>
          <div className="absolute top-[0px] left-[33px] w-[27.9px] h-[26.9px]">
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
        <div className="absolute top-[18px] left-[307px] w-[568px] h-[21px] text-dimgray-100">
          <div className="absolute top-[0px] left-[0px] w-48 h-5">
            <div className="absolute top-[0px] left-[0px] leading-[20px]">
              -
            </div>
            <div className="absolute top-[0px] left-[34px] leading-[20px]">
              -
            </div>
            <div className="absolute top-[0px] left-[71px] leading-[20px]">
              -
            </div>
            <div className="absolute top-[0px] left-[107px] leading-[20px]">
              -
            </div>
            <div className="absolute top-[0px] left-[144px] leading-[20px]">
              -
            </div>
            <div className="absolute top-[0px] left-[182px] leading-[20px]">
              -
            </div>
          </div>
          <div className="absolute top-[1px] left-[272px] w-[191px] h-5">
            <div className="absolute top-[0px] left-[0px] leading-[20px]">
              -
            </div>
            <div className="absolute top-[0px] left-[37px] leading-[20px]">
              -
            </div>
            <div className="absolute top-[0px] left-[71px] leading-[20px]">
              -
            </div>
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
          <div className="absolute top-[0px] left-[488px] w-20 h-[21px]">
            <div className="absolute top-[0px] left-[0px] w-20 h-[21px]">
              <div className="absolute top-[1px] left-[38px] leading-[20px]">
                -
              </div>
              <div className="absolute top-[0px] left-[0px] leading-[20px]">
                -
              </div>
              <div className="absolute top-[1px] left-[70px] leading-[20px]">
                -
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[177px] h-[58px] text-base">
          <div className="absolute top-[0px] left-[0px] w-[149px] h-[58px]">
            <div
              className="absolute top-[0px] left-[0px] rounded-10xs bg-gray1-1600 w-[149px] h-[58px]"
              style={rectangleDiv6Style}
            />
            <div className="absolute top-[19px] left-[4px] leading-[20px] font-semibold">
              {gameName}
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[119px] rounded-[50%] w-[58px] h-[58px] object-cover"
            alt=""
            src={imageId}
          />
        </div>
      </div>
    </div>
  );
};

export default LiveScoreTeams;
