"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const RegiSter = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    console.log({ name, email, image, password });

    toast.success("Registration successful!");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <form onSubmit={RegiSter} className="card-body bg-base-100 shadow-xl rounded-xl max-w-md w-full" >
        <h2 className="text-3xl font-bold text-center">Register</h2>

        <input name="name" placeholder="Name" className="input input-bordered w-full" required />
        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
        <input name="image" placeholder="Photo URL" className="input input-bordered w-full" required />
        <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />

        <button className=" cursor-pointer transition hover:scale-105 btn btn-primary w-full">Register</button>

        <button type="button" onClick={() => signIn("google", { callbackUrl: "/" })} className=" cursor-pointer transition hover:scale-105 btn btn-outline w-full flex items-center gap-2" >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
          Continue with Google
        </button>

        <p className="text-center"> Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}