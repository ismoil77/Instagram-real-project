import { useState, useEffect, useRef } from "react";
import iconButtonLeft from "../../assets/imgHome/ıcon.svg";
import { axiosRequest } from "../../utils/axiosRequest";
import HomeStyle from "../Home/HomeStyle.css"
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Home = () => {


  ///////ismoil////
const urlImg = import.meta.env.VITE_APP_FILES_URL
const [mut,setMut]= useState(false)
const [cnt,setCnt]= useState(10)
const [playy,setPlayy]= useState(false)
  const [data, setData] = useState([]);
const [idx,setIdx]=useState('')
const [muteIdx,setMuteIdx]=useState('')

  async function getData() {
    try {
      let { data } = await axiosRequest.get(`Post/get-posts?PageSize=${20}`);
      console.log(data.data);
      
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  window.addEventListener('scroll' ,function(){
    if(window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight){
      
      
    }
  });


  ///////ismoil///////
  // console.log(data[0].images[0]);
  return (
    <>


    {/* /////// ISMOIL ////// */}
      <div className="w-[100%] flex ml-[50px]">
        <div className="w-[100%] mx-auto">
          <div className="flex gap-[30px] w-[100%] bg-[green]">
            <button className="">
              <img alt="" className="rotate-180" src={iconButtonLeft} />
            </button>
            <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
              <img
                className="w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover"
// src={`${urlImg}/${data[0].images[0]}`}
                // src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp"
                alt=""
              />
            </div>
            <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
              <img
                className="w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover"
                src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp"
                alt=""
              />
            </div>
            <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
              <img
                className="w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover"
                src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp"
                alt=""
              />
            </div>
            <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
              <img
                className="w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover"
                src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp"
                alt=""
              />
            </div>
            <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
              <img
                className="w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover"
                src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp"
                alt=""
              />
            </div>
            <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
              <img
                className="w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover"
                src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp"
                alt=""
              />
            </div>
            <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
              <img
                className="w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover"
                src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp"
                alt=""
              />
            </div>
            <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
              <img
                className="w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover"
                src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp"
                alt=""
              />
            </div>
          </div>
          <div className="" >
            {
              data.map((el,i)=>{
                return (
                  <>
                  <div className="flex flex-col gap-[40px]" key={el.postId}>
                    <div className="flex w-[700px] gap-6">


                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                      el.images.map((elImg)=>{
                        let checkType = elImg.split(".")
                        let resulOfCheck = checkType[checkType.length-1].toLowerCase()
                        let exampleImg = ['jpg', 'jpeg', 'png', 'gif', 'bmp']
                        let exampleVideo = ['mp4', 'avi', 'mov', 'wmv', 'flv']
                        if(exampleImg.includes(resulOfCheck)){
// console.log("IMG");
return    <SwiperSlide><img  src={`${urlImg}/${elImg}`} className=" rounded-[] h-[500px]" alt="" srcset="" /></SwiperSlide>


                        }
                        else if(exampleVideo.includes(resulOfCheck)){
                          console.log("Video");

return (
  <>

 <div className="video-player">
{
 idx==el.postId?<div><ReactPlayer width='700px' height='500px' url={`${urlImg}/${elImg}`} loop muted={mut} playing={playy} onClick={(e)=>console.log(e.target.playing='true')}  className="bg-[black]"/>
 <button onClick={()=>{
  console.log(1);
  if(mut){
    setMut(false)
  }
  else{
    setMut(true)
  }
 }}>Muted</button>
 <button onClick={()=>{
  
  if(playy){
     setPlayy(false)
  }

 else{
  setPlayy(true)
 }
 
 setIdx(el.postId)
 }}>play</button></div>:<div><ReactPlayer width='700px' height='500px' url={`${urlImg}/${elImg}`} muted={mut} playing={false} onClick={(e)=>console.log(e.target.playing='true')}  className="bg-[black]"/>
 <button onClick={()=>{
  console.log(1);
  if(mut){
    setMut(false)
  }
  else{
    setMut(true)
  }
 }}>Muted</button>
 <button onClick={()=>{

  if(playy){
     setPlayy(false)
  }

 else{
  setPlayy(true)
 }
 setIdx(el.postId)
 }}>play</button></div>
}
 
    </div>
  </>
)
                        }
                      })
                    }
                    </Swiper>
                      </div>
                  </div>
                  </>
                )
              })
            }
          </div>
        </div>
        <div className="">
          <p>isidnfnswefon</p>
        </div>
      </div>
    </>
  );
};

export default Home;
