import { useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { SendIcon, ImageIcon } from "lucide-react";

function MessageInput() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const { selectedUser } = useChatStore();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !image) return;

    try {
      // TODO: Implement sendMessage function in useChatStore
      // await sendMessage({ text, image });
      setText("");
      setImage(null);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 border-t border-slate-700/50 bg-slate-900/30">
      <form onSubmit={handleSendMessage} className="flex gap-3">
        <label className="cursor-pointer hover:text-cyan-400 transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <ImageIcon className="w-5 h-5 text-slate-400" />
        </label>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        />

        <button
          type="submit"
          disabled={!text.trim() && !image}
          className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
        >
          <SendIcon className="w-5 h-5 text-cyan-400" />
        </button>
      </form>

      {image && (
        <div className="mt-3 relative w-20 h-20">
          <img src={image} alt="Preview" className="w-full h-full object-cover rounded-lg" />
          <button
            onClick={() => setImage(null)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
export default MessageInput;
