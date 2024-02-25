import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { getUsersId } from './search';

const Users = () => {
  const {id} = useParams()
  // console.log(id);
  
  const dataUserId = useSelector((state) => state.searchUsers.dataUserId);
  const dispatch = useDispatch()
  // console.log(dataUserId);

   useEffect(() => {
    dispatch(getUsersId(id))
   },[id])
  

  return (  
    <div>

      <h1>{dataUserId.userName}</h1>
    </div>
  )
}

export default Users

