import React from "react"; 
import Login from "./pages/Login/Login"; 
import Home from "./pages/Home/Home"; 
import Explore from "./pages/Explore/Explore"; 
import Reels from "./pages/Reels/Reels"; 
import Message from "./pages/Message/Message"; 
import Natification from "./pages/natification/Natification";
import Profile from "./pages/Profile/Profile"; 
import Settings from "./pages/Settings/Settings";
import editProfile from "./pages/editProfile/editProfile";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import { Layout } from "./Layout/Layout"; 
import Registration from "./pages/Registration/Registration"; 
import Security from "./pages/Security/Security";
import Auth from "./components/Auth/Auth";

import Users from "./pages/search/Users";

import AuthCheck from "./utils/AuthChek";
import ProtectedRout from "./utils/ProtectedTout";

 
export const App = () => { 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthCheck> <Login /> </AuthCheck>,
    },
    {
      path: "/basic", 
      element: <ProtectedRout> <Layout /> </ProtectedRout>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "reels",
          element: <Reels />,
        },
        {
          path: "message/*",
          element: <Message />,
        },
        {
          path: "users/:id",
          element: <Users />,
        },
        {
          path: "notifications",
          element: <Natification />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "profile/account/editProfile",
          element: <editProfile />,
        },
        {
          path: "profile/account/settings",
          element: <Settings />,
        },
        {
          path:"security",
          element: <Security/>
        }
      ],
    },
    {
      path: "/registration",
      element: <Registration />,
    },
  ]); 
 
  return <RouterProvider router={router} />; 
};
