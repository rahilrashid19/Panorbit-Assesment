import React from "react";
import ReactDOM from "react-dom/client";
import HomeCardComponent from "./components/HomeCard";
import ProfileCard from "./components/ProfileCard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routes} />);
