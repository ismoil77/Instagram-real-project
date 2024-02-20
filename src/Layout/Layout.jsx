import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  faHouse,
  faMagnifyingGlass,
  faBars,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import navMessages from "../assets/icons/nav-messages.svg";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Avatar, TextField } from "@mui/material";
import navProfile from "../assets/images/nav-profile.jpg";

import ClearIcon from "@mui/icons-material/Clear";

// import search from "../pages/search/search";

import AOS from "aos";
import "aos/dist/aos.css";
import HomeIcon from "../icons/Layout/HomeIcon";
import ReelsIcon from "../icons/Layout/ReelsIcon";
import MessageIcon from "../icons/Layout/MessageIcon";
import { getToken } from "../utils/token";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import instagram from '/src/assets/images/LOGO.png'
import empty from '/src/assets/images/empty.png'
import { axiosRequest } from "../utils/axiosRequest";
import axios from "axios";
import "../App.css";

export const Layout = () => {
  // Функция для модального окна "Еще"

  const location = useLocation();
  const dispatch = useDispatch();
  let [followingState, setFollowingState] = useState(false);
  const [addModal , setAddModal] = useState(false)
  const [modal , setModal] = useState(false)
  const [img , setImg] = useState('')
  const [img2 , setImg2] = useState('')

  const myId = getToken().sid;
  window.addEventListener('contextmenu' , (e)=>
  {
    e.preventDefault()
    setModal(false)
    setAddModal(false)
  })

  const reader = (e) => {
    const file = e.target.files[0];
    setImg2(file)
    if (file)
    {
      const reader = new FileReader();

      reader.onload = (e) =>
      {
        const base64 = e.target.result;
        setImg(base64);
      };

      reader.readAsDataURL(file);
      setAddModal(false)
      setModal(true)
    }
  }

    async function post()
    {
      let form = new FormData()
      form.append("Title" ,"Img")
      form.append("Content" , "Img")
      form.append("Images" , img2)
     
      try
      {
          let {data} = await axiosRequest.post(`Post/add-post` , form , 
          {
            "Content-Type":"Multipart/form-data"
          })
          console.log(data.data);
          setModal(false)
      }
      catch(error)
      {
          console.log(error);
      }
    }

  useEffect(() => {
    AOS.init();
    
    setImg(empty)
  }, []);

  return (
    // Главный контейнер
    <main className="flex dark:bg-black dark:text-white">
      {/* Флекс контейнер */}
      {/* Navbar */}
      <aside
        className={`left ${
          location.pathname === "/basic/message" ||
          location.pathname === "/basic/message/newMessage"
            ? "w-[6%]"
            : "w-[19%]"
        }`}
      >
        {/* Панель навигации */}
        <div
          className={`${
            location.pathname === "/basic/message" ||
            location.pathname === "/basic/message/newMessage"
              ? "w-[6%]"
              : "w-[19%]"
          } panel-navigation fixed py-[33px] px-[15px] h-[100%] border-r-[1px] border-[#d8d8d8]`}
        >
          <ul
            className={`${
              "modalSearch" ? "items-start gap-[16.5px]" : "items-stretch"
            } flex flex-col gap-[12px]`}
          >
            {/* Logo */}
            <Link to="/basic">
              <li
                className={`${
                  location.pathname === "/basic/message" ||
                  location.pathname === "/basic/message/newMessage"
                    ? "hidden"
                    : "block"
                }mb-[15px]`}
              >
                <img
                  src={instagram}
                  alt="adasd"
                  className={` w-[80%] ${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage"
                      ? "hidden"
                      : "block"
                  }`}
                />
              </li>

              {/* instagram icon */}
              <li className="px-[9px]">
                <InstagramIcon sx={{ fontSize: "30px" }} />
              </li>

            </Link>
            <NavLink to="/basic">
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                {/* <img src={navHome} alt="" /> */}
                <HomeIcon />
                {/* <FontAwesomeIcon icon={faHouse} className="text-[25px]" /> */}
                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage"
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Главная
                </p>
              </li>
            </NavLink>

            {/* <search/> */}
            <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300 cursor-pointer">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[22px]"
              />

              <p
                className={`${
                  location.pathname === "/basic/message" ||
                  location.pathname === "/basic/message/newMessage"
                    ? "hidden"
                    : "block"
                }`}
              >
                Поисковой запрос
              </p>
            </li>

            <Link to="explore">
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <ExploreOutlinedIcon sx={{ fontSize: "25px" }} />
                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage"
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Интересное
                </p>
              </li>
            </Link>

            <NavLink to="reels">
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                {/* <img src={navReels} alt="" className="w-[25px]" /> */}
                <ReelsIcon />
                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage"
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Reels
                </p>
              </li>
            </NavLink>

            <NavLink to="message">
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                {/* <img src={navMessages} alt="" className="w-[25px]" /> */}
                <MessageIcon />
                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage"
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Сообщения
                </p>
              </li>
            </NavLink>

            <li className="flex cursor-pointer items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
              <FontAwesomeIcon icon={faHeart} className="text-[25px]" />
              <p
                className={`${
                  location.pathname === "/basic/message" ||
                  location.pathname === "/basic/message/newMessage"
                    ? "hidden"
                    : "block"
                }`}
              >
                Уведомления
              </p>
            </li>

            {/* create  */}
            <li onClick={() => {setAddModal(true) }} className="flex items-center cursor-pointer gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
              <AddBoxOutlinedIcon />
              <p
                className={`${
                  location.pathname === "/basic/message" ||
                  location.pathname === "/basic/message/newMessage"
                    ? "hidden"
                    : "block"
                }`}
              >
                Создать
              </p>
            </li>

            <NavLink to="profile">
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <Avatar
                  src={navProfile}
                  sx={{ width: "25px", height: "25px" }}
                />
                <p
                  className={`${
                    location.pathname === "/basic/message" ||
                    location.pathname === "/basic/message/newMessage"
                      ? "hidden"
                      : "block"
                  }`}
                >
                  Профиль
                </p>
              </li>
            </NavLink>

            <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300 cursor-pointer">
              <FontAwesomeIcon icon={faBars} className="text-[20px]" />
              <p
                className={`${
                  location.pathname === "/basic/message" ||
                  location.pathname === "/basic/message/newMessage"
                    ? "hidden"
                    : "block"
                }`}
              >
                Ещё
              </p>
            </li>
          </ul>
        </div>
        {/* Modal More */}

        {/* Modal Create */}
      </aside>
      {/* searchmodal  */}

      <div></div>

      {/* Контентная часть */}
      <aside className="right bg-[red]">
        <Outlet />
        {/* Футер */}

        {/* <footer  className="py-[10px]">
  
          <ul className="flex flex-wrap items-center justify-center gap-x-[10px] mx-auto w-[55%]">
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Meta
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Информация
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Блог
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Вакансии
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Помощь
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                API
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Конфиденциальность
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Условия
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Места
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Instagram Lite

              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Threads
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Загрузка контактов и лица, не являющиеся пользователями
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Meta Verified
              </a>
            </li>
          </ul>
          <div className="product-info flex justify-center gap-[10px] mx-auto mt-[20px]">
       
            <div className="localization flex gap-[10px]">
              <a href="" className="text-[12px] text-[#8D8D86]">
                Русский
              </a>
            </div>
            <p className="text-[12px] text-[#8D8D86]">
              © 2023 Instagram from Meta
            </p>
          </div>
        </footer> */}
      </aside>
      {
        addModal ?
        (
          <div className="z-20 fixed w-[100%] h-[100%] top-0 right-0 bg-[#0000008F]"></div>
        ) : null
      }
      {
        modal ?
        (
          <div className="z-20 fixed w-[100%] h-[100%] top-0 right-0 bg-[#0000008F]"></div>
        ) : null
      }
      {
        addModal ?
        (
          <div className="bg-[white] fixed top-[15%] w-[35%] h-[70svh] right-[30%] rounded-md z-50">
            <div className="flex items-center p-[20px] justify-between">
              <p className="text-[30px]">Create new post</p>
              <p className="text-[30px] font-[600] cursor-pointer" onClick={() => setAddModal(false)}>X</p>
            </div>
            <div className="flex flex-col items-center gap-7 py-[20px]">
              <img src={img} className="w-[250px] h-[200px] ml-[35px]" alt="Picture" />
              <p className="text-[30px]">Drag photos and videos here</p>
              {/* <button className="bg-[#3B82F6] text-[white] text-[20px] rounded-xl p-[10px_50px]">Select from computer</button> */}
              <label htmlFor="img" className="bg-[#3B82F6] text-[white] text-[20px] rounded-xl p-[10px_50px]">Select from computer</label>
            </div>
            <input multiple onChange={(e) => reader(e)} type="file" id="img" className="hidden" />
          </div>
        ) : null
      }
      {
        modal ?
        (
          <div className="bg-[white] fixed top-[15%] w-[35%] h-[70svh] right-[30%] rounded-md z-50 flex-col flex justify-between">
            <div className="flex items-center p-[10px] justify-between border border-[gray]">
              <p className="text-[30px] font-[600] cursor-pointer" onClick={() => setModal(false)}>X</p>
              <p className="text-[30px] text-[#3B82F6] hover:text-black cursor-pointer" onClick={() => post()}>Post</p>
            </div>
            
            <img src={img} className="w-[100%] h-[61.4svh]" alt="Picture" />
          </div>
        ) : null
      }
    </main>
  );
};
