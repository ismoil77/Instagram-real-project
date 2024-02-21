import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../App.css";
import { getUsers } from "../../../pages/search/search";
import user from "../../../assets/images/polzovatel.jpg";
import CloseIcon from "@mui/icons-material/Close";

const MySearch = () => {
  const data = useSelector((state) => state.search.data);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="searchMod">
      <article className="py-[20px] px-[16px] border-b">
        <h1 className="text-[24px] font-[600] ml-[4px]">Поисковый запрос</h1>
        <input
          type="text"
          className="bg-gray-100 px-[10px] py-[8px] rounded-[8px] w-[100%] mt-[7.5vh] outline-none"
          placeholder="Поиск"
          onChange={(e) => dispatch(getUsers(e.target.value))}
        />
      </article>

      <nav>
        <div className="px-[21px] py-[15px] pt-[20px]">
          <h1 className="font-[600]">Недавнее</h1>
        </div>
        <main>
          {data.map((e) => {
            return (
              <div
                key={e.id}
                className="flex justify-between items-center w-[100%] hover:bg-gray-200 px-[24px] py-[10px]"
              >
                <div className="flex w-[90%] items-center">
                  {e.avatar == null || e.avatar == "" ? (
                    <img
                      className="w-[43px] h-[43px] object-cover rounded-[100px]"
                      src={user}
                      alt={"profile"}
                    />
                  ) : (
                    <img
                      className="w-[43px] h-[43px] rounded-[50%] object-cover"
                      src={`${import.meta.env.VITE_APP_FILES_URL}${e?.avatar}`}
                      alt={"profile"}
                    />
                  )}
                  <div className="ml-[5%]">
                    <h1 className="text-[14px] font-[600]">{e.userName}</h1>
                    <h1 className="text-[14px] text-gray-500 mt-[-5px]">
                      {e.fullName}
                    </h1>
                  </div>
                </div>
                <CloseIcon />
              </div>
            );
          })}
        </main>
      </nav>
    </div>
  );
};

export default MySearch;
