import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";

function ChatsList() {
  const { chats, getMyChatPartners, isUsersLoading, setSelectedUser, selectedUser } =
    useChatStore();

  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <div>
      {chats.length === 0 ? (
        <NoChatsFound />
      ) : (
        chats.map((chat) => (
          <button
            key={chat._id}
            onClick={() => setSelectedUser(chat)}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              selectedUser?._id === chat._id
                ? "bg-cyan-500/20"
                : "hover:bg-slate-700/50"
            }`}
          >
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img src={chat.profilePic || "/avatar.png"} alt={chat.fullName} />
              </div>
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-slate-200 font-medium text-sm">{chat.fullName}</h3>
              <p className="text-slate-400 text-xs line-clamp-1">{chat.email}</p>
            </div>
          </button>
        ))
      )}
    </div>
  );
}
export default ChatsList;