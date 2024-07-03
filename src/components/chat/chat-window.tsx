"use client";
import { useState } from "react";
import ChatBubble from "./chat-bubble";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!", isUser: false },
    { text: "Hi there!", isUser: true },
    { text: "How can I help you today?", isUser: false },
  ]);

  return (
    <div>
      <div className=" p-10">
        <div className="flex border-2 p-6 ">
          <img
            className="h-12 w-12  rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />

          <p className="text-sm font-semibold leading-6 text-gray-900 mt-2 ml-4">
            "Lindsay Walton"
          </p>
        </div>
        <div className="w-full h-full  flex flex-col p-10 ">
            {messages.map((message, index) => (
          <ChatBubble key={index} text={message.text} isUser={message.isUser} />
        ))}
        </div>
        


      </div>
    </div>
  );
};

export default ChatWindow;
