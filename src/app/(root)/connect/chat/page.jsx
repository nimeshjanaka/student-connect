import ChatList from "../../../../components/chat/chat-list";
import ChatWindow from "../../../../components/chat/chat-window";
const chat = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="bg-slate-400 w-">
          <ChatList />
        </div>
        <div>
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default chat;
