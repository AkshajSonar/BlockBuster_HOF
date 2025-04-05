import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ethers } from "ethers";

export default function LoginPage() {
  const [role, setRole] = useState(""); // "issuer" or "user"
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    wallet: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}:`, formData);

    // if (!ethers.utils.isAddress(formData.wallet)) {
    //   alert("Invalid Ethereum wallet address.");
    //   return;
    // }

    if (role === "issuer") navigate("/issuer");
    else if (role === "user") navigate("/user");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14213d] to-[#000000] flex items-center justify-center px-4 py-10 font-sans">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-md border border-[#fca311] transition-all">
        <h2 className="text-4xl font-bold text-center text-[#14213d] mb-8">🚀 Welcome Back</h2>

        {/* Role Selector */}
        <div className="flex justify-between mb-6">
          {["issuer", "user"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`w-[48%] py-2 rounded-xl font-semibold border transition-all duration-200 ${
                role === r
                  ? "bg-[#fca311] text-white border-[#fca311] shadow-md scale-105"
                  : "bg-white text-[#14213d] border-[#14213d] hover:bg-[#fca311]/20"
              }`}
            >
              {r === "issuer" ? "Certificate Issuer" : "User"}
            </button>
          ))}
        </div>

        {/* Form */}
        {role && (
          <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-[#14213d] focus:ring-2 focus:ring-[#fca311] focus:outline-none transition"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-[#14213d] focus:ring-2 focus:ring-[#fca311] focus:outline-none transition"
            />
            <input
              type="text"
              name="wallet"
              placeholder="Ethereum Wallet Address"
              value={formData.wallet}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-[#14213d] focus:ring-2 focus:ring-[#fca311] focus:outline-none transition"
            />
            <button
              type="submit"
              className="w-full bg-[#14213d] hover:bg-[#000000] text-white py-2 rounded-xl font-semibold tracking-wide transition-all"
            >
              🔐 Login as {role === "issuer" ? "Issuer" : "User"}
            </button>
          </form>
        )}

        {/* Footer Links */}
        <div className="mt-6 text-center text-sm text-[#14213d] space-y-2">
     
        
        
        </div>
      </div>
    </div>
  );
}