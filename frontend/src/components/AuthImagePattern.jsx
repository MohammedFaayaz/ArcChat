import { motion } from "framer-motion";
import { MessageCircle, Users, ShieldCheck } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0d1117] text-white relative overflow-hidden p-10">
      {/* Background blur circles */}
      <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full top-10 left-10 blur-3xl" />
      <div className="absolute w-60 h-60 bg-pink-500/10 rounded-full bottom-20 right-10 blur-2xl" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full flex flex-col justify-center gap-8"
      >
        <h2 className="text-4xl font-extrabold text-cyan-400 drop-shadow-md">
          Welcome back!
        </h2>
        <p className="text-lg text-gray-300 max-w-md leading-relaxed">
          Dive back into your conversations with <span className="text-cyan-400">real-time messaging</span>,
          secure chats, and your favorite groups — all in one place.
        </p>

        {/* Features */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <MessageCircle className="text-cyan-400" />
            <span className="text-sm text-gray-300">Instant messaging with zero delay</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="text-cyan-400" />
            <span className="text-sm text-gray-300">Private groups and communities</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-cyan-400" />
            <span className="text-sm text-gray-300">Secure, encrypted, and private</span>
          </div>
        </div>

        {/* Illustration / Hero image 
        
        <img
          src="/illustrations/chat-glow.png"
          alt="Chat Illustration"
          className="mt-8 max-w-xs drop-shadow-xl rounded-lg"
        />
        */}
      </motion.div>
    </div>
  );
};

export default AuthImagePattern;
