import { FunctionComponent } from "react";

const SearchEventContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[145px] left-[109px] w-[1267px] h-[55px] text-left text-xl text-darkgray-100 font-poppins">
      <div className="absolute top-[0px] left-[0px] w-[1140px] h-[55px]">
        <img
          className="absolute top-[0px] left-[0px] rounded w-[1140px] h-[55px]"
          alt=""
          src="/rectangle-6104.svg"
        />
        <div className="absolute top-[17px] left-[27px] w-[130px] h-5">
          <div className="absolute top-[0px] left-[0px] leading-[20px]">
            Search Event
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[1159px] w-[108px] h-[55px]">
        <div className="absolute top-[17px] left-[43px] leading-[20px]">
          Filter
        </div>
        <div className="absolute top-[0px] left-[0px] rounded box-border w-[108px] h-[55px] border-[1px] border-solid border-lightseagreen-200" />
        <img
          className="absolute h-[34.91%] w-[18.06%] top-[33.27%] right-[73.61%] bottom-[31.82%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-1000009262.svg"
        />
      </div>
      <img
        className="absolute top-[0px] left-[1060px] w-20 h-[55px]"
        alt=""
        src="/group-1000009338.svg"
      />
    </div>
  );
};

export default SearchEventContainer;
