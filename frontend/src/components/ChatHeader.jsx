import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { motion } from "framer-motion";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  if (!selectedUser) return null;

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 backdrop-blur-md bg-gradient-to-r from-[#1e1e2e]/60 to-[#2a2a3b]/60 border-b border-[#2f2f40]/50 shadow-md rounded-t-2xl relative z-10"
    >
      <div className="flex items-center justify-between">
        {/* Left Side: Avatar + User Info */}
        <div className="flex items-center gap-4">
          <div className="avatar relative group">
            <div className="size-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-cyan-400 transition-all duration-300 shadow-md">
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
                className="object-cover"
              />
            </div>
            {/* Online/Offline Indicator */}
            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#1e1e2e] ${
                isOnline ? "bg-green-400" : "bg-gray-500"
              }`}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{selectedUser.fullName}</h3>
            <p className="text-sm text-gray-400">{isOnline ? "Online" : "Offline"}</p>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedUser(null)}
          className="p-2 rounded-full bg-[#2a2a3b]/60 hover:bg-red-500/80 transition-all text-white"
        >
          <X size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ChatHeader;
