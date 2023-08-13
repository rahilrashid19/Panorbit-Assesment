import React from "react";
import ReactDOM from "react-dom/client";
import HomeCardComponent from "./components/HomeCard";
import ProfileCard from "./components/ProfileCard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Gallery from "./components/Gallery";
import Todo from "./components/Todo";
import Post from "./components/Post";
import ProfileSideBar from "./components/ProfileSideBar";
const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeCardComponent />,
      },
      {
        path: "/profile",
        element: <ProfileCard />,
      },
      {
        path: "/profile/:id",
        element: <ProfileCard />,
      },

      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/post",
        element: <Post />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routes} />);
