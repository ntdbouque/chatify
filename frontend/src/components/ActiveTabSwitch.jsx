import { useChatStore } from "../store/useChatStore";
import { MessageCircleIcon, UsersIcon } from "lucide-react";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="flex gap-2 p-4 border-b border-slate-700/50">
      <button
        onClick={() => setActiveTab("chats")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors flex-1 justify-center ${
          activeTab === "chats"
            ? "bg-cyan-500/20 text-cyan-300"
            : "bg-slate-700/30 text-slate-400 hover:bg-slate-700/50"
        }`}
      >
        <MessageCircleIcon className="w-4 h-4" />
        <span className="text-sm font-medium">Chats</span>
      </button>
      <button
        onClick={() => setActiveTab("contacts")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors flex-1 justify-center ${
          activeTab === "contacts"
            ? "bg-cyan-500/20 text-cyan-300"
            : "bg-slate-700/30 text-slate-400 hover:bg-slate-700/50"
        }`}
      >
        <UsersIcon className="w-4 h-4" />
        <span className="text-sm font-medium">Contacts</span>
      </button>
    </div>
  );
}
export default ActiveTabSwitch;