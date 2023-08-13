import React, { useState } from "react";

const ChatWindow = ({ user, isOpen, onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { sender: "You", text: message }]);
      setMessage("");
    }
  };

  return (
    <div
      className={`fixed chat-window bottom-0 right-[calc(20%+16px+100px)] w-[calc(40%-100px)] h-2/4 max-h-[60%] bg-white shadow-md transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-2 bg-blue-500 text-white border-b border-gray-300 rounded-t-md">
        {user.name}
      </div>
      <div className="h-[calc(100%-75px)] overflow-y-scroll p-2 pr-6">
        {/* Display messages */}
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{msg.sender}: </strong>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex border-t border-gray-300 rounded-b-md">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={handleMessageChange}
          className="flex-grow border p-1"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </div>
      <button onClick={onClose} className="absolute top-0 right-0 p-2">
        Close
      </button>
    </div>
  );
};

export default ChatWindow;
