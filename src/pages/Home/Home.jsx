import React, { useEffect, useState } from 'react'
import { axiosRequest } from '../../utils/axiosRequest'
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
    <div>
      {
        data.map(el =>
          (
            <div key={el.postId}>
                <img src={`http://65.108.148.136:8085/images/${el.images[0]}`} className='w-[100px] h-[100px] bg-[white]'  alt="picture" />
            </div>
          ))
      }
    </div>
  )
}

export default Home