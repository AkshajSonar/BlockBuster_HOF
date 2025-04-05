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

    if (!ethers.utils.isAddress(formData.wallet)) {
      alert("Invalid Ethereum wallet address.");
      return;
    }

    if (role === "issuer") navigate("/issuer");
    else if (role === "user") navigate("/user");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5e5e5] px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-[#14213d]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#14213d]">Login</h2>

        <div className="flex justify-around mb-6">
          <button
            onClick={() => setRole("issuer")}
            className={`px-4 py-2 rounded-lg font-semibold transition border ${
              role === "issuer"
                ? "bg-[#fca311] text-black border-[#fca311]"
                : "bg-[#e5e5e5] text-[#14213d] border-[#14213d]"
            }`}
          >
            Certificate Issuer
          </button>
          <button
            onClick={() => setRole("user")}
            className={`px-4 py-2 rounded-lg font-semibold transition border ${
              role === "user"
                ? "bg-[#fca311] text-black border-[#fca311]"
                : "bg-[#e5e5e5] text-[#14213d] border-[#14213d]"
            }`}
          >
            User
          </button>
        </div>

        {role && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 border border-[#14213d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311]"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-[#14213d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311]"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="wallet"
              placeholder="Wallet Address"
              className="w-full px-4 py-2 border border-[#14213d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311]"
              value={formData.wallet}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#000000] text-white py-2 rounded-lg hover:bg-[#14213d] transition font-semibold"
            >
              Login as {role === "issuer" ? "Issuer" : "User"}
            </button>
          </form>
        )}

        <div className="mt-6 space-y-2 text-sm text-center text-[#14213d]">
          <p>
            New here?{' '}
            <span
              className="text-[#fca311] font-semibold cursor-pointer hover:underline"
              onClick={() => navigate('/register')}
            >
              Register Now
            </span>
          </p>
          <p>
            Forgot Password?{' '}
            <span
              className="text-[#fca311] font-semibold cursor-pointer hover:underline"
              onClick={() => navigate('/forgot-password')}
            >
              Recover Account
            </span>
          </p>
          <p>
            or{' '}
            <span
              className="text-[#fca311] font-semibold cursor-pointer hover:underline"
              onClick={() => navigate('/')}
            >
              Back to Home
            </span>
          </p>
          <p>
            <span className="text-gray-500">
              Test Wallet Address:{' '}
              <span className="text-[#14213d] font-mono">0x0000000000000000000000000000000000000000</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
