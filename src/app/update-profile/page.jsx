"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      router.push("/login");
    } 
    else {
      setUser(savedUser);
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;

    const updatedUser = {
      name,
      email,
      image,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    toast.success("Profile updated successfully!");
    router.push("/my-profile");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card bg-base-100 shadow-xl w-full max-w-md">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4"> Update Profile </h2>

          <form onSubmit={handleUpdate} className="space-y-4">
            <input type="text" name="name" defaultValue={user.name || ""} placeholder="Name" className="input input-bordered w-full" required />

            <input type="email" name="email" defaultValue={user.email} placeholder="Email"  className="input input-bordered w-full" required />

            <input type="text" name="image" defaultValue={user.image || ""} placeholder="Image URL" className="input input-bordered w-full" />

            <button className=" cursor-pointer transition hover:scale-105 btn btn-primary w-full"> Update Profile </button>
          </form>
        </div>
      </div>
    </div>
  );
}