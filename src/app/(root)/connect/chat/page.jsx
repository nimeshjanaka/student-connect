import ChatList from "../../../../components/chat/chat-list";
import ChatWindow from "../../../../components/chat/chat-window";
const chat = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className="bg-slate-200">
          <ChatList />
        </div>
        <div >
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default chat;
