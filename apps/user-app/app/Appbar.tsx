
import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";

export const Appbar = () => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b shadow-sm bg-white sticky top-0 z-50">
      <div className=" font-bold text-blue-600 tracking-wide">
        PayTM
      </div>

      <Button onClick={() => router.push("/api/auth/signin")}>
        Login
      </Button>
    </header>
  );
};
