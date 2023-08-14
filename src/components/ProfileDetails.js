import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Map from "./Map";

const ProfileDetails = ({
  profilepicture,
  name,
  website,
  company,
  phone,
  address,
  username,
  email,
}) => {
  const [users, setUsers] = useState([]);
  const [isUserListVisible, setUserListVisible] = useState(false);

  const toggleUserList = () => {
    setUserListVisible(!isUserListVisible);
  };

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const data = await fetch("https://panorbit.in/api/users.json");
    const profileData = await data.json();
    setUsers(profileData.users);
  }

  return (
    <>
      <div className="main pl-20  flex-col w-full">
        <div className="profile-details flex justify-between items-center  h-20 border-b border-black">
          <h1 className="text-gray-600 text-2xl  font-bold">Profile</h1>
          <div
            className="user-details flex justify-between items-center cursor-pointer"
            onClick={toggleUserList}
          >
            <img
              src={profilepicture}
              alt={`Profile Pic of ${name}`}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl text-gray-500 pl-2">{name}</span>
          </div>
        </div>
        <div className="contact-details flex  pt-20">
          <div className="contact-info flex flex-col">
            <div className="flex profile-details items-center justify-center flex-col border-b border-black">
              <img
                src={profilepicture}
                alt={`Profile Pic of ${name}`}
                className="w-52 h-52 rounded-full"
              />
              <h1 className="font-bold text-gray-600 text-2xl pt-4">{name}</h1>
              <div className="name py-2">
                <span className="text-gray-400 text-2xl">Username : </span>{" "}
                <span className="text-gray-600 text-2xl font-bold">
                  {username}
                </span>
              </div>
              <div className="Email py-2">
                <span className="text-gray-400 text-2xl">Email : </span>{" "}
                <span className="text-gray-600 text-2xl font-bold">
                  {email}
                </span>
              </div>
              <div className="phone py-2">
                <span className="text-gray-400 text-2xl">Phone : </span>{" "}
                <span className="text-gray-600 text-2xl font-bold">
                  {phone}
                </span>
              </div>
              <div className="website py-2">
                <span className="text-gray-400 text-2xl">Website : </span>{" "}
                <span className="text-gray-600 text-2xl font-bold">
                  {website}
                </span>
              </div>
            </div>
            <div className="company-details">
              <h1 className="text-gray-400 text-3xl  flex justify-center pt-10">
                Company
              </h1>
              <div className="website py-2">
                <span className="text-gray-400 text-2xl">Name : </span>{" "}
                <span className="text-gray-600 text-xl font-semibold">
                  {company?.name}
                </span>
              </div>
              <div className="website py-2">
                <span className="text-gray-400 text-2xl">Catchphrase : </span>{" "}
                <span className="text-gray-600 text-l font-semibold whitespace-normal">
                  {company?.catchPhrase}
                </span>
              </div>
              <div className="website py-2">
                <span className="text-gray-400 text-2xl">Bs : </span>{" "}
                <span className="text-gray-600 text-xl font-semibold">
                  {company?.bs}
                </span>
              </div>
            </div>
          </div>
          <div className="address-details-top border-l border-black w-60%">
            <div className="address-details pl-20">
              <h1 className="text-gray-400 text-2xl font-bold">Address : </h1>
              <div className="website py-2">
                <span className="text-gray-400 text-2xl">Street : </span>{" "}
                <span className="text-gray-600 text-2xl font-bold">
                  {address?.street}
                </span>
              </div>
              <div className="website py-2">
                <span className="text-gray-400 text-2xl">Suite : </span>{" "}
                <span className="text-gray-600 text-2xl font-bold">
                  {address?.suite}
                </span>
              </div>
              <div className="website py-2">
                <span className="text-gray-400 text-2xl">City : </span>{" "}
                <span className="text-gray-600 text-2xl font-bold">
                  {address?.city}
                </span>
              </div>
              <div className="website py-2">
                <span className="text-gray-400 text-2xl">ZipCode : </span>{" "}
                <span className="text-gray-600 text-2xl font-bold">
                  {address?.zipcode}
                </span>
              </div>
            </div>
            <div className="map-cont">
              <Map
                className="map"
                lat={address?.geo?.lat}
                lng={address?.geo?.lng}
              />
            </div>
          </div>
        </div>
      </div>
      {isUserListVisible && (
        <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto sign-out">
          <ul className="space-y-4">
            {users.map((user, index) => (
              <Link to={"/profile/" + user.id} key={user.id}>
                <li className="flex items-center py-2">
                  <img
                    src={user.profilepicture}
                    alt={`${user.name}'s profile`}
                    className="w-16 h-16 rounded-full mr-2"
                  />
                  <p className="text-gray-600 text-l font-semibold">
                    {user.name}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
          <Link to="/">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold mt-4 mx-auto block py-2 px-4 rounded-lg">
              Sign Out
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ProfileDetails;
