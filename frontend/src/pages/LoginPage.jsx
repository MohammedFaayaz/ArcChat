import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen grid lg:grid-cols-2 bg-gradient-to-br from-[#0d0d15] via-[#1a1a27] to-[#101018] text-gray-200 font-sans">
      {/* Left Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center p-6 sm:p-12"
      >
        <div className="w-full max-w-md space-y-8 bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                <MessageSquare className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <h1 className="text-3xl font-bold tracking-wide text-cyan-300">
                Welcome Back
              </h1>
              <p className="text-sm text-gray-400">
                Sign in to your account
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-cyan-200 font-semibold">Email</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-cyan-500" />
                <input
                  type="email"
                  className="input w-full pl-10 bg-transparent border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-200"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-cyan-200 font-semibold">Password</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-cyan-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="input w-full pl-10 pr-10 bg-transparent border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-200"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-cyan-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full bg-cyan-500 text-black hover:bg-cyan-400 transition-all"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-cyan-400 hover:underline">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Pattern */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block"
      >
        <AuthImagePattern
          title={"Welcome back!"}
          subtitle={
            "Sign in to continue your conversations and catch up with your messages."
          }
        />
      </motion.div>
    </div>
  );
};

export default LoginPage;
