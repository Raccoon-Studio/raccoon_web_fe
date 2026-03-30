"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleMagicLink = () => {
    // Navigate to verify page
    router.push("/auth/verify");
  };

  return (
    <AuthLayout>
      {/* FORM */}
      <div className="space-y-10">
        {/* EMAIL */}
        <div>
          <label className="text-xs font-bold ml-2">EMAIL</label>
          <input
            type="email"
            className="w-full h-[60px] mt-2 rounded-[22px] border border-gray-300 px-6 text-lg outline-none focus:border-gray-500 text-black"
          />
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-gray-300" />
          <span className="text-xs font-bold tracking-widest">OR</span>
          <div className="flex-1 border-t border-gray-300" />
        </div>

        {/* GOOGLE BUTTON */}
        <button
          onClick={() => router.push("/auth/verify")}
          className="w-full h-[75px] rounded-[26px] font-bold text-[15px]"
          style={{
            background:
              "linear-gradient(90deg,#F3F0E3 0%,#D8D9DB 45%,#BFC1C5 100%)",
          }}
        >
          LOGIN WITH GOOGLE
        </button>

        {/* MAGIC LINK */}
        <button
          onClick={handleMagicLink}
          className="w-full h-[75px] rounded-[26px] border border-black text-[22px] italic"
          style={{
            background:
              "linear-gradient(180deg,#FBE79B 0%,#FDF7E1 100%)",
            fontFamily: "Times New Roman",
          }}
        >
          Send Magic Link
        </button>
      </div>
    </AuthLayout>
  );
}