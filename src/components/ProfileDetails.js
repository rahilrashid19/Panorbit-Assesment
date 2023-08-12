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
  return (
    <>
      <div className="main pl-20  flex-col w-full">
        <div className="profile-details flex justify-between items-center  h-20 border-b border-black">
          <h1 className="text-gray-600 text-2xl  font-bold">Profile</h1>
          <div className="user-details flex justify-between items-center">
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
          <div className="address-details border-l border-black">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
