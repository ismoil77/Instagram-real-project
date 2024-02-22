import React, { useEffect, useState } from "react";
import img from "../../assets/images/message.svg";
import img1 from "../../assets/images/message1.svg";
import imageee from "../../assets/images/profile.png";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ClearIcon from "@mui/icons-material/Clear";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from "@mui/icons-material/Call";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import SendIcon from "@mui/icons-material/Send";
import { getToken } from "../../utils/token";
import "../../App.css"
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { axiosRequest } from "../../utils/axiosRequest";
import { useDispatch, useSelector } from "react-redux";
import { getById, getUser, searchUser,getMessage, deleteChat, postChat } from "../../api/Message/messageApi";
import { setUserMessage } from "../../reducers/Message/Message";
import { useNavigate } from "react-router";



const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
const Message = () => {
  const data = useSelector((state) => state.message.data);
  const user1 = useSelector((state) => state.message.user1);
  const message = useSelector((state) => state.message);
  const byid = useSelector((state) => state.message.byid);
  const chatmessage = useSelector((state) => state.message.chatMessage);
  console.log(chatmessage)
  const dispatch = useDispatch();

  const [user, setUser] = useState([]);
  const [search, setsearch] = useState("");
  const [modal, setmodal] = useState(false);
  // const [user1, setUser1] = useState([]);
  const [chat, setchat] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [idx, setidx] = useState(null);
  const [idx1, setidx1] = useState(null);
  const [chatContent, setChatContent] = useState(false);


  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [card , setCard] = useState(false)

  useEffect(() => {
    dispatch(getUser());
  }, []);
  useEffect(() => {
    dispatch(searchUser());
  }, []);
  useEffect(() => {
    dispatch(getById());
  }, []);
  useEffect(() => {
    dispatch(getMessage());
  }, []);

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

  // async function postChat() {
  //   try {
  //     console.log(idx);
  //     const { data } = await axiosRequest.post(
  //       `Chat/create-chat?receiverUserId=${idx}`
  //     );
  //     getUser(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const navigate = useNavigate()

  return (
    <>
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="w-[90%] flex items-center justify-between pt-[10px] m-auto">
            <h1 className="font-[800] ml-[33%] text-[25px] font-mono">
              New Message
            </h1>
            <ClearIcon onClick={handleClose} />
          </div>
          <DialogContent>
            <div className="flex justify-between w-[100%] border-t pt-[10px] border-b  pb-[10px] m-auto items-center">
              <SearchIcon />
              <input
                onInput={(e) => setsearch(e.target.value)}
                onChange={(e) => dispatch(searchUser(e.target.value))}
                className="outline-none  pr-[200px] pl-[10px] "
                type="text"
                placeholder="Search..."
                name=""
                id=""
              />
            </div>
          </DialogContent>
          <div className="w-[90%] h-[50%] overflow-y-scroll m-auto">
            {search.length == 0 ? (
              <div>
                <h1>No accounts</h1>
              </div>
            ) : (
              <div className="">
                { user1.length>0 && 
                user1.map((e) => {
                  return (
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
                            src={`${import.meta.env.VITE_APP_FILES_URL}${
                              e?.users.avatar
                            }`}
                            alt={"profile"}
                          />
                        )}
                        <div className="ml-[5%]">
                          <h1 className="font-mono font-[800]">{e.userName}</h1>
                          <h1 className="w-[100%] font-mono">{e.fullName}</h1>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        onClick={() => {
                          setidx(e.id), console.log(e.id);
                        }}
                        className=" rounded-[50%]"
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <DialogActions>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => {
                dispatch(postChat(idx)), handleClose();
              }}
            >
              Chat
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <div className="flex justify-between ">
        <div className="w-[30%] pt-[27px] ">
          <div className="flex w-[90%] m-auto justify-between items-center">
            <h1 className="text-[25px] font-[700] font-mono">terrylucas _</h1>
            <EditNoteIcon
              onClick={handleClickOpen}
              sx={{ color: "#2563EB", fontSize: 40 }}
            />
          </div>
          <div className="flex w-[90%] m-auto justify-between items-center mt-[5%]">
            <p className="text-[#A7B1BE] text-[18px] font-mono font-[700]">
              Messages
            </p>
            <h1 className="font-[700] text-[16px] font-mono text-blue-500">
              Requests
            </h1>
          </div>
          <div className="w-[90%] m-auto mt-[5%] h-[80%] overflow-y-scroll">
            { data.length>0 && 

            data.map((e) => {
              return (
                <div
                  onClick={() => {setidx1(e.chatId),console.log(e.chatId),setChatContent(true),dispatch(getById(e.receiveUser.userId)),dispatch(getMessage(e.chatId))}}
                  className="flex items-center mt-[5%] hover:bg-[#EFF6FF] rounded-[5px] p-[5px]"
                >
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
                      src={`${import.meta.env.VITE_APP_FILES_URL}${e.avatar}`}
                      alt={"profile"}
                    />
                  )}
                  <div className="ml-[10px]">
                    <h1 className="text-[16px] font-[600]">
                      {e.receiveUser.userName}
                    </h1>
                    <p className="text-[#A7B1BE] text-[14px] font-mono">
                      Active 3m ago
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {!chatContent ? (
          <div className="w-[70%] text-center h-[595px] border-l ">
            <div className=" mt-[25%] w-[100%] ">
              <img className="w-[15%] ml-[43%] mb-[2%]" src={img} alt="" />
              <h1 className="font-[700] text-[22px]">Your messages</h1>
              <p className="text-[#A7B1BE] font-[500]">
                Send private photos and messages to a friend or group
              </p>
              <button
                onClick={handleClickOpen}
                className="bg-[#3B82F6] mt-[2%] text-[white] w-[23%] h-[42px] rounded-[10px] font-mono font-[900]"
              >
                Send message
              </button>
            </div>
          </div>
        ) : (
          <div className="w-[70%]  pt-[1.5%] border-l ">
           <div className="w-[100%] border-b pb-[10px]">
           <div className="w-[95%] m-auto ">
            <div className="flex justify-between w-[100%] m-auto  ">
              <div className="flex items-center w-[80%]">
                 {message.userMessage?.image == null || message.userMessage?.image == "" ? (
                    <img
                      className="w-[50px] h-[50px] object-cover"
                      src={imageee}
                      alt={"profile"}
                    />
                  ) : (
                    <img
                      className="w-[50px] h-[50px] rounded-[50%] object-cover"
                      src={`${import.meta.env.VITE_APP_FILES_URL}${message.userMessage?.image}`}
                      alt={"profile"}
                    />
                  )}
                <div className="ml-[2%]">
                  {
                    console.log(message)
                  }
                  <h1 className="text-[16px] font-[600]">{message.userMessage?.userName}</h1>
                  <p className="text-[#A7B1BE] text-[14px] font-mono">
                    Active 3m ago
                  </p>
                </div>
              </div>
              <div className="w-[15%] flex justify-between items-center">
                <CallIcon />
                <VideocamOutlinedIcon />
                <InfoOutlinedIcon onClick={()=> setmodal(true)} />
              </div>
            </div>
            </div>
           </div>




            <div onClick={()=> setmodal(close)} className="h-[465px]">
              {
                console.log(chatmessage)
              }
              {
                chatmessage?.map((e) => {
                  console.log(e.chatmessage);
                  return (<div>
                       <div>{e.messageText}</div>
                    </div>
                  )
                })
              }



            </div>





            <div className="w-[98%] m-auto h-[45px] border  rounded-[10px]">
              <SentimentSatisfiedAltOutlinedIcon
                sx={{ paddingLeft: 1, fontSize: 35 }}
              />
              <input
                type="text"
                className=" outline-none  pt-[1.5%] pl-[10px] w-[84%]"
                name=""
                id=""
                placeholder="Write a message..."
              />
              <MicNoneOutlinedIcon />
              <InsertPhotoOutlinedIcon sx={{ paddingLeft: 1, fontSize: 30 }} />
              <SendIcon sx={{ paddingLeft: 1, fontSize: 30 }} />
            </div>
          </div>
        )}
      </div>


      {
        modal?
      <div onClick={()=> setmodal(close)} className="">
          <div className="open h-[100%] w-[25%] left-[75%] absolute top-0 border bg-white">
          <div className="w-[90%] mt-[6%] m-auto">
            <h1 className="font-[500] text-[22px]  ">Information</h1>
          </div>
          <div className="w-[100%] pb-[20px] border-b">
          <div className="w-[90%] m-auto flex mt-[12%]  justify-between">
 <h1  className=" w-[60%] text-[22px] ">Turn off message notifications</h1>
 <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        
      />
          </div>
          </div>
<div className="w-[90%] m-auto mt-[7%]">
<h1 className="font-[700] text-[18px] font-mono mb-[2%] ">Users</h1>
<div className="flex items-center w-[80%] mt-[5%]">
                 {message.userMessage?.image == null || message.userMessage?.image == "" ? (
                    <img
                      className="w-[50px] h-[50px] object-cover"
                      src={imageee}
                      alt={"profile"}
                    />
                  ) : (
                    <img
                      className="w-[50px] h-[50px] rounded-[50%] object-cover"
                      src={`${import.meta.env.VITE_APP_FILES_URL}${message.userMessage?.image}`}
                      alt={"profile"}
                    />
                  )}
                <div className="ml-[2%]">
                  {
                    console.log(message)
                  }
                  <h1 className="text-[16px] font-[600]">{message.userMessage?.userName}</h1>
                  <p className="text-[#A7B1BE] text-[14px] font-mono">
                    Active 3m ago
                  </p>
                </div>
              </div>
</div>

       <div className="w-[100%]  border-t pt-[5px] mt-[43%]">
       <div className="w-[90%] m-auto ">
          <button className="text-red-500  block text-[20px] mt-[5%]">Punishment</button>
          <button className="text-red-500  block text-[20px] mt-[5%]">Block User</button>
          <button className="text-red-500  block text-[20px] mt-[5%]" onClick={()=> {dispatch(deleteChat(idx1)),setChatContent(false),setmodal(false)}} >Delete Chat</button>
        </div>
       </div>
        </div>
      </div>:null
      }
    </>
  );
};

export default Message;
