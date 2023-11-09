import { FunctionComponent, useMemo, type CSSProperties } from "react";

type SectionCardFormFilterType = {
  personName?: string;
  imageDimensions?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const SectionCardFormFilter: FunctionComponent<SectionCardFormFilterType> = ({
  personName,
  imageDimensions,
  propTop,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div
      className="absolute top-[178px] left-[0px] w-[1302px] h-[72px] text-left text-lg text-white font-poppins"
      style={groupDiv1Style}
    >
      <div className="absolute top-[0px] left-[0px] w-[1302px] h-[72px] text-dimgray-100">
        <div className="absolute top-[0px] left-[0px] rounded bg-lightblue shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[1302px] h-[72px]" />
        <div
          className="absolute top-[0px] left-[0px] rounded bg-lightgreen-100 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[1302px] h-[72px]"
          style={rectangleDivStyle}
        />
        <div className="absolute top-[7px] left-[5px] w-[1269px] h-[58px]">
          <div className="absolute top-[16px] left-[192px] w-[90px] h-[26.9px] text-white">
            <div className="absolute top-[3px] left-[78px] text-xl leading-[20px] font-semibold text-darkslategray-700">{`3 `}</div>
            <div className="absolute top-[1px] left-[0px] w-[25px] h-[24.1px]">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-seagreen-100 w-[25px] h-[24.1px]" />
              <div className="absolute top-[calc(50%_-_10.05px)] left-[calc(50%_-_5.5px)] leading-[20px]">
                6
              </div>
            </div>
            <div className="absolute top-[0px] left-[34px] w-[27.9px] h-[26.9px]">
              <div className="absolute top-[0px] left-[0px] rounded-smi bg-blueviolet w-[27.9px] h-[26.9px]" />
              <div className="absolute top-[3px] left-[8px] leading-[20px]">
                3
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
          <div className="absolute top-[19px] left-[579px] w-[191px] h-5">
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
          <div className="absolute top-[19px] left-[794px] w-[81px] h-5">
            <div className="absolute top-[0px] left-[0px] leading-[20px]">
              -
            </div>
            <div className="absolute top-[0px] left-[37px] leading-[20px]">
              -
            </div>
            <div className="absolute top-[0px] left-[71px] leading-[20px]">
              -
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[167px] h-[58px] text-base text-white">
            <div className="absolute top-[0px] left-[0px] w-[145px] h-[58px]">
              <div
                className="absolute top-[0px] left-[0px] rounded-10xs bg-fuchsia-100 w-[145px] h-[58px]"
                style={rectangleDiv1Style}
              />
              <div className="absolute top-[19px] left-[10px] tracking-[2.83px] leading-[18px]">
                {personName}
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[109px] rounded-[50%] w-[58px] h-[58px] object-cover"
              alt=""
              src={imageDimensions}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[1px] left-[897px] w-14 h-[71px]">
        <div className="absolute top-[0px] left-[0px] bg-gray1-1300 box-border w-14 h-[71px] border-[1px] border-solid border-white" />
        <div className="absolute top-[calc(50%_-_9.5px)] left-[calc(50%_-_9px)] leading-[20px] font-medium">
          10
        </div>
        <div className="absolute top-[calc(50%_-_9.5px)] left-[calc(50%_-_9px)] leading-[20px] font-medium">
          10
        </div>
      </div>
      <div className="absolute top-[0px] left-[516px] w-14 h-[72px]">
        <div className="absolute top-[0px] left-[0px] bg-gray1-1300 box-border w-14 h-[72px] border-[1px] border-solid border-white" />
        <div className="absolute top-[0px] left-[0px] bg-gray1-1300 box-border w-14 h-[72px] border-[1px] border-solid border-white" />
        <div className="absolute top-[calc(50%_-_9.6px)] left-[calc(50%_-_5px)] leading-[20px] font-medium inline-block w-[11px] h-[20.3px]">
          7
        </div>
        <div className="absolute top-[calc(50%_-_9.6px)] left-[calc(50%_-_5px)] leading-[20px] font-medium inline-block w-[11px] h-[20.3px]">
          7
        </div>
      </div>
    </div>
  );
};

export default SectionCardFormFilter;
