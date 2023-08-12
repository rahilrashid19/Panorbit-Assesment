const ProfileSideBar = () => {
  return (
    <>
      <div className="flex sideBar h-full w-80 bg-blue-500 p-4 rounded-3xl justify-center flex-col ">
        <h1 className="text-white text-xl mb-2">Profile</h1>
        <hr className="my-2 border-gray-300" />
        <h1 className="text-white text-xl mb-2">Posts</h1>
        <hr className="my-2 border-gray-300" />
        <h1 className="text-white text-xl mb-2">Gallery</h1>
        <hr className="my-2 border-gray-300" />
        <h1 className="text-white text-xl mb-2">ToDo</h1>
      </div>
    </>
  );
};

export default ProfileSideBar;
