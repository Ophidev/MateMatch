import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { BsSend } from "react-icons/bs";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [targetUser, setTargetUser] = useState(null);
  const user = useSelector((appStore) => appStore.user);
  const userId = user?._id;

  // ✅ Fetch chat messages
  const fetchChatMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });

    const chatMessages = chat?.data?.messages.map((msg) => {
      const { senderId, text } = msg;
      return {
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        text,
      };
    });
    setMessages(chatMessages);

    // Set the target user (assuming backend sends info)
    if (chat?.data?.targetUser) {
      setTargetUser(chat.data.targetUser);
    } else if (chat?.data?.messages?.length > 0) {
      // Fallback: extract name from message if available
      const firstOtherMsg = chat.data.messages.find(
        (m) => m.senderId._id !== userId
      );
      if (firstOtherMsg) {
        setTargetUser({
          firstName: firstOtherMsg.senderId.firstName,
          lastName: firstOtherMsg.senderId.lastName,
        });
      }
    }
  };

  useEffect(() => {
    fetchChatMessages();
  }, []);

  // ✅ Socket connection
  useEffect(() => {
    if (!userId) return;

    const socket = createSocketConnection();

    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    socket.on("messageReceived", ({ firstName, lastName, text }) => {
      setMessages((messages) => [...messages, { firstName, lastName, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  // ✅ Send message
  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      targetUserId,
      text: newMessage,
    });

    setNewMessage("");
  };

  // ✅ UI
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-orange-200">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-orange-600">💬 MateMatch Chat</h1>
        <p className="text-sm opacity-70">
          Stay connected with your MateBuddy 💞
        </p>
      </div>

      {/* Chat Box */}
      <div className="w-full max-w-2xl h-[75vh] bg-base-100 rounded-2xl shadow-xl flex flex-col overflow-hidden border border-orange-200">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 bg-orange-500 text-white">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-white ring-offset-2">
                <img
                  src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${
                    targetUser?.firstName || "MateBuddy"
                  }`}
                  alt="Target User"
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                {targetUser?.firstName || "MateBuddy"}
              </h3>
            </div>
          </div>
          <button className="btn btn-xs btn-ghost text-white">⋮</button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-orange-50">
          {messages.map((msg, index) => {
            const isMe = msg.firstName === user.firstName;
            return (
              <div
                key={index}
                className={`chat ${isMe ? "chat-end" : "chat-start"}`}
              >
                <div className="chat-image avatar">
                  <div className="w-8 rounded-full">
                    <img
                      src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${
                        isMe ? user.firstName : msg.firstName
                      }`}
                      alt="avatar"
                    />
                  </div>
                </div>
                <div
                  className={`chat-bubble ${
                    isMe
                      ? "bg-orange-500 text-white"
                      : "bg-orange-200 text-orange-900"
                  }`}
                >
                  {msg.text}
                </div>
                <div className="chat-footer text-xs opacity-60">
                  {isMe ? "You" : msg.firstName}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Box */}
        <div className="p-3 bg-orange-100 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="input input-bordered w-full rounded-full focus:outline-none focus:ring focus:ring-orange-300"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="btn btn-circle bg-orange-500 hover:bg-orange-600 text-white"
            onClick={sendMessage}
          >
            <BsSend />
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-4 text-sm opacity-70">
        Made with 💝 by{" "}
        <span className="font-semibold text-orange-600">MateMatch</span>
      </p>
    </div>
  );
};

export default Chat;
