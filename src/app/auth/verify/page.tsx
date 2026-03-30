"use client";

import { useEffect, useState } from "react";
import AuthLayout from "@/components/auth/AuthLayout";

export default function VerifyPage() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResend = () => {
    if (canResend) {
      // Logic for resending email goes here
      setTimeLeft(60);
      setCanResend(false);
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-10 text-center">
        {/* MESSAGE */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold italic" style={{ fontFamily: "Times New Roman" }}>
            Check your Inbox
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            We’ve sent a magic link to your email, please click the link to login.
          </p>
        </div>

        {/* RESEND BUTTON */}
        <div className="space-y-6 pt-4">
          <button
            onClick={handleResend}
            disabled={!canResend}
            className={`w-full h-[75px] rounded-[26px] border border-black text-[22px] italic transition-all duration-300 ${
              canResend 
                ? "opacity-100 cursor-pointer hover:bg-black hover:text-white" 
                : "opacity-50 cursor-not-allowed"
            }`}
            style={{
              background: "linear-gradient(180deg,#FBE79B 0%,#FDF7E1 100%)",
              fontFamily: "Times New Roman",
            }}
          >
            {canResend ? "Resend Email" : `Resend in ${timeLeft}s`}
          </button>

          {!canResend && (
             <div className="flex justify-center items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-gray-400">WAITING...</span>
             </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}
