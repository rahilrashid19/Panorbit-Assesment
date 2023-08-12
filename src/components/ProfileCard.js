import { useEffect, useState } from "react";
import ProfileDetails from "./ProfileDetails";
import ProfileSideBar from "./ProfileSideBar";

const ProfileCard = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    getProfileDetails();
  }, []);

  async function getProfileDetails() {
    const data = await fetch("https://panorbit.in/api/users.json");
    const profileData = await data.json();
    setProfileData(profileData.users);
  }

  return (
    <>
      {/* {profileData?.map((dt) => ( */}
      <div className="flex h-screen p-20">
        <ProfileSideBar />
        <ProfileDetails {...profileData[0]} />
      </div>
      {/* ))} */}
    </>
  );
};

export default ProfileCard;
