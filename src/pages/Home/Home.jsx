import React from 'react'
import iconButtonLeft from '../../assets/imgHome/ıcon.svg'
const Home = () => {

  const [data , setData] = useState([])



  async function getData()
  {
    try
    {
      let {data} = await axiosRequest.get("Post/get-posts")
      console.log(data.data);
      setData(data.data)
    }
    catch(error)
    {
      console.log(error);
    }
  }

  useEffect(()=>
  {
    getData()
  } , [])
  return (
    <>
    <div className="">
      <div className="">

        <div className="flex ">
          <button><img alt="" className='rotate-180' src={iconButtonLeft}/></button>
          <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
            <img className='w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover' src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp" alt="" />
          </div>
          <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
            <img className='w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover' src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp" alt="" />
          </div>
          <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
            <img className='w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover' src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp" alt="" />
          </div>
          <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
            <img className='w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover' src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp" alt="" />
          </div>
          <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
            <img className='w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover' src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp" alt="" />
          </div>
          <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
            <img className='w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover' src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp" alt="" />
          </div>
          <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
            <img className='w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover' src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp" alt="" />
          </div>
          <div className="w-[70px] h-[70px] rounded-[50%]  flex justify-center items-center bg-gradient-to-r from-[#DE0046] to-[#F7A34B]">
            <img className='w-[65px]  h-[65px] rounded-[50%] border-[3px] object-cover' src="https://ultimatedubaiguide.com/wp-content/uploads/2023/08/Brand-Cover-of-IMG-World-of-Adventure.jpg.webp" alt="" />
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Home