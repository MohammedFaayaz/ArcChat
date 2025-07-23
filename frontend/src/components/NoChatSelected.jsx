import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1f1f2e] via-[#12121a] to-[#101015] p-6 sm:p-10">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 px-8 py-12 text-center space-y-6 transition-all duration-300">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-pulse">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300">
          Welcome to ArcChat!
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Select a conversation from the sidebar to start chatting.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
