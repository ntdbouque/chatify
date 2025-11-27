import { useAuthStore } from "../store/useAuthStore";
import { LogOut } from "lucide-react";

function ProfileHeader() {
  const { authUser, logout } = useAuthStore();

  return (
    <div className="p-4 border-b border-slate-700/50">
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={authUser?.profilePic || "/avatar.png"} alt={authUser?.fullName} />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-slate-200 font-medium">{authUser?.fullName}</h3>
          <p className="text-slate-400 text-xs">{authUser?.email}</p>
        </div>
        <button
          onClick={logout}
          className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
          title="Logout"
        >
          <LogOut className="w-5 h-5 text-slate-400 hover:text-slate-200" />
        </button>
      </div>
    </div>
  );
}
export default ProfileHeader;