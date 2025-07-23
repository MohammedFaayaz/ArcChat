import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import { motion } from "framer-motion";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="relative h-screen bg-gradient-to-br from-[#0d0d15] via-[#1a1a27] to-[#101018] text-gray-200 font-sans overflow-hidden">
      
      {/* Subtle animated pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#00bcd455_1px,transparent_1px)] [background-size:18px_18px] animate-pulse opacity-5" />
      </div>

      {/* Chat container */}
      <div className="flex items-center justify-center pt-16 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group w-full max-w-7xl h-[calc(100vh-6rem)] rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_60px_#00bcd420] overflow-hidden"
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 z-0 rounded-3xl pointer-events-none before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-[#00bcd4]/20 before:to-[#3f51b5]/10 before:blur-2xl before:opacity-0 group-hover:before:opacity-50 transition-opacity duration-700" />

          {/* Chat layout */}
          <motion.div
            className="flex h-full z-10 relative"
            initial={{ scale: 0.97 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sidebar />
            {selectedUser ? <ChatContainer /> : <NoChatSelected />}
          </motion.div>

          {/* Border + hover glow */}
          <div className="absolute -inset-1 rounded-3xl border border-transparent group-hover:border-cyan-500/50 transition-all duration-500 group-hover:shadow-[0_0_50px_#00bcd4]/40" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
