import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";

function ContactList() {
  const { allContacts, getAllContacts, isUsersLoading, setSelectedUser, selectedUser } =
    useChatStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <div>
      {allContacts.length === 0 ? (
        <div className="text-center py-8 text-slate-400">No contacts available</div>
      ) : (
        allContacts.map((contact) => (
          <button
            key={contact._id}
            onClick={() => setSelectedUser(contact)}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              selectedUser?._id === contact._id
                ? "bg-cyan-500/20"
                : "hover:bg-slate-700/50"
            }`}
          >
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={contact.profilePic || "/avatar.png"} alt={contact.fullName} />
              </div>
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-slate-200 font-medium text-sm">{contact.fullName}</h3>
              <p className="text-slate-400 text-xs line-clamp-1">{contact.email}</p>
            </div>
          </button>
        ))
      )}
    </div>
  );
}
export default ContactList;