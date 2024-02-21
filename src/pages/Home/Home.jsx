import { useState, useEffect } from "react";
import iconButtonLeft from "../../assets/imgHome/ıcon.svg";
import { axiosRequest } from "../../utils/axiosRequest";
import HomeStyle from "../Home/HomeStyle.css"
import ReactPlayer from 'react-player'
const Home = () => {
const urlImg = import.meta.env.VITE_APP_FILES_URL
const [mut,setMut]= useState(false)
const [playy,setPlayy]= useState(false)
  const [data, setData] = useState([]);

  async function getData() {
    try {
      let { data } = await axiosRequest.get("Post/get-posts?PageSize=30");
      console.log(data.data);
      
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  // console.log(data[0].images[0]);
  return (
    <>
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
          <div className="">
            {
              data.map((el,i)=>{
                return (
                  <>
                  <div className="flex flex-col gap-[40px]" key={el.postId}>
                    {
                      el.images.map((elImg)=>{
                        let checkType = elImg.split(".")
                        let resulOfCheck = checkType[checkType.length-1].toLowerCase()
                        let exampleImg = ['jpg', 'jpeg', 'png', 'gif', 'bmp']
                        let exampleVideo = ['mp4', 'avi', 'mov', 'wmv', 'flv']
                        if(exampleImg.includes(resulOfCheck)){
console.log("IMG");
return <img  src={`${urlImg}/${elImg}`} className="w-[620px] rounded-[] h-[620px]" alt="" srcset="" />

                        }
                        else if(exampleVideo.includes(resulOfCheck)){
                          console.log("Video");

return (
  <>
{/* <div className="">
<video
    id="my-player"
    class="video-js w-[620px] h-[614px]"
    controls
    width="640"
    height='340'
    preload="auto"
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'
  >
    <source class="w-[620px] h-[614px]" src={`${urlImg}/${elImg}`} type="video/mp4" />
    <source class="w-[620px] h-[614px]" src={`${urlImg}/${elImg}`} type="video/webm" />
  </video>
</div> */}
 <div className="video-player">
 <ReactPlayer width='620px' height='620px' url={`${urlImg}/${elImg}`} muted={mut} playing={playy} onClick={(e)=>console.log(e.target.playing='true')}  className="bg-[black]"/>
 <button onClick={()=>{
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
 }}>play</button>
    </div>
  </>
)
                        }
                      })
                    }
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
