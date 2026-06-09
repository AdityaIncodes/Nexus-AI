"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const login = async () => {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={login}
        className="bg-black text-white px-5 py-3 rounded-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
}