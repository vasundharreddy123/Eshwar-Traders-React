import { useState } from "react";
import logo from "../assets/images/Blessify.jpeg";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Your Company Logo"
            className="h-16 rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-3 w-full rounded mb-4 focus:outline-none focus:ring focus:ring-red-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 w-full rounded mb-4 focus:outline-none focus:ring focus:ring-red-500"
        />
        <button className="bg-red-500 text-white w-full py-3 rounded hover:bg-red-600 transition focus:outline-none focus:ring focus:ring-red-500">
          Login
        </button>
      </div>
    </div>
  );
}
