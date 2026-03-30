"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import authBg from "@/assets/images/auth-bg.png";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white text-black">
      {/* LEFT IMAGE */}
      <div className="relative hidden lg:block w-[60%]">
        <Image
          src={authBg}
          alt="bg"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex-1 flex items-center justify-center bg-white lg:-ml-24">
        {/* 🔥 EXACT CURVE */}
        <div className="absolute left-[-170px] top-0 h-full w-[220px] hidden lg:block">
          <svg
            viewBox="0 0 200 800"
            preserveAspectRatio="none"
            className="h-full w-full fill-white"
          >
            <path
              d="
                M200,-60
                C80,60 60,180 90,300
                C900,50 40,160 80,230
                C140,440 160,480 80,800
                c190,80 20,160 80,300
              "
            />
          </svg>
        </div>

        {/* CONTENT */}
        <div className="w-full max-w-md px-10 z-10">
          {/* HEADER */}
          <div className="flex justify-between mb-24">
            <div>
              <h1
                className="text-[3.2rem] font-bold tracking-[0.2em] leading-none"
                style={{ fontFamily: "Times New Roman" }}
              >
                RACCOON
              </h1>
              <p className="text-[0.6rem] tracking-[1.4em] mt-1 ml-1 font-bold">
                STUDIO
              </p>
            </div>

            <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-200 text-xs font-bold">
              EN <ChevronDown size={14} />
            </button>
          </div>

          {/* DYNAMIC CONTENT */}
          {children}
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-6 text-[10px] text-gray-400 font-bold tracking-widest">
          © 2026 RACCOON STUDIO
        </div>
      </div>
    </div>
  );
}
