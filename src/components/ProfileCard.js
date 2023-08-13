import { useEffect, useState } from "react";
import ProfileDetails from "./ProfileDetails";
import ProfileSideBar from "./ProfileSideBar";
import { useParams } from "react-router-dom";

const ProfileCard = () => {
  const [profileData, setProfileData] = useState([]);

  let { id } = useParams();
  id = parseInt(id);

  useEffect(() => {
    getProfileDetails();
  }, []);

  async function getProfileDetails() {
    const data = await fetch("https://panorbit.in/api/users.json");
    const profileData = await data.json();
    setProfileData(profileData.users);
  }

  const nweData = profileData.filter((user) => {
    return user.id === id;
  });

  return (
    <>
      <div className="flex h-screen p-20">
        <ProfileSideBar />
        <ProfileDetails {...nweData[0]} />
      </div>
    </>
  );
};

export default ProfileCard;
