import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import AuthImagePattern from "../components/AuthImagePattern";
import { motion } from "framer-motion";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-[#0d0d15] via-[#1a1a27] to-[#101018] text-gray-200 font-sans">
      {/* Left - Form */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center p-6 sm:p-12"
      >
        <div className="w-full max-w-md space-y-8 bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                <MessageSquare className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <h1 className="text-3xl font-bold tracking-wide text-cyan-300">
                Create Account
              </h1>
              <p className="text-sm text-gray-400">
                Get started with your free account
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-cyan-200 font-semibold">Full Name</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-cyan-500" />
                <input
                  type="text"
                  className="input w-full pl-10 bg-transparent border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-200"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            {/* Email */}
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

            {/* Password */}
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

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary w-full bg-cyan-500 text-black hover:bg-cyan-400 transition-all"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-cyan-400 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right - Pattern */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block"
      >
        <AuthImagePattern
          title="Join our community"
          subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
        />
      </motion.div>
    </div>
  );
};

export default SignUpPage;
