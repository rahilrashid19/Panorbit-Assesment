import React, { useState } from "react";
import ChatWindow from "./ChatWindow";

const Chat = ({ profileData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const openChatWindow = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const closeChatWindow = () => {
    setSelectedUser(null);
    setIsOpen(false);
  };

  return (
    <div className="flex">
      <div className="w-1/4 relative">
        <div className="fixed chat-window bottom-0 right-0 m-4 w-15%">
          <div>
            <button
              className="w-full text-left bg-blue-500 text-white px-4 py-2 rounded-t-md"
              onClick={toggleChatbox}
            >
              Chat
            </button>
            {isOpen && (
              <ul className="mt-2 max-h-60vh overflow-y-scroll">
                {profileData?.map((user) => (
                  <li
                    key={user.id}
                    className="py-2 cursor-pointer flex items-center pl-4 pr-2"
                    onClick={() => openChatWindow(user)}
                  >
                    <span
                      className={`${
                        user.online ? "text-green-500" : "text-gray-500"
                      } pr-2`}
                    >
                      {user.name}
                    </span>
                    {user.online ? (
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    ) : (
                      <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {selectedUser && (
        <ChatWindow
          user={selectedUser}
          isOpen={isOpen}
          onClose={closeChatWindow}
        />
      )}
    </div>
  );
};

export default Chat;
