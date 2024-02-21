import React, { useEffect, useState } from 'react'
import img from "../../assets/images/message.svg"
import img1 from "../../assets/images/message1.svg"
import imageee from "../../assets/images/profile.png"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SendIcon from '@mui/icons-material/Send';

import { axiosRequest } from '../../utils/axiosRequest';
import { useDispatch, useSelector } from 'react-redux';
import { getById, getUser, searchUser } from '../../api/Message/messageApi';
const Message = () => {
  const data = useSelector((state) => state.message.data);
  const user1 = useSelector((state) => state.message.user1);
  const byid = useSelector((state) => state.message.byid);
  const dispatch = useDispatch();


  const [user, setUser] = useState([]);
  const [search, setsearch] = useState("");
  // const [user1, setUser1] = useState([]);
  const [chat, setchat] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [idx, setidx] =useState(null);
  const [chatContent,setChatContent] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    dispatch(getUser())
  }, [])
  useEffect(() => {
    dispatch(searchUser())
  }, [])
  useEffect(() => {
    dispatch(getById())
  }, [])

  // console.log(user1);

  // async function getUser() {
  //   try {
  //     let { data } = await axiosRequest.get("Chat/get-chats");
  //     setUser(data.data)
  //     console.log(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  


  // async function searchUser(text) {
  //   try {
  //     let { data } = await axiosRequest.get(`User/get-users?UserName=${text}`);
  //     setUser1(data.data)
  //     console.log(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function postChat() {
    try {
      const { data } = await axiosRequest.post(`Chat/create-chat?resceiveUserId=${idx}`,{"receiverUserId":idx})
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }




 



  
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
          <input  onChange={(e)=> dispatch(searchUser(e.target.value))} className='outline-none  pr-[200px] pl-[10px] ' type="text" placeholder='Search...' name="" id="" />
        </div>
        </DialogContent>
        <div className="w-[90%] m-auto pb-[10px] mt-[5%]">
          <p className=''>No accounts :</p>
        </div>
        <div className="w-[90%] h-[50%] overflow-y-scroll m-auto">
          {
            user1.map((e)=>{
              return(
                
              <div className="flex justify-between items-center">
                 <div className="flex w-[90%] items-center mt-[2%]">
{e.avatar == null || e.avatar == "" ? (
                                      <img
                                        className="w-[40px] h-[40px] object-cover"
                                        src={imageee}
                                        alt={"profile"}
                                      />
                                    ) : (
                                      <img
                                        className="w-[40px] h-[40px] rounded-[50%] object-cover"
                                        src={`${
                                          import.meta.env.VITE_APP_FILES_URL
                                        }${e?.avatar}`}
                                        alt={"profile"}
                                      />
            )}
               <div className="ml-[5%]">
               <h1 className='font-mono font-[800]' >{e.userName}</h1>
                 <h1  className='w-[100%] font-mono'>{e.fullName}</h1>
               </div>
               </div>
               <input type="checkbox" onClick={()=> {setidx(e.id),console.log(idx);}} className=' rounded-[50%]' />
              </div>
              )
            })
          }
        </div>
        <DialogActions>
         <Button variant='contained' sx={{width:"100%"}} onClick={()=> {postChat(),handleClose()}}>Chat</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>

  <div className="flex justify-between ">
      
  <div className='w-[30%] pt-[27px] '>
   <div className="flex w-[90%] m-auto justify-between items-center">
    <h1 className='text-[25px] font-[700] font-mono'>terrylucas _</h1>
    <EditNoteIcon onClick={handleClickOpen} sx={{color:"skyblue",fontSize:40}} />
   </div>
   <div className="flex w-[90%] m-auto justify-between items-center mt-[5%]">
   <p className='text-[#A7B1BE] text-[18px] font-mono font-[700]'>Messages</p>
   <h1 className='font-[700] text-[16px] font-mono text-blue-600'>Requests</h1>
   </div>
   <div className="w-[90%] mt-[5%] overflow-y-scroll">
          {
            data.map((e)=>{
              return(
                <div onClick={()=> setChatContent(true)} className="flex items-center mt-[5%] hover:bg-[#EFF6FF] rounded-[5px] p-[5px]">
            {/* <img src={img1} alt="" /> */}
            {e.avatar == null || e.avatar == "" ? (
                                      <img
                                        className="w-[50px] h-[50px] object-cover"
                                        src={imageee}
                                        alt={"profile"}
                                      />
                                    ) : (
                                      <img
                                        className="w-[80px] h-[80px] rounded-[50%] object-cover"
                                        src={`${
                                          import.meta.env.VITE_APP_FILES_URL
                                        }${e.avatar}`}
                                        alt={"profile"}
                                      />
            )}
            <div className="ml-[10px]">
              <h1 className='text-[16px] font-[600]'>{e.receiveUser.userName}</h1>
              <p className='text-[#A7B1BE] text-[14px] font-mono'>Active 3m ago</p>
            </div>
          </div>
              )
            })
          }
         
        </div>
  </div>
{
  !chatContent?
  <div  className="w-[70%] text-center h-[595px] border-l ">
 <div className=" mt-[25%] ml-[10%] w-[100%] ">
 <img className='w-[15%] ml-[43%] mb-[2%]' src={img} alt="" />
  <h1 className='font-[700] text-[22px]'>Your messages</h1>
  <p className='text-[#A7B1BE] font-[500]'>Send private photos and messages to a friend or group</p>
  <button onClick={handleClickOpen} className='bg-[#3B82F6] mt-[2%] text-[white] w-[23%] h-[42px] rounded-[10px] font-mono font-[900]'>Send message</button>
 </div>
</div>:<div className="w-[70%]  mt-[3%] border-l pl-[5px] ">
 <div className="flex justify-between w-[95%] m-auto border-b pb-[20px] ">
 <div className="flex items-center w-[80%]">
    <img src={img1} alt="" />
    <div className="ml-[2%]">
    <h1 className='text-[16px] font-[600]'>terrylucas</h1>
              <p className='text-[#A7B1BE] text-[14px] font-mono'>Active 3m ago</p>
    </div>
  </div>
<div className="w-[15%] flex justify-between items-center">
<CallIcon/>
<VideocamOutlinedIcon/>
<InfoOutlinedIcon/>
</div>

 </div>
 <div className="h-[430px]"></div>
 <div className="w-[100%] ml-[2%] h-[45px] border  rounded-[10px]">
  <SentimentSatisfiedAltOutlinedIcon sx={{paddingLeft:1,fontSize:35}}/>
  <input type="text" className=' outline-none ml-[2%] mt-[1%] w-[80%]'  name="" id="" placeholder='Write a message...' />
 <MicNoneOutlinedIcon/>
 <InsertPhotoOutlinedIcon sx={{paddingLeft:1,fontSize:30}} />
 <SendIcon sx={{paddingLeft:1,fontSize:30}}/>
 </div>

</div> 

}

  </div>

    </>
  )
}

export default Message