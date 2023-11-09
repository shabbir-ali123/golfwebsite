import { FunctionComponent } from "react";
import AllEventContainer from "../components/AllEventContainer";
import SearchEventContainer from "../components/SearchEventFilter";
import AllEventTabs from "../components/AllEventTabs";
import EventLocation from "../components/EventLocation";
import Header from "../components/Header";

const EventMainPage: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[1245px] overflow-hidden text-left text-base text-white font-poppins">
      <div className="absolute top-[2287px] left-[1248px] text-lg leading-[20px] font-medium">
        WINNER
      </div>
      <div className="absolute top-[315px] left-[1194px] w-[182px] h-[55px] text-xl">
        <div className="absolute top-[0px] left-[0px] w-[182px] h-[55px]">
          <div className="absolute top-[0px] left-[0px] rounded bg-deepskyblue-100 shadow-[6px_6px_10px_#bbe2ff] w-[182px] h-[55px]" />
          <div className="absolute top-[12px] left-[12px] w-[158.8px] h-[30px]">
            <div className="absolute top-[0px] left-[29.8px] capitalize font-medium">
              Create Event
            </div>
            <img
              className="absolute h-[61.67%] w-[11.59%] top-[18.33%] right-[88.73%] bottom-[20%] left-[-0.31%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-1000009279.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[520px] left-[103px] w-[949px] h-[600.9px] text-[15.62px]">
        <div className="absolute top-[0px] left-[0px] w-[949px] h-[600.9px]">
          <div className="absolute top-[0px] left-[1px] w-[948px] h-[53px]">
            <div className="absolute top-[0px] left-[0px] bg-darkgreen shadow-[0px_0px_7.03px_#077c07] w-[948px] h-[53px]" />
            <div className="absolute top-[14.5px] left-[40.6px] capitalize font-medium">
              Organizer
            </div>
            <div className="absolute top-[14.5px] left-[210.1px] capitalize font-medium">
              Time
            </div>
            <div className="absolute top-[14.5px] left-[851.9px] capitalize font-medium">
              Actions
            </div>
            <div className="absolute top-[14.5px] left-[662px] capitalize font-medium">
              Short Notes
            </div>
            <div className="absolute top-[14.5px] left-[295.8px] capitalize font-medium">
              Date
            </div>
            <div className="absolute top-[14.5px] left-[411.6px] capitalize font-medium">
              Event Name
            </div>
          </div>
          <AllEventContainer />
        </div>
      </div>
      <div className="absolute top-[1145px] left-[512px] w-[417px] h-10 text-smi text-lightgray">
        <div className="absolute top-[0px] left-[0px] w-16 h-10 text-darkgray-300">
          <div className="absolute top-[0px] left-[0px] rounded bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-16 h-10" />
          <div className="absolute top-[10px] left-[7px] capitalize">
            Preview
          </div>
        </div>
        <div className="absolute top-[0px] left-[353px] w-16 h-10 text-lightseagreen-200">
          <div className="absolute top-[0px] left-[0px] rounded bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-16 h-10" />
          <div className="absolute top-[10px] left-[18px] capitalize">Next</div>
        </div>
        <div className="absolute top-[0px] left-[71px] w-10 h-10 text-white">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-lightseagreen-200 w-10 h-10" />
          <div className="absolute top-[10px] left-[18px] capitalize">1</div>
        </div>
        <div className="absolute top-[0px] left-[118px] w-10 h-10">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-white box-border w-10 h-10 border-[1px] border-solid border-gainsboro" />
          <div className="absolute top-[10px] left-[16px] capitalize">2</div>
        </div>
        <div className="absolute top-[0px] left-[165px] w-10 h-10">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-white box-border w-10 h-10 border-[1px] border-solid border-gainsboro" />
          <div className="absolute top-[10px] left-[16px] capitalize">3</div>
        </div>
        <div className="absolute top-[0px] left-[212px] w-10 h-10">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-white box-border w-10 h-10 border-[1px] border-solid border-gainsboro" />
          <div className="absolute top-[10px] left-[16px] capitalize">4</div>
        </div>
        <div className="absolute top-[0px] left-[259px] w-10 h-10">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-white box-border w-10 h-10 border-[1px] border-solid border-gainsboro" />
          <div className="absolute top-[7px] left-[15px] capitalize">....</div>
        </div>
        <div className="absolute top-[0px] left-[306px] w-10 h-10">
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-white box-border w-10 h-10 border-[1px] border-solid border-gainsboro" />
          <div className="absolute top-[10px] left-[16px] capitalize">8</div>
        </div>
      </div>
      <SearchEventContainer />
      <div className="absolute top-[520px] left-[1067px] w-[308px] h-[599px] text-lg text-darkslategray-800">
        <img
          className="absolute top-[-8px] left-[-8px] rounded-10xs w-[324px] h-[615px] object-cover"
          alt=""
          src="/rectangle-6126@2x.png"
        />
        <img
          className="absolute top-[467px] left-[210.4px] w-[58px] h-[123px]"
          alt=""
          src="/group-1000009359.svg"
        />
        <div className="absolute top-[363px] left-[105px]">Yokohama Club</div>
      </div>
      <AllEventTabs />
      <div className="absolute top-[589.2px] left-[716.3px] w-9 h-[71px]">
        <div className="absolute top-[0px] left-[0px] rounded-[1.56px] bg-darkgray-200 w-9 h-[71px]" />
        <div className="absolute top-[18px] left-[13px] leading-[15.62px] [transform:_rotate(49.21deg)] [transform-origin:0_0]">
          Join
        </div>
      </div>
      <div className="absolute top-[681.2px] left-[716.3px] w-9 h-[71px]">
        <div className="absolute top-[0px] left-[0px] rounded-[1.56px] bg-darkgreen w-9 h-[71px]" />
        <div className="absolute top-[18px] left-[13px] leading-[15.62px] [transform:_rotate(49.21deg)] [transform-origin:0_0]">
          Join
        </div>
      </div>
      <div className="absolute top-[773.2px] left-[716.3px] w-9 h-[71px]">
        <div className="absolute top-[0px] left-[0px] rounded-[1.56px] bg-darkgreen w-9 h-[71px]" />
        <div className="absolute top-[18px] left-[13px] leading-[15.62px] [transform:_rotate(49.21deg)] [transform-origin:0_0]">
          Join
        </div>
      </div>
      <div className="absolute top-[865.2px] left-[716.3px] w-9 h-[71px]">
        <div className="absolute top-[0px] left-[0px] rounded-[1.56px] bg-darkgray-200 w-9 h-[71px]" />
        <div className="absolute top-[18px] left-[13px] leading-[15.62px] [transform:_rotate(49.21deg)] [transform-origin:0_0]">
          Join
        </div>
      </div>
      <div className="absolute top-[957.2px] left-[716.3px] w-9 h-[71px]">
        <div className="absolute top-[0px] left-[0px] rounded-[1.56px] bg-darkgreen w-9 h-[71px]" />
        <div className="absolute top-[18px] left-[13px] leading-[15.62px] [transform:_rotate(49.21deg)] [transform-origin:0_0]">
          Join
        </div>
      </div>
      <div className="absolute top-[1049.2px] left-[716.3px] w-9 h-[71px]">
        <div className="absolute top-[0px] left-[0px] rounded-[1.56px] bg-darkgray-200 w-9 h-[71px]" />
        <div className="absolute top-[18px] left-[13px] leading-[15.62px] [transform:_rotate(49.21deg)] [transform-origin:0_0]">
          Join
        </div>
      </div>
      <img
        className="absolute h-[1.19%] w-[1.77%] top-[15.73%] right-[96.53%] bottom-[83.08%] left-[1.7%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector61.svg"
      />
      <EventLocation />
      <img
        className="absolute h-[4.3%] w-[2.92%] top-[66.79%] right-[12.29%] bottom-[28.92%] left-[84.79%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-1000009400.svg"
      />
      <Header />
      <img
        className="absolute top-[0px] left-[0px] w-20 h-[1246px]"
        alt=""
        src="/sidemenuicons.svg"
      />
    </div>
  );
};

export default EventMainPage;
