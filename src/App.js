import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Profile/Profile";
import ComingSoon from "./Profile/ComingSoon";
import { useDispatch } from "react-redux";
import { getUsers } from "./Redux/UserSlice";
import UserList from "./Home/UserList";
import Home from "./Home/Home";
import Details from "./Profile/Details";

function App() {
  const dispatch = useDispatch();
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Home />,
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <Profile />,
      children: [
        { path: "/profile/gallery", element: <ComingSoon /> },
        { path: "/profile/posts", element: <ComingSoon /> },
        { path: "/profile/todo", element: <ComingSoon /> },
        { path: "/profile/user", element: <Details/> },
      ],
    },
  ]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <RouterProvider router={myRouter} />;
}

export default App;
