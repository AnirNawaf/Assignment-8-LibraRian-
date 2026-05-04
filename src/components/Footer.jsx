"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook, faXTwitter, faGithub, faLinkedin, faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import toast from "react-hot-toast";

export default function Footer() {
  return (
    <footer className="bg-[#252525] text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <h3 className="text-white font-bold mb-5">Stay connected!</h3>
          <p className="text-sm leading-6 mb-5">
            Our emails keep you up-to-date on our projects, initiatives and the
            impact we have. Sign up here:
          </p>

          <form className="space-y-2">

            <input type="email" placeholder="Email address" required pattern=".+@.+\..+" title="Please enter a valid email with @" className="w-full bg-black text-white px-4 py-2 rounded-lg outline-none" />

            <input type="password" placeholder="Enter pasword" className="w-full bg-black text-white px-4 py-2 rounded-lg outline-none" />


            <button
              onClick={() => {
                const existingUser = JSON.parse(localStorage.getItem("user"));

                if (existingUser) {
                  toast.error("Already logged in");
                  return;
                }

                const emailInput = document.querySelector('input[type="email"]');
                const email = emailInput?.value;

                if (!email) {
                  toast.error("Enter email first");
                  return;
                }

                const userData = {
                  name: email.split("@")[0],
                  email,
                  image: "https://i.ibb.co.com/4pDNDk1/avatar.png",
                };

                localStorage.setItem("user", JSON.stringify(userData));

                toast.success("Login successful!");

                setTimeout(() => {
                  window.location.reload();
                }, 8000);
              }}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl"
            >
              SUBSCRIBE
            </button>

            <label className="flex items-start gap-2 text-xs mt-2">
              <input type="checkbox" className="mt-1" />
              <span>I have read and agree to the terms & conditions</span>
            </label>
          </form>
        </div>

        <div>
          <h3 className="text-white font-bold mb-5">Contact details</h3>
          <p className="text-sm leading-6"> LibraRian <br /> Online Book Borrowing & reding Platform <br /> Rangpur, Dhaka, Bangladesh <br /> <a className="hover:text-white hover:text-xl" href="mailto:anirbishal08@gmail.com"> anirbishal08@gmail.com</a>

          </p>

        </div>

        <div>
          <h3 className="text-white font-bold mb-5">Links</h3>
          <ul className="text-sm space-y-2">
            <li> <a className="hover:text-white hover:text-xl" href="mailto:anirbishal08@gmail.com"> Contact us</a></li>
            <li><a className="hover:text-white hover:text-xl " href="#">Donate</a></li>
            <li><a className="hover:text-white  hover:text-xl" href="#">Charity Notices</a></li>
            <li><a className="hover:text-white hover:text-xl" href="#">Permissions</a></li>
            <li><a className="hover:text-white  hover:text-xl" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white hover:text-xl" href="#">Cookie Policy</a></li>
            <li><a className="hover:text-white hover:text-xl" href="#">Terms of Service</a></li>

          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-5">Follow us</h3>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/share/1UzMdd6J2z/" className=" cursor-pointer transition hover:scale-120 w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a href="https://github.com/AnirNawaf" className=" cursor-pointer transition hover:scale-120 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.linkedin.com/in/md-anir-nawaf-bishal-34aa7a239/" className=" cursor-pointer transition hover:scale-120 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="mailto:anirbishal08@gmail.com" className=" cursor-pointer transition hover:scale-120 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#" className=" cursor-pointer transition hover:scale-120 w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}