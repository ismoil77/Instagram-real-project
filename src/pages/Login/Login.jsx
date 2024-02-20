import React from 'react'
import LogIn from '/src/assets/images/LogIn.png'
import links from '/src/assets/images/links.png'
import logo from '/src/assets/images/instagram-logo.png'
import TextField from '@mui/material/TextField';
import facebook from '/src/assets/images/facebook.png'
import { useFormik } from 'formik';
import { axiosRequest } from '../../utils/axiosRequest';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../../utils/token';

const Login = () => {
  const navigation = useNavigate()
  const loginFormik = useFormik(
    {
      initialValues:
      {
        userName:"",
        password:""
      },
      onSubmit: async ()=>
      {
        try
        {
          let {data} = await axiosRequest.post("Account/login" , loginFormik.values)
          if(data.statusCode == 200)
          {
            saveToken(data.data)
            navigation("/basic/message/newMessage")
          }
        }
        catch(error)
        {
          console.log(error);
        }
      }
    }
  )




  return (
    <div className='w-[100%] p-[74px_250px] flex justify-between '>
      <div className='flex flex-col gap-3 w-[35%]  items-center'>
        <img src={LogIn} alt="Picture" className='mix-blend-multiply' />
        <p className="text-[20px] text-[gray]">Get the app</p>
        <img src={links} alt="Picture" className='w-[100%]' />
      </div>
      <div className='w-[45%] flex flex-col gap-5'>
        <div className='w-[100%] flex flex-col items-center p-[40px_20px] rounded-md border-[1.7px] border-[#E2E8F0] gap-5'>
          <img src={logo} alt="" />
          <form onSubmit={loginFormik.handleSubmit} className='w-[95%]  flex flex-col gap-5'>
            <input name='userName' value={loginFormik.values.userName} onChange={loginFormik.handleChange} type="text" className='w-[100%] h-[6svh] rounded-md border border-[#E2E8F0] text-[20px] px-[1%] outline-none' placeholder='Phone number, user name or email' />
            <input name='password' value={loginFormik.values.password} onChange={loginFormik.handleChange} type="text" className='w-[100%] h-[6svh] rounded-md border border-[#E2E8F0] text-[20px] px-[1%] outline-none' placeholder='Password' />
            <button className='bg-[#3B82F6] text-[20px] text-[white] w-[100%] py-[10px] rounded-xl' type='submit'>Log in</button>
            <button className='text-[#3B82F6] text-[20px] w-[100%] py-[10px] rounded-xl'>Forgot password?</button>
          </form>
          <div className='flex items-center justify-between w-[95%]'>
            <hr className='w-[45%] border border-[#E2E8F0]' />
            <p className='text-[20px] text-[gray]'>or</p>
            <hr className='w-[45%] border border-[#E2E8F0]'/>
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <img src={facebook} alt="picture" />
            <p className="text-[20px]">Log in with Facebook</p>
          </div>
        </div>
        <div className='flex gap-2 items-center justify-center border-[1.7px] border-[#E2E8F0] rounded-md py-[20px]'>
          <p className="text-[20px]">Don't have an account?</p>
          <p className="text-[20px] text-[#3B82F6] cursor-pointer" onClick={() => navigation("/registration")}>Sign up</p>
        </div>
      </div>
    </div>
  )
}

export default Login