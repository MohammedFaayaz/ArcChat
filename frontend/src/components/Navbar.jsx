import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0f172a]/70 via-[#1e293b]/60 to-[#0f172a]/70 backdrop-blur-lg shadow-lg border-b border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16">
        <div className="flex items-center justify-between h-full text-cyan-300">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group hover:scale-105 transition-all"
          >
            <motion.div
              className="p-2 rounded-xl bg-blue-500/10 backdrop-blur-lg shadow-md"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <MessageSquare className="w-5 h-5 text-blue-400" />
            </motion.div>
            <h1 className="text-2xl font-bold tracking-wide group-hover:text-blue-400 transition-colors">
              ArcChat
            </h1>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link
              to="/settings"
              className="px-3 py-2 rounded-md transition-all hover:text-blue-400 hover:bg-blue-500/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Settings</span>
              </div>
            </Link>

            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="px-3 py-2 rounded-md transition-all hover:text-blue-400 hover:bg-blue-500/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">Profile</span>
                  </div>
                </Link>

                <button
                  onClick={logout}
                  className="px-3 py-2 rounded-md transition-all hover:text-red-400 hover:bg-red-500/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:inline">Logout</span>
                  </div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
