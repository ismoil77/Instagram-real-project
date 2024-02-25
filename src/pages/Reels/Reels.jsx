import React, { useEffect, useState, version } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";

import playicon from "../../assets/images/palyI.png";

import volume_up from "../../assets/images/volume_up.svg";
import Vector2 from "../../assets/images/Vector (2).png";
import Profile from "../../assets/images/Profile.png";
import comint from "../../assets/images/Groupcomint.png";
import consave from "../../assets/images/turned_in_not.png";
import send from "../../assets/images/send.png";
import clear from "../../assets/images/clear.png";
import hapy from "../../assets/images/sentiment_satisfied.png";
import like from "../../assets/images/like.png";
// import Vector3 from ".././../assets/images/Vector (3).png"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../src/pages/Reels/Reels.css";

// import required modules
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import {
  getComment,
  getLike,
  postComment,
  postSave,
  postFollow
} from "../../api/reels/Reels";
// import { Pause } from "@mui/icons-material";
import { setComment } from "../../reducers/reels/Reelse";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Reels = () => {
  const [showComints, satSearchComints] = useState(false);
  const [showShare, satSearchShare] = useState(false);
  const [showPaly, setshowPaly] = useState(false);
  const imgUrl = import.meta.env.VITE_APP_FILES_URL;

  let data = useSelector((state) => state.reels.data);
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.reels.setComment);

  const Byid = useSelector((state) => state.reels.Byid);

  useEffect(() => {
    dispatch(getComment());
    dispatch(getLike());
  }, []);

  return (
    <div className="">
      <div className="  w-full h-[100vh] flex  items-center    justify-center ">
        <div className="h-[90%]  w-[90%]    flex justify-end  ">

          <div className="h-full w-[50%]  relative  shadow-2xl  rounded-[10px] ">
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              modules={[Mousewheel, Pagination]}
              className="mySwiper  bg-transparent  rounded-[10px] absolute   z-0  w-full h-[100%]"
            >
              <div className="w-[100%]  h-[100%]     ">
                {data?.map((el, index) => (
                  <SwiperSlide key={index}>
                    {/* <div
                      className="w-[100%]  bg-red-500 z-10 absolute text-[200px] 
 bg-transparent flex items-center justify-center   
  pr-10 h-[100%]"

  onClick={() => {
    setshowPaly(!showPaly),
      satSearchShare(false),
      satSearchComints(false);
  }}
                    >
                      {showPaly && (
                        <PlayArrowSharpIcon
                          style={{ color: "#fff", fontSize: 100 }}
                        />
                      )}
                    </div> */}


                       {/*   The Vaeis up   icon */}
                    {/* <div className=" absolute top-[2%]  p-5  z-20  bg-[#000000B2] rounded-[50%] flex justify-center items-center  right-[50px] h-[20px] w-[20px]">
                      <VolumeUpOutlinedIcon style={{ color: "white" }} />
                    </div> */}
                       {/* end of    The Vaeis up   icon */}


{/*    start  video */}
                    <div className="flex   pl-6   relative left-[-30px] w-full h-full  ">
                    <div className="absolute  z-50 bottom-20 h-10 w-[80%]  flex items-center  gap-3 pl-4   ">
                      <div className="h-[35px]  w-[35px] bg-red-200  rounded-[50%] ">
                           <img  className=" h-full w-full" src={Profile}/>
                      </div>
                    <p className="text-[20px] text-white font-bold">munir</p>
                    <p className="font-bold texr-[30px ]  bg-white  h-2 w-2  rounded-[50%] pb-2"></p>


                    <p onClick={() => {dispatch(postFollow(el.userId)), console.log(el)} } className="cursor-pointer border-[2px] text-white border-[white] rounded-[12px] text-[16px] px-3 py-1">Follow</p>
                    </div>

                      <video
                        controls
                        autoPlay
                        loop
                        muted
                        onClick={() => {
                          satSearchComints(false), satSearchShare(false);
                        }}
                        className="w-[100%] bg-[black]  h-[100%]"
                      >
                        <source
                          type="video/mp4"
                          className="w-full h-[100%] "
                          src={`${imgUrl}/${el.images}`}
                          alt=""
                          onError={(error) => console.log(error)}
                        />
                      </video>

                      <div className=" h-[100%]   pt-[100px]  bg-[black]  absolute  right-[-55px] z-10  w-[70px]    ">
                        <div className="h-[30px] w-[40%] mt-20    ml-2  ">
                          {/* start like  button  */}
                          <button className="w-[30px]">
                            {el.postLike ? (
                              <Favorite
                                style={{ color: "red" }}
                                color="error"
                                onClick={() => dispatch(getLike(el.postId))}
                              ></Favorite>
                            ) : (
                              <FavoriteBorder
                                style={{ color: "white" }}
                                onClick={() => dispatch(getLike(el.postId))}
                              ></FavoriteBorder>
                            )}
                          </button>
                          {/* end of like button */}
                        </div>

                        <div className="h-[25px] w-[37%] mt-10   ml-2  ">
                          <MarkChatUnreadOutlinedIcon
                            style={{ color: "#fff" }}
                            onClick={() => {
                              satSearchComints(!showComints),
                                satSearchShare(false);
                            }}
                          />
                          <p>256</p>
                        </div>
                        <div className="h-[30px] w-[40%] mt-10    ml-2  ">
                          <SendOutlinedIcon
                            onClick={() => {
                              satSearchShare(!showShare),
                                satSearchComints(false);
                            }}
                            style={{ color: "#fff" }}
                          />
                        </div>

                        <div className="h-[30px] w-[40%] mt-6    ml-2  ">
                          <button className="w-[30px]">
                            {el.postLike ? (
                              <BookmarkBorderIcon
                                style={{ color: "#fff" }}
                                color="error"
                                // onClick={() =>{ dispatch(postSave(el.postId))} }
                              />
                            ) : (
                              <BookmarkBorderIcon
                                style={{ color: "#fff" }}
                                color="error"
                                // onClick={() => dispatch(getLike(el.postId))}
                              />
                            )}
                          </button>
                        </div>

                        <div className="h-[50px] w-full relative ">
                          <p className="text-[30px] h-[10px] w-full absolute top-[-3px] right-3 font-bold  ">
                            ...
                          </p>
                        </div>

                        <div className="h-[40px] w-[40px] relative   ">
                          <img
                            className="text-[30px] h-[30px] w-[20px] rounded-[50%]  absolute top-[-3px] font-bold  "
                            src={
                              length == 0
                                ? "https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=220"
                                : Byid?.images
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="absolute "></div>
                    </div>
{/*    end of  video */}

                  </SwiperSlide>
                ))}
              </div>
              {/* end  of vidoes  */}
            </Swiper>
          </div>
        </div>

        <div className="h-[90%] relative  ml-2 items-end w-[42%]   ">
          {/* commint Dyalog */}

          <div className=" w-[20%]   ">
            {showComints && (
              <div
                className="h-[310px] 
          
        
                
        rounded-[10px]
         absolute top-[45px]   
    
         w-[90%] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] "
              >
                <p className=" py-2 flex  font-bold items-center  text-[15px] pl-3">
                  <img
                    onClick={() => satSearchComints(false)}
                    className="h-[19px]  w-[17px] mr-2"
                    src={clear}
                    alt=""
                  />
                  Comments
                </p>

                <div className="w-[95%]  h-[70%]  mb-3 overflow-y-auto  overflow-x-hidden flex flex-col gap-[20px] m-auto  ">
                  {/*  commints */}
                  {data.map((e) => {
                    return (
                      <div className="w-[350px]   ml-4 ">
                        {/* ForComments */}

                        {e.comments.map((e) => {
                          return (
                            <div className=" flex   my-2">
                              <img
                                className="w-[30px] h-[30px]"
                                src={
                                  length == 0
                                    ? "https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=220"
                                    : Byid?.images
                                }
                                alt=""
                              />
                              <div className="">

                              <h1 className="ml-2    font-bold"> Name</h1>
                              <h1 className="ml-2 w-[200px]">{e.comment}</h1>
                              </div>
                            </div>
                          );
                        })}
                        {/* Input of  comment  */}
                        <div className="h-10 w-[95%]   border-t-[1px]  border-gray-500  left-1 absolute  bottom-1  bg-transparent  flex items-center  ">
                          <input
                            placeholder="Add comment..."
                            type="text"
                            className="  border-[none] pl-3 outline-0 w-[500%] rounded-[5px]  p-1 mr-2 "
                            onChange={(e) =>
                              dispatch(setComment(e.target.value))
                            }
                            value={comments}
                          />

                          {/* inpval */}

                          <button
                            className="text-[#2121eeb0] mr-4"
                            onClick={() => {
                              dispatch(
                                postComment({
                                  comment: comments,
                                  postId: e.postId,
                                })
                              );
                              dispatch(setComment(""));
                            }}
                          >
                            post
                          </button>

                          <img
                            className="h-[20px] w-[20px]  mr-4 "
                            src={hapy}
                            alt=""
                          />
                        </div>

                        {/*  end  of Input of  comment  */}
                      </div>
                    );
                  })}
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


         w-[90%]  
         shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  bg-[#fcfcfc]"
              >
                <p className=" py-2 flex  font-bold items-center  text-[15px] pl-3">
                  <img
                    onClick={() => satSearchShare(false)}
                    className="h-[19px]  w-[17px] mr-2"
                    src={clear}
                    alt=""
                  />
                  Share
                </p>
                <p className="text-black  text-[20px]  pl-4  border-b-[1px]  border-gray-100 font-bold ">
                  {" "}
                  To: <span className="text-gray-400 text-[16px] ">
                    Share
                  </span>{" "}
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
                <div
                  className="h-10 w-[90%] 
                rounded-[10px]
                 ml-3 absolute bg-[#E2E8F0] bottom-1  flex 
                items-center   justify-center "
                >
                  <p className="text-center font-bold text-[16px] text-[#94A3B8] ">
                    Send
                  </p>
                </div>
              </div>
            )}
          </div>
          {/*  end of Share Dyalog */}
        </div>
      </div>
    </div>
  );
};

export default Reels;
