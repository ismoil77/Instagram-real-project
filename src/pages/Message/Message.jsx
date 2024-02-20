import React, { useEffect, useState } from 'react'
import img from "../../assets/images/message.svg"
import img1 from "../../assets/images/message1.svg"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SearchIcon from '@mui/icons-material/Search';

import { axiosRequest } from '../../utils/axiosRequest';
const Message = () => {
  const [user, setUser] = useState([]);
  const [user1, setUser1] = useState([]);
  const [search, setsearch] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function getUser() {
    try {
      let { data } = await axiosRequest.get("Chat/get-chats");
      setUser(data.data)
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function searchUser(text) {
    try {
      let { data } = await axiosRequest.get(`User/get-users?UserName=${text}`);
      setUser1(data.data)
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    getUser()
  },[])
  useEffect(()=>{
    searchUser()
  },[])

  console.log(setUser);


  
  return (
    <>
 <React.Fragment >
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
       <div className="w-[90%] flex items-center justify-between pt-[10px] m-auto">
        <h1 className='font-[800] ml-[33%] text-[25px] font-mono'>New Message</h1>
        <ClearIcon onClick={handleClose} />
       </div>
        <DialogContent>
        <div className="flex justify-between w-[100%] border-t pt-[10px] border-b  pb-[10px] m-auto items-center">
          <SearchIcon  />
          <input onChange={(e)=> searchUser(e.target.value)} className='outline-none  pr-[200px] pl-[10px] ' type="text" placeholder='Search...' name="" id="" />
        {
          user1.map((e)=>{
            <h1>{e.UserName}</h1>
          })
        }
        </div>
        </DialogContent>
        <div className="w-[90%] m-auto pb-[10px]">
          <p className=''>No accounts :</p>
        </div>
        <DialogActions>
         <Button variant='contained' sx={{width:"100%"}}>Chat</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>

  <div className="flex justify-between">
      
  <div className='w-[30%] pt-[27px] '>
   <div className="flex w-[90%] m-auto justify-between items-center">
    <h1 className='text-[25px] font-[700] font-mono'>terrylucas _</h1>
    <EditNoteIcon sx={{color:"skyblue",fontSize:40}} />
   </div>
   <div className="flex w-[90%] m-auto justify-between items-center mt-[5%]">
   <p className='text-[#A7B1BE] text-[18px] font-mono font-[700]'>Messages</p>
   <h1 className='font-[700] text-[16px] font-mono text-blue-600'>Requests</h1>
   </div>
   <div className="w-[90%] m-auto mt-[5%] overflow-y-scroll h-[80%]">
          <div className="flex items-center mt-[5%] hover:bg-[#EFF6FF] rounded-[5px] p-[5px]">
            <img src={img1} alt="" />
            <div className="ml-[10px]">
              <h1 className='text-[16px] font-[600]'>ibrosha24</h1>
              <p className='text-[#A7B1BE] text-[14px] font-mono'>Active 3m ago</p>
            </div>
          </div>
          <div className="flex items-center mt-[5%] hover:bg-[#EFF6FF] rounded-[5px] p-[5px]">
            <img src={img1} alt="" />
            <div className="ml-[10px]">
              <h1 className='text-[16px] font-[600]'>Fazliddin</h1>
              <p className='text-[#A7B1BE] text-[14px] font-mono'>Active 10m ago</p>
            </div>
          </div>
        </div>
  </div>

<div  className="w-[70%] h-[595px] border-l ">
 <div className="text-center mt-[16%] ">
 <img className='w-[15%] ml-[43%] mb-[2%]' src={img} alt="" />
  <h1 className='font-[700] text-[20px]'>Your messages</h1>
  <p className='text-[#A7B1BE]'>Send private photos and messages to a friend or group</p>
  <button onClick={handleClickOpen} className='bg-[#3B82F6] mt-[2%] text-[white] w-[15%] h-[40px] rounded-[10px] font-mono font-[900]'>Send message</button>
 </div>
</div>
  </div>

    </>
  )
}

export default Message