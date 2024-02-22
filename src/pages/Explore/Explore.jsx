import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExplore } from "../../api/ExploreApi/ExploreApi";
import post from "../../assets/icons/Carousel.svg";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Explore = () => {
  const data = useSelector((state) => state.explore.data);
  const dispatch = useDispatch();
  const imgUrl = import.meta.env.VITE_APP_FILES_URL;
  useEffect(() => {
    dispatch(getExplore());
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="grid grid-cols-3 gap-[5px] mt-[30px] ">
        {data?.map((el, i) => {
          return (
            <div
              key={i}
              onClick={handleOpen}
              className={
                i + 1 == 3 ||
                i + 1 == 6 ||
                i + 1 == 13 ||
                i + 1 == 16 ||
                i + 1 == 21 ||
                i + 1 == 28
                  ? " w-[400px] row-span-2 rounded-[12px] hover:opacity-50 duration-100 ease-in cursor-pointer text-center"
                  : "h-[400px] w-[400px] rounded-[12px] hover:opacity-50 duration-100 ease-in cursor-pointer text-center"
              }
            >
              <div>
                <img
                  className={
                    i + 1 == 3 ||
                    i + 1 == 6 ||
                    i + 1 == 13 ||
                    i + 1 == 16 ||
                    i + 1 == 21 ||
                    i + 1 == 28
                      ? " w-[400px] h-[110.5vh] text-center object-cover"
                      : "h-[400px] w-[400px] object-cover"
                  }
                  width={500}
                  src={`${imgUrl}/${el.images}`}
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Explore;
