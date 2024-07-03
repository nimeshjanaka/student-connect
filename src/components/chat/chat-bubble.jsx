// ChatBubble.js
const ChatBubble = ({ text, isUser }) => {
    return (
        <div
            className={`p-4 rounded-lg mb-2 max-w-xs ${
                isUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'
            }`}
        >
            {text}
        </div>
    );
};

export default ChatBubble;
