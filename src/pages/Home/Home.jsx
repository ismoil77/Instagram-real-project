import React, { useEffect,useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getLike, getTodosByPost12, getUserAbout } from '../../api/home/home'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import imgMore from "/src/assets/imgHome/More.svg"
import playVideoImg from "/src/assets/imgHome/Vector.svg"
import volumeMute from "/src/assets/imgHome/volume_off.svg"
import volumeNotMute from "/src/assets/imgHome/volume_up.svg"
import heart from "/src/assets/imgHome/8666647_heart_icon.png"
import heartActive from "/src/assets/imgHome/heartAcive.png"
import chat1 from "/src/assets/imgHome/chat2.svg"
import send from "/src/assets/imgHome/send.svg"
import sav from "/src/assets/imgHome/turned_in_not.svg"
import savActive from "/src/assets/imgHome/577-5771640_bookmark-icon-png-transparent-png.png"
import notFoundUser from '/src/assets/imgHome/notFoundUser.jpg'

const Home = () => {
  const [viewComment,setViewComment]=useState('')
  const urlImg = import.meta.env.VITE_APP_FILES_URL
 const dispatch = useDispatch()
 const data = useSelector((store)=>store.homeJs.data)
 useEffect(()=>{
  dispatch(getUserAbout())
dispatch(getTodosByPost12())

 },[])
 

  return (
    <>
    <div className="ml-[100px] flex ">


      {/* history and posts */}
     <div className='w-[60%] '>

      {/* /////history */}
      <div className=" flex gap-3 mt-[-50px]">
      <Swiper navigation={true} slidesPerView={7} height={"100px"} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>  <div className="flex flex-col ">
            <div className="w-[70px] h-[70px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] ">
          <img className='w-[63px] h-[63px] border-[4px] border-white rounded-[50%] object-cover' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708560000&semt=ais" alt="" />
            </div>
            <p className='text-[15px] mt-[5px]'>Your Story</p>
        </div></SwiperSlide>
      
      
        <SwiperSlide>  <div className="flex flex-col ">
            <div className="w-[70px] h-[70px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] ">
          <img className='w-[63px] h-[63px] border-[4px] border-white rounded-[50%] object-cover' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708560000&semt=ais" alt="" />
            </div>
            <p className='text-[15px] mt-[5px]'>Your Story</p>
        </div></SwiperSlide>
        <SwiperSlide>  <div className="flex flex-col ">
            <div className="w-[70px] h-[70px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] ">
          <img className='w-[63px] h-[63px] border-[4px] border-white rounded-[50%] object-cover' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708560000&semt=ais" alt="" />
            </div>
            <p className='text-[15px] mt-[5px]'>Your Story</p>
        </div></SwiperSlide>
        <SwiperSlide>  <div className="flex flex-col ">
            <div className="w-[70px] h-[70px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] ">
          <img className='w-[63px] h-[63px] border-[4px] border-white rounded-[50%] object-cover' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708560000&semt=ais" alt="" />
            </div>
            <p className='text-[15px] mt-[5px]'>Your Story</p>
        </div></SwiperSlide>

        <SwiperSlide>  <div className="flex flex-col ">
            <div className="w-[70px] h-[70px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] ">
          <img className='w-[63px] h-[63px] border-[4px] border-white rounded-[50%] object-cover' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708560000&semt=ais" alt="" />
            </div>
            <p className='text-[15px] mt-[5px]'>Your Story</p>
        </div></SwiperSlide>

        <SwiperSlide>  <div className="flex flex-col ">
            <div className="w-[70px] h-[70px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] ">
          <img className='w-[63px] h-[63px] border-[4px] border-white rounded-[50%] object-cover' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708560000&semt=ais" alt="" />
            </div>
            <p className='text-[15px] mt-[5px]'>Your Story</p>
        </div></SwiperSlide>


        <SwiperSlide>  <div className="flex flex-col ">
            <div className="w-[70px] h-[70px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] ">
          <img className='w-[63px] h-[63px] border-[4px] border-white rounded-[50%] object-cover' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708560000&semt=ais" alt="" />
            </div>
            <p className='text-[15px] mt-[5px]'>Your Story</p>
        </div></SwiperSlide>

        <SwiperSlide>  <div className="flex flex-col ">
            <div className="w-[70px] h-[70px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] ">
          <img className='w-[63px] h-[63px] border-[4px] border-white rounded-[50%] object-cover' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708560000&semt=ais" alt="" />
            </div>
            <p className='text-[15px] mt-[5px]'>Your Story</p>
        </div></SwiperSlide>
        </Swiper>
      </div>
      {/* ///// */}

{/* //////user/// */}
<div className="flex flex-col gap-[30px]">
    
    
{
      data.map((el,index)=>{
        // console.log(el.images[0].length);
        // console.log(el.images[0].slice(el.images[0].length-3));
        // el.images[0].slice(el.images[0].length-3)
        return (
          <div className="">
      <div className=" w-[90%] border-t-[3px] pt-[10px]">
<div className="">
  {/* ////rows */}
  <div className="flex items-center justify-between ">
    <div className="flex items-center gap-3">
    <div className="flex flex-col ">
            <div className="w-[60px] h-[60px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] ">
          <img className='w-[53px] h-[53px] border-[4px] border-white rounded-[50%] object-cover' src={el.images[0].slice(el.images[0].length-3)=="mp4"?notFoundUser:`${urlImg}/${el.images[0]}`} alt="" />
            </div>
           
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className='text-[16px] font-[600]'>{el.title!=null?el.title:"Not Have Name"}</p>
          <p className='font-[500] text-[#64748B] text-[16px]'>Profile: {el.datePublished.slice(0,10)} {el.datePublished.slice(11,19)}</p>
          
        </div>
    </div>
    <div className="">
      <img className='w-[40px]' src={imgMore} alt="" />
    </div>
  </div>
  {/* //////// */}


{/* posts */}
  <div className="mt-[10px]">
    <img className=' rounded-[15px] w-[100%] h-[614px] object-cover border-4 'src={el.images[0].slice(el.images[0].length-3)=="mp4"?notFoundUser:`${urlImg}/${el.images[0]}`} alt="" />
  {/* <button className='absolute mt-[-620px] w-[30px]  ml-[10px]'><img src={playVideoImg} className='' alt="" /></button>
  <button className='absolute mt-[-35px] ml-[580px] w-[30px]  '><img src={volumeMute} className='invert' alt="" /></button> */}
  </div>
{/* //// */}


{/* action */}
<div className="w-[100%] h-[60px] flex items-center px-[10px] justify-between">
  <div className="flex gap-[10px]">
      <button className='w-[30px]'>
    <img className='w-[30px]' src={el.postLike?heartActive:heart} onClick={(e)=>{

      dispatch(getLike(el.postId))

      dispatch(getTodosByPost12())
      
    }} alt="" />
  </button>
  <button className='w-[30px]'>
    <img className='w-[30px]' src={chat1} alt="" />
  </button>
  <button className='w-[30px]'>
    <img className='w-[30px]' src={send} alt="" />
  </button>
  </div>
  <div className="">
  <button className='w-[30x]'>
    <img className='w-[30px] ' src={el.postFavorite?savActive:sav} onClick={()=>{

    }} alt="" />
  </button>
  </div>

</div>

{/* ///// */}



{/* ////LIKE and comment */}
<div className="px-[10px]">
 <div className=" flex items-center gap-3">
  <img className='w-[30px] h-[30px] object-cover rounded-[50%]' src={el.images[0].slice(el.images[0].length-3)=="mp4"?notFoundUser:`${urlImg}/${el.images[0]}`}  alt="" />
 <p className='font-[500] text-[17px]' ><span>{el.postLikeCount}</span> Likes</p>
 </div>


 <div className="flex flex-col">

 <p className='font-[500] text-[15px] mt-[10px]' ><span className='font-[600]'>{el.content?el.content:el.content==""?`User${Math.floor((Math.random() * 1000) + 1)}`:`User${Math.floor((Math.random() * 100) + 1)}`}</span> kklk in sit rhoncus, eleifend tellus augue lectus potenti pellentesque ...</p>
<button className='text-[#94A3B8] text-left text-[16px]'>View all 100 comments</button>

<p className='font-[500] text-[15px] mt-[10px]' ><span className='font-[600]'>{el.title?`User${Math.floor((Math.random() * 100) + 1)}`:el.title==""?`User${Math.floor((Math.random() * 1000) + 1)}`:`User${Math.floor((Math.random() * 100) + 1)}`}</span> Very impressive! 🔥🔥</p>
<p className='text-[#94A3B8] text-left text-[16px]'>1 hour ago</p>

 </div>

 <div className="flex border-b-[2px] mb-[10px]">
  <input type="text" placeholder='Add a comment...' className='h-[50px] w-[100%]' />
  <button className='text-[30px]'>☻</button>
 </div>
</div>

{/* ///// */}
</div>



      </div>

          </div>
        )
      })
    }
    </div>  
      {/* ///// */}


      
    </div>
    {/* ////// */}


    <div className="w-[35%] mx-auto mt-[40px]">

      <div className="flex justify-between text-[#64748B] text-[18px] font-[500]" >
        <p>Suggested for you</p>
        <button>See all</button>
      </div>
      <div className="mt-[30px] flex flex-col gap-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex flex-col ">
            <div className="w-[60px] h-[60px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] ">
          <img className='w-[53px] h-[53px] border-[4px] border-white rounded-[50%] object-cover' src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
            </div>
           
        </div >
        <div className="flex flex-col gap-[5px]">
          <p className='text-[16px] font-[600]'>terrylucas</p>
          <p className='font-[500] text-[#64748B] text-[16px]'>Profile</p>
        </div>
        </div>
    
        <div className="">
          <button className='text-[#3B82F6] text-[20px]'>Follow</button>
        </div>
    </div>
    

    <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex flex-col ">
            <div className="w-[60px] h-[60px] rounded-[50%] border-[3.5px] border-[#DE0046] flex items-center justify-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B] ">
          <img className='w-[53px] h-[53px] border-[4px] border-white rounded-[50%] object-cover' src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
            </div>
           
        </div >
        <div className="flex flex-col gap-[5px]">
          <p className='text-[16px] font-[600]'>terrylucas</p>
          <p className='font-[500] text-[#64748B] text-[16px]'>Profile</p>
        </div>
        </div>
    
        <div className="">
          <button className='text-[#3B82F6] text-[20px]'>Follow</button>
        </div>
    </div>
      </div>
    </div>
    </div>
    <div className="">

    
   
    </div>
    </>
   
  )
}

export default Home
