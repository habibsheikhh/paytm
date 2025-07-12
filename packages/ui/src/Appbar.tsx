"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";

export const Appbar = () => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b shadow-md bg-white sticky top-0 z-50">
  <div className="text-4xl">
    Paytm
  </div>

  <Button
    onClick={() => router.push("/api/auth/signin")}
  >Login
  </Button>
</header>

  );
};
