import React, { useState } from 'react'

// import playicon from "./assets/palyI.png";
// //  import volume_off from "./assets/volume_off.png"
// import volume_up from "./assets/volume_up.svg";
// import Frame from "./assets/Frame 168.png";
// import search from "./assets/search.png";
// import home from "./assets/menu.png";
// import menu from "./assets/home.png";
// import masge from "./assets/masge.png";
// import rels from "./assets/rels.png";
// import Vector2 from "./assets/Vector (2).png";
// import Vector3 from "./assets/Vector (3).png";
// import Profile from "./assets/Profile.png";
// import comint from "./assets/Groupcomint.png";
// import consave from "./assets/turned_in_not.png";
// import send from "./assets/send.png";
// import clear from "./assets/clear.png";
// import hapy from "./assets/sentiment_satisfied.png";
import playicon from "../../assets/images/palyI.png";

import volume_up from "../../assets/images/volume_up.svg"
import Vector2 from "../../assets/images/Vector (2).png"
import Profile from "../../assets/images/Profile.png"
import comint from "../../assets/images/Groupcomint.png"
import consave from "../../assets/images/turned_in_not.png"
import send from "../../assets/images/send.png"
import clear from "../../assets/images/clear.png"
// import clear from "../../assets/images/clear.png"
// import Vector3 from ".././../assets/images/Vector (3).png"


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../src/App.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

const Reels = () => {
  const [showComints, satSearchComints] = useState(false);
  const [showShare, satSearchShare] = useState(false);
  return (

    <div className="">
      <div className="  w-full h-[100vh] flex  items-center   gap-2 justify-center ">
      


        <div className="h-[90%]  w-[100%]   flex justify-end mr-4 ">
          <div className="h-full w-[100%]   relative rounded-[10px] ">
          
          <div className=' absolute top-[3%]  p-2  rounded-[50%] flex justify-center items-center bg-white  right-3 h-[40px] w-[40px]'>

<img className="h-[90%]   z-10 " src={volume_up} alt="" />

</div>
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              modules={[Mousewheel, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
           
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

            <img
              className=" z-10 absolute top-[43%]  left-[43%] h-[60px] w-[60px]"
              src={playicon}
              alt=""
            />

          </div>
        </div>

        <div className="h-[90%] relative   flex   items-end w-[22%]   ">

          {/* commint Dyalog */}
          <div className=" ">
            {showComints && (
              <div
                className="h-[280px] 
        rounded-[10px]
         absolute top-[45px]   


         w-[90%] bg-[#F3F4F6]"
              >
                <p className=" py-2 flex  font-bold items-center  text-[15px] pl-3">
                  <img 
                   onClick={() => satSearchComints(false)}
                  className="h-[19px]  w-[17px] mr-2" src={clear} alt="" />
                  Comments
                </p>

                <div className="w-[95%] m-auto   overflow-auto ">
                {/*  commints */}
                  <div className="h-16 mt-1 w-full  flex items-center gap-">
                    <div className="h-[47px] w-[55px] rounded-[50%]  bg-yellow-800">
<img className="h-full w-full " src={Profile} alt="" />
                    </div>
                    <div className="h-full w-[90%]  pl-2">
                      <p className="text-[15px] pt-2  ">
                       
                        terrylucas <span className="font-bold">2d</span>
                      </p>
<p>  Very impressive! 🔥🔥</p>
                    </div>
                    <div className="h-full w-[30px]  flex items-center justify-center">
                    <img src={Vector2} alt="" /> 
                    </div>
                  </div>

                {/* end  of  commints */}

                </div>
                <div className="h-10 w-full  absolute bottom-0 flex items-center  ">
                  <input className=" bg-transparent h-[90%] w-[80%]  m-auto " type="text"  placeholder="Add a comment..." />
<img className="h-[25px] w-[25px]  mr-2 " src={hapy} alt="" />
                </div>
              </div>
            )}
          </div>
          {/*  end of commint Dyalog */}




          {/* Share Dyalog */}
          <div className=" ">

            {showShare && (
              <div
                className="h-[280px] 
        rounded-[10px]
         absolute top-[100px]   


         w-[90%] bg-[#F3F4F6]"
              >
                <p className=" py-2 flex  font-bold items-center  text-[15px] pl-3">
                  <img 
                   onClick={() => satSearchShare(false)}
                  className="h-[19px]  w-[17px] mr-2" src={clear} alt="" />
                  Share
                </p>

                <div className="w-[95%] m-auto   overflow-auto ">
                {/*  commints */}
                  <div className="h-16 mt-1 w-full  flex items-center gap-">
                    <div className="h-[47px] w-[55px] rounded-[50%]  bg-yellow-800">
<img className="h-full w-full " src={Profile} alt="" />
                    </div>
                    <div className="h-full w-[90%]  pl-2">
                      <p className="text-[15px] pt-2  ">
                       
                        terrylucas <span className="font-bold">2d</span>
                      </p>
<p>Follows you</p>
                    </div>
                    <div className="h-full w-[30px]  flex items-center justify-center">
                    <input type="radio" />

                    </div>
                  </div>

                {/* end  of  commints */}

                </div>
                <div className="h-10 w-[90%] 
                rounded-[10px]
                 ml-3 absolute bg-[#E2E8F0] bottom-1  flex 
                items-center   justify-center ">
                 <p className="text-center font-bold text-[16px] text-[#94A3B8] ">Send</p>
                </div>
              </div>
            )}
          </div>
          {/*  end of Share Dyalog */}

          <div className="h-[45%] pt-10 w-full   ">
            <div className="h-[50px] w-full">
              <img
                onClick={() =>{ satSearchComints(!showComints),satSearchShare(false)}}
                className="h-[22px] w-[22px]"
                src={comint}
                alt=""
              />

              <p>256</p>
            </div>

            <div className="h-[40px] w-full flex  items-center  ">
              <img 
                   onClick={() => {satSearchShare(!showShare),satSearchComints(false)}}

              className="h-[22px] w-[22px] " src={send} alt="" />
            </div>
            <div className="h-[40px] w-full flex relative  items-center ">
              <img
                className="h-[22px] w-[22px] absolute left-[-4px] "
                src={consave}
                alt=""
              />
            </div>

            <div className="h-[50px] w-full relative ">
              <p className="text-[30px] h-[10px] w-full absolute top-[-10px] font-bold  ">
                ...
              </p>
            </div>
          </div>

        </div>
      </div>
      </div>
  
  )
}

export default Reels