import React from "react";
import "../../App.css";
import meta from "../../assets/images/meta1.png";
import prof from "../../assets/images/editprofile.png";
import not from "../../assets/images/natifikation.png";
import mut from "../../assets/images/mutelacaunts.png";
import lik from "../../assets/images/likeand.png";
import sub from "../../assets/images/subscriptions.png";
import pol from "../../assets/images/polzovatel.jpg";

import priv from "../../assets/images/acauntpriv.png";
import fren from "../../assets/images/closefrind.png";
import blok from "../../assets/images/bloked.png";
import his from "../../assets/images/hidestory.png";
import mes from "../../assets/images/mesages.png";
import tag from "../../assets/images/tags.png";
import com from "../../assets/images/coments.png";
import sar from "../../assets/images/shiring.png";
import res from "../../assets/images/restricted.png";
import aa from "../../assets/images/aa.png";
import ar from "../../assets/images/archiving.png";
import lan from "../../assets/images/language.png";
import web from "../../assets/images/website.png";
import sup from "../../assets/images/super.png";
import typ from "../../assets/images/type.png";
import help from "../../assets/images/help.png";
import stat from "../../assets/images/status.png";

import Accoun from "@mui/icons-material/AccountCircleOutlined";
import CustomizedSwitches from "../../components/swich";

const Settings = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="w-[32%] px-[2.5%] py-[7vh] font-sans border-r-[2px]">
        <h1 className="text-[22px] font-[700] ml-[10%]">Settings</h1>
        <img
          src={meta}
          alt=""
          className="w-[100%] rounded-[20px] mt-[4vh] shadow-xl border-t-[1px] hover:bg-[#00000010]"
        />
        <main className="mt-[4vh] px-[4%]">
          <h1 className="text-[grey] font-[600] ml-[5%] mb-[2vh]">
            How you use Instagram
          </h1>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={prof} className="w-[28px] rounded-[100%]" /> Edit profile
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={not} className="w-[28px] rounded-[100%]" /> Notifikations
          </button>
        </main>
        <main className="mt-[2vh] px-[4%]">
          <h1 className="text-[grey] font-[600] ml-[5%] mb-[2vh]">
            What you see
          </h1>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={mut} className="w-[28px] rounded-[100%]" /> Muted accounts
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={lik} className="w-[28px] rounded-[10px]" /> Like and share
            counts
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={sub} className="w-[28px] rounded-[10px]" /> Subscription
          </button>
        </main>
        <main className="mt-[2vh] px-[4%]">
          <h1 className="text-[grey] font-[600] ml-[5%] mb-[2vh]">
            Who can see your content
          </h1>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={priv} className="w-[28px] rounded-[100%]" /> Muted accounts
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={fren} className="w-[28px] rounded-[10px]" /> Like and share
            counts
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={blok} className="w-[28px] rounded-[10px]" /> Subscription
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={his} className="w-[28px] rounded-[10px]" /> Subscription
          </button>
        </main>
        <main className="mt-[2vh] px-[4%]">
          <h1 className="text-[grey] font-[600] ml-[5%] mb-[2vh]">
            How others can interact with you
          </h1>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={mes} className="w-[28px] rounded-[100%]" /> Muted accounts
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={tag} className="w-[28px] rounded-[10px]" /> Like and share
            counts
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={com} className="w-[28px] rounded-[100%]" /> Muted accounts
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={sar} className="w-[28px] rounded-[10px]" /> Like and share
            counts
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={res} className="w-[28px] rounded-[10px]" /> Subscription
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={aa} className="w-[28px] rounded-[10px]" /> Subscription
          </button>
        </main>
        <main className="mt-[2vh] px-[4%]">
          <h1 className="text-[grey] font-[600] ml-[5%] mb-[2vh]">
            Your app and media
          </h1>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={ar} className="w-[28px] rounded-[100%]" /> Muted accounts
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={lan} className="w-[28px] rounded-[10px]" /> Like and share
            counts
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={web} className="w-[28px] rounded-[10px]" /> Subscription
          </button>
        </main>
        <main className="mt-[2vh] px-[4%]">
          <h1 className="text-[grey] font-[600] ml-[5%] mb-[2vh]">
            For families
          </h1>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={sup} className="w-[28px] rounded-[100%]" /> Muted accounts
          </button>
        </main>
        <main className="mt-[2vh] px-[4%]">
          <h1 className="text-[grey] font-[600] ml-[5%] mb-[2vh]">
            For professionals
          </h1>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={typ} className="w-[28px] rounded-[10px]" /> Muted accounts
          </button>
        </main>
        <main className="mt-[2vh] px-[4%]">
          <h1 className="text-[grey] font-[600] ml-[5%] mb-[2vh]">
            More info and support
          </h1>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={help} className="w-[28px] rounded-[100%]" /> Muted accounts
          </button>
          <button className="flex w-[100%] items-center text-[18px] gap-[15px] hover:bg-[#00000020] rounded-[7px] p-[10px] px-[17px] transition-all duration-300">
            <img src={stat} className="w-[28px] rounded-[100%]" /> Muted accounts
          </button>
        </main>
      </div>

      <div className="w-[68%] px-[5%] py-[9vh] font-sans">
        <h1 className="text-[25px] font-[700]">Edit profile</h1>
        <main className="w-[100%] bg-[#f0f0f0] mt-[7vh] rounded-[20px] flex justify-between items-center px-[3%] py-[3vh]">
          <div className="flex justify-between items-center w-[31%]">
            <img
              src={pol}
              alt=""
              className="rounded-[100px] w-[70px] h-[70px]"
            />
            <article>
              <p className="text-[18px] font-[700]">t.ibragim_24</p>
              <p className="text-[16px] text-[grey]">ibo</p>
            </article>
          </div>
          <button className="px-[20px] py-[6px] rounded-[10px] text-[16px] font-[600] bg-[#4091fa] hover:bg-blue-600 text-white">
            Change photo
          </button>
        </main>

        <h1 className="text-[20px] font-[700] mt-[5vh]">Website</h1>
        <main className="w-[100%] bg-[#f0f0f0] mt-[2vh] rounded-[15px] border border-[#d0d0d0] flex justify-between items-center px-[3%] py-[2vh]">
          <h1 className="text-[18px] text-[grey]">Website</h1>
        </main>
        <h1 className="text-[grey] mt-[10px]">
          Editing your links is only available on mobile. Visit the Instagram
          app and edit your profile to change the websites in your bio.
        </h1>

        <h1 className="text-[20px] font-[700] mt-[5vh]">Bio</h1>
        <main className="w-[100%]  mt-[2vh] rounded-[15px] pb-[6vh] border border-[#d0d0d0] flex justify-between items-center px-[3%] py-[2vh]">
          <h1 className="text-[18px] text-[grey]">Bio</h1>
        </main>

        <h1 className="text-[20px] font-[700] mt-[5vh]">Gender</h1>
        <main className="w-[100%] mt-[2vh] rounded-[15px] border border-[#d0d0d0] flex justify-between items-center px-[3%] py-[3vh]">
          <h1 className="text-[18px] ">Male</h1>
        </main>
        <h1 className="text-[grey] mt-[10px]">
          This won’t be part of your public profile.
        </h1>

        <h1 className="text-[20px] font-[700] mt-[5vh]">
          Show account suggestions on profiles
        </h1>
        <main className="w-[100%] mt-[2vh] rounded-[25px] border border-[#d0d0d0] flex justify-between items-center px-[3%] py-[3vh]">
          <div className="mr-[20px]">
            <h1 className="text-[18px] ">
              Show account suggestions on profiles
            </h1>
            <h1 className="text-[grey]">
              Choose whether people can see similar account suggestions on your
              profile, and whether your account can be suggested on other
              profiles.
            </h1>
          </div>
          <h1 className="mr-[-30px]">{CustomizedSwitches()}</h1>
        </main>
        <div className="flex justify-between items-center mt-[6vh]">
          <h1></h1>
          <button className="px-[125px] py-[15px] rounded-[10px] text-[16px] font-[600] bg-[#4091fa] hover:bg-blue-600 text-white">
            Submit
          </button>
        </div>

        <div>
          <h1 className="text-[grey] text-center mt-[12vh] flex justify-between items-start px-[5%]">
            <span>Meta</span>
            <span>About</span>
            <span>Blog</span>
            <span>Jobs</span>
            <span>Help</span>
            <span>API</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Locations</span>
            <span>Instagram</span>
            <span>Lite</span>
            <span>Threads</span>
          </h1>
          <h1 className="text-center text-[grey]">Contact Uploading & Non-Users &nbsp; &nbsp; Meta Verified</h1>
          <h1 className="text-center text-[grey] mt-[15px]">English &nbsp; &nbsp; © 2024 Instagram from Meta</h1>
        </div>
      </div>
    </div>
  );
};

export default Settings;
