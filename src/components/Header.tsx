import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1440px] h-[87px] text-left text-5xl text-white font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-lightseagreen-200 shadow-[0px_0px_6px_#17b3a6] w-[1440px] h-[87px]" />
      <div className="absolute top-[17px] left-[381px] w-[994px] h-[52px]">
        <div className="absolute top-[16px] left-[0px] w-[581px] h-5">
          <div className="absolute top-[0px] left-[0px] leading-[20px] [-webkit-text-fill-color:#fff]">
            Home
          </div>
          <div className="absolute top-[0px] left-[136px] leading-[20px]  [-webkit-text-fill-color:#fff]">
            Posts
          </div>
          <div className="absolute top-[0px] left-[408px] leading-[20px] [-webkit-text-fill-color:#fff]">
            Find a teacher
          </div>
        </div>
        <div className="absolute top-[0px] left-[781px] w-[213px] h-[52px] text-lg">
          <div className="absolute top-[0px] left-[0px] w-[213px] h-[52px]">
            <div className="absolute top-[0px] left-[0px] w-[213px] h-[52px]">
              <div className="absolute top-[0px] left-[0px] w-[213px] h-[52px]">
                <div className="absolute top-[0px] left-[0px] w-[213px] h-[52px]">
                  <div className="absolute top-[0px] left-[0px] w-[213px] h-[52px]">
                    <div className="absolute top-[0px] left-[0px] w-[189px] h-[52px]">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-[50%] w-[52px] h-[52px] object-cover"
                        alt=""
                        src="/img/ellipse-2310@2x.png"
                      />
                      <div className="absolute top-[2px] left-[59px] w-[130px] h-[47px]">
                        <div className="absolute top-[0px] left-[0px] capitalize">
                          Esther Howard
                        </div>
                        <div className="absolute top-[20px] left-[0px] capitalize">
                          Admin
                        </div>
                      </div>
                    </div>
                    <img
                      className="absolute h-[17.31%] w-[6.85%] top-[24.04%] right-[0%] bottom-[58.65%] left-[93.15%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/img/vector81.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[5px] left-[253px] w-[107px] h-[42px]">
          <div className="absolute top-[0px] left-[0px] rounded box-border w-[107px] h-[42px] border-[1px] border-solid border-white" />
          <div className="absolute top-[11px] left-[21px] leading-[20px] ,_linear-gradient(#494949,_#494949),_#494949] [-webkit-background-clip:text] [-webkit-text-fill-color:#fff]">
            Events
          </div>
        </div>
      </div>
      <img
        className="absolute top-[8px] left-[109px] rounded w-[75px] h-[72px] object-cover"
        alt=""
        src="/img/rectangle-6113@2x.png"
      />
    </div>
  );
};

export default Header;
