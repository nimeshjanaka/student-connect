"use client";
import  useStore  from "../../store/useStore";
import ChatBubble from "./chat-bubble";
import TextInput from "./text-input";
import { useEffect, useState } from "react";

const ChatWindow = () => {
  const person = useStore(state => state.person);
  console.log("Chat Window",person)


  const [messages, setMessages] = useState([
    { text: "Hello!", isUser: false },
    { text: "Hi there!", isUser: true },
    { text: "How are you today?", isUser: false },
  ]);

  const handleInputSubmit = (value) => {
   
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: value, isUser: true },
    ]);
  };

  return (

      <div className="flex flex-col h-full">

          <div className="flex p-6">
            <img
              className="h-12 w-12  rounded-full "
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />

            <p className="text-sm font-semibold leading-6 text-gray-900 mt-2 ml-4">
              {person}
            </p>
          </div>
          <hr className="border-t border-gray-300 w-full ml-4" />
          <div className="flex flex-col h-[20px] flex-grow overflow-y-auto p-10">
            {messages.map((message, index) => (
              <ChatBubble
                key={index}
                text={message.text}
                isUser={message.isUser}
              />
            ))}
          </div>
          <TextInput onInputSubmit={handleInputSubmit} />

        </div>
         


  );
};

export default ChatWindow;
