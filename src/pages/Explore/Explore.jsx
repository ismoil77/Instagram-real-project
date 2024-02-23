import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getExplore,
  getPostById,
  postLike,
} from "../../api/ExploreApi/ExploreApi";
import post from "../../assets/icons/Carousel.svg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MapsUgcSharpIcon from "@mui/icons-material/MapsUgcSharp";
// import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const Explore = () => {
  const data = useSelector((state) => state.explore.data);
  const Byid = useSelector((state) => state.explore.ById);
  let comments = useSelector((store) => store.explore.Comments);

  const dispatch = useDispatch();

  const imgUrl = import.meta.env.VITE_APP_FILES_URL;

  useEffect(() => {
    dispatch(getExplore());
  }, [dispatch]);

  const [open, setOpen] = React.useState(false);
  const [idx, setIdx] = useState();

  const handleOpen = () => {
    setOpen(true);
    dispatch(getPostById(idx));
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="w-[85%] m-auto">
      <div className="grid grid-cols-3 gap-[5px] mt-[30px] ">
        {data.map((el, i) => {
          return (
            <div
              style={{ position: "relative" }}
              key={i}
              onClick={() => {
                handleOpen(), setIdx(el.postId);
                dispatch(getPostById(el.postId));
              }}
              className={
                i + 1 == 3 ||
                i + 1 == 6 ||
                i + 1 == 13 ||
                i + 1 == 16 ||
                i + 1 == 21 ||
                i + 1 == 28
                  ? " w-[350px] row-span-2 h-auto rounded-[1px] hover:opacity-50 duration-100 ease-in cursor-pointer text-center"
                  : "h-[350px] w-[350px] rounded-[1px] hover:opacity-50 duration-100 ease-in cursor-pointer text-center"
              }
            >
              <div className="w-[100%] flex flex-col items-center justify-center text-[#00000000] hover:text-[white]  h-[100%] hover:bg-[#0000006d] absolute ">
                <div className="flex gap-[60px] ">
                  <div className="flex items-center gap-[5px]">
                    <FavoriteIcon />
                    <h1 className="text-[20px] font-[700]">
                      {el.postLikeCount}
                    </h1>
                  </div>
                  <div className=" flex  items-center gap-[5px]">
                    <MapsUgcSharpIcon />
                    <h1 className="text-[20px] font-[700]">
                      {el.commentCount}
                    </h1>
                  </div>
                </div>
              </div>
              <img
                className={
                  i + 1 == 3 ||
                  i + 1 == 6 ||
                  i + 1 == 13 ||
                  i + 1 == 16 ||
                  i + 1 == 21 ||
                  i + 1 == 28
                    ? " w-[350px] h-[705px]  object-cover"
                    : "h-[350px] w-[350px] object-cover"
                }
                src={`${imgUrl}/${el?.images}`}
                alt=""
              />
              {el?.images?.length > 1 ? (
                <img
                  className="relative top-4 left-[360px]"
                  src={post}
                  alt=""
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex">
            <div className="w-[600px] h-[500px] border-solid border-[1px] border-gray-200 bg-black ">
              {Byid?.images?.map((el) => {
                return (
                  <img
                    className="h-[100%] w-[100%]  object-cover"
                    src={`${imgUrl}${el}`}
                    alt=""
                  />
                );
              })}
            </div>
            <div>
              <nav className="flex justify-between  h-[60px] w-[450px] border-solid border-[1px] border-gray-200 items-center px-[2%]">
                <div className="flex items-center gap-[5px]">
                  <h1 className="text-[20px] text-[#262626]">
                    {Byid?.title} <span>•</span>
                  </h1>
                  <h1 className="text-[#0095f6] text-[20px]">follow</h1>
                </div>
                <MoreHorizIcon />
              </nav>
              <div className="h-[300px] overflow-auto p-[3%]">
                {Byid?.comments?.map((el) => {
                  return <h1 className="w-[300px]">{el?.comment}</h1>;
                })}
              </div>

              <footer className="border-t-[1px] ">
                <div className="flex mt-[8px] justify-between items-center">
                  <div className="flex items-center pl-[16px] gap-[10px]">
                    {Byid?.postLike ? (
                      <FavoriteIcon
                        color="error"
                        onClick={() => dispatch(postLike(Byid?.postId))}
                      ></FavoriteIcon>
                    ) : (
                      <FavoriteBorderIcon
                        onClick={() => dispatch(postLike(Byid?.postId))}
                      ></FavoriteBorderIcon>
                    )}
                    <svg
                      aria-label="Комментировать"
                      class="x1lliihq x1n2onr6 x5n08af"
                      fill="currentColor"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Комментировать</title>
                      <path
                        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <svg
                      aria-label="Поделиться публикацией"
                      class="x1lliihq x1n2onr6 x5n08af"
                      fill="currentColor"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <title>Поделиться публикацией</title>
                      <line
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="22"
                        x2="9.218"
                        y1="3"
                        y2="10.083"
                      ></line>
                      <polygon
                        fill="none"
                        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></polygon>
                    </svg>
                  </div>
                  <div className="pr-[16px]">
                  <BookmarkBorderIcon
                    style={{
                      cursor: "pointer",
                      // color: isSaved ? "blue" : "black",
                    }}
                  />
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Explore;
