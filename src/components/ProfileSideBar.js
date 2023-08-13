import { Link } from "react-router-dom";
const ProfileSideBar = () => {
  return (
    <>
      <div className="flex sideBar h-full w-80 bg-blue-500 p-4 rounded-3xl justify-center flex-col ">
        <Link to="/">
          <h1 className="text-white text-xl mb-2 cursor-pointer">Profile</h1>
        </Link>
        <hr className="my-2 border-gray-300" />
        <Link to="/post">
          <h1 className="text-white text-xl mb-2 cursor-pointer">Posts</h1>
        </Link>
        <hr className="my-2 border-gray-300" />
        <Link to="/gallery">
          <h1 className="text-white text-xl mb-2 cursor-pointer">Gallery</h1>
        </Link>
        <hr className="my-2 border-gray-300" />
        <Link to="/todo">
          {" "}
          <h1 className="text-white text-xl mb-2 cursor-pointer">ToDo</h1>
        </Link>
      </div>
    </>
  );
};

export default ProfileSideBar;
