import { FunctionComponent } from "react";

const SearchMainEventFilter: FunctionComponent = () => {
  return (
    <div className="absolute top-[145px] left-[109px] w-[1267px] h-[55px] text-left text-xl text-darkgray-100 font-poppins">
      <div className="absolute top-[0px] left-[0px] w-[1140px] h-[55px]">
        <input
          className="absolute top-[0px] left-[0px] rounded  h-[50px] border-2 border-lightseagreen-200 px-8 w-full outline-none font-bold text-lg "
          alt=""
          placeholder=" Search Event"
        />
      
      </div>
      <div className="absolute top-[0px] left-[1220px] w-[108px] h-[55px]">
        <div className="absolute top-[20px] left-[43px] leading-[20px]">
          Filter
        </div>
        <div className="absolute top-[0px] left-[0px] rounded box-border w-[108px] h-[55px] border-[1px] border-solid border-lightseagreen-200" />
        <img
          className="absolute h-[34.91%] w-[18.06%] top-[33.27%] right-[73.61%] bottom-[31.82%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/img/group-1000009262.svg"
        />
      </div>
      <div className="flex justify-end mr-[61px] mt-[0px] cursor-pointer">
      <img
        className="relative  w-20 h-[55px]"
        alt=""
        src="/img/group-1000009338.svg"
      />
      </div>
    
    </div>
  );
};

export default SearchMainEventFilter;
