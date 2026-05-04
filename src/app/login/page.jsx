"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;

    try {
      const userData = {
        name: email.split("@")[0],
        email,
        image: "https://i.ibb.co.com/4pDNDk1/avatar.png",
      };

      localStorage.setItem("user", JSON.stringify(userData));

      toast.success("Login successful!");

      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } catch (error) {
      toast.error("Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input type="email" name="email" placeholder="Email" required className="input input-bordered w-full" />

            <input type="password" name="password" placeholder="Password" required className="input input-bordered w-full" />

            <button className="  cursor-pointer transition hover:scale-105 btn btn-primary w-full">
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-4"> Don't have an account?{" "}
            <Link href="/register" className="text-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}