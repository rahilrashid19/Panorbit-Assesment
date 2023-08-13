import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeCardComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  async function getUserList() {
    const data = await fetch("https://panorbit.in/api/users.json");
    const userJson = await data.json();
    setUsers(userJson.users);
  }

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div className="custom-shape-divider-top-1691827994">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="max-w-3xl p-8 border rounded-3xl shadow-lg">
        <div className="header h-24 rounded-t-3xl flex justify-center items-center">
          <h2 className="font-sans text-lg font-bold text-gray-700 text-center mb-4">
            Select An Account
          </h2>
        </div>
        <div className="overflow-y-auto px-8 card-body">
          <ul>
            {users?.map((user) => (
              <React.Fragment key={user.id}>
                <Link
                  to={"/profile/" + user.id}
                  onClick={() => handleUserClick(user.id)}
                >
                  {" "}
                  <li className="flex items-center space-x-2 mb-2">
                    <img
                      src={user.profilepicture}
                      alt={`Profile Pic of ${user.name}`}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-xl text-gray-500 pl-2">
                      {user.name}
                    </span>
                  </li>
                </Link>
                <hr className="my-2 border-gray-300" />
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeCardComponent;
