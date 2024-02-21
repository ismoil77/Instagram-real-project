import { IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from 'react'

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius:"10px",
  p: 4,
};


import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";

import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

import { getProfileById,GetPostByUser } from '../../api/profile/profile';
import { useDispatch, useSelector } from 'react-redux';

import { getToken } from '../../utils/token';
const Profile = () => {
  const [value, setValue] = useState("1");
  
  // const [editProfile, setEditProfile] = useState(false);
  
  const [menuProfile, setMenuProfile] = useState(false);
  const handleOpenProfile = () => setMenuProfile(true);
  const handleCloseProfile = () => setMenuProfile(false);

  const dispatch = useDispatch()
  const userProfile = useSelector((store) => store.profile.userProfile)
  const postProfile = useSelector((store) => store.profile.postProfile)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(userProfile.userName) 

  console.log(getToken());
useEffect(() => {
  dispatch(getProfileById(getToken().sid));
  dispatch(GetPostByUser(getToken().sid));
}, []);

  return (
    <div className="p-[60px] pr-[200px] ">
      <div className="flex justify-between">
        <div className="w-[28%]">
          <img
            className="w-[82%] rounded-full  h-[25vh] object-cover"
            src={
              length == 0
                ? "https://tse3.mm.bing.net/th?id=OIP.s3RJ4bcuEf9d2BBzCCB_0wHaHa&pid=Api&P=0&h=220"
                : userProfile.avatar
            }
            alt=""
          />
        </div>
        <div className="w-[70%]">
          <div className="flex flex-wrap w-[98%]  items-center gap-[60px]">
            <div>
              <h1 className="text-[22px] font-[700]">{userProfile.userName}</h1>
            </div>
            <div className="flex items-center gap-[20px]  h-[50px]">
              <button className="w-[120px] text-[18px] h-[45px] bg-[whitesmoke] rounded-xl">
                Edit profile
              </button>
              <button className="w-[120px] text-[18px] h-[45px] bg-[whitesmoke] rounded-xl ">
                View archive
              </button>
              <IconButton onClick={() => handleOpenProfile()}>
                <MenuIcon sx={{ width: "40px", height: "40px" }} />
              </IconButton>
            </div>
          </div>
          <div className="flex justify-between w-[70%] p-[0px] items-center mt-[20px] mb-[15px]">
            <div className="flex w-[32%]">
              <h1 className="text-[20px] text-[gray] ">
                <span className="text-[20px] font-[700] text-[black] pr-[5px]">
                  {userProfile.postCount}
                </span>
                posts
              </h1>
            </div>
            <div className="w-[32%] flex ">
              <h1 className="text-[20px] text-[gray] ">
                <span className="text-[20px] font-[700] text-[black] pr-[5px]">
                  {userProfile.subscribersCount}
                </span>
                follower
              </h1>
            </div>
            <div className="w-[32%] flex  ">
              <h1 className="text-[20px] text-[gray] ">
                <span className="text-[20px] font-[700] text-[black] pr-[5px]">
                  {userProfile.subscriptionsCount}
                </span>
                following
              </h1>
            </div>
          </div>
          <div className="w-[70%] mt-[20px] mb-[15px]">
            <h1 className="text-[30px] font-[700]">{userProfile.fullName}</h1>
          </div>
        </div>
      </div>
      <div className="p-[10px] flex gap-10 mt-[20px] mb-[30px] border-b-[3px]">
        <div className="w-[7.5%]">
          <div className="w-[70px] h-[70px] bg-[whitesmoke] text-center rounded-full">
            <AddIcon
              sx={{
                width: "40px",
                height: "40px",
                marginTop: "15px",
                color: "gray",
              }}
            />
          </div>
          <h1 className="text-center text-[18px]">New</h1>
        </div>
      </div>
      <div className="w-[500px] m-[auto]">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="posts" value="1" />
              <Tab label="Saved" value="2" />
              <Tab label="Tagged" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {/* {
              postProfile.map((elem) => {
                return (
                  <div>
                    <img src={elem.images} alt="" />
                  </div>
                )
              })
            } */}
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={menuProfile}
          onClose={handleCloseProfile}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={menuProfile}>
            <Box sx={style}>
              
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default Profile