import ChatList from "../../../../components/chat/chat-list";
import ChatWindow from "../../../../components/chat/chat-winodw";
const chat = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-2 ">
        <div className="bg-slate-200 rounded-lg">
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
