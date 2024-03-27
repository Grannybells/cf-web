import { defaultSession } from "@/contexts/lib";
import useSession from "@/contexts/use-session";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoSignOut } from "react-icons/go";
import { navItems } from "@/contexts/constant";

export default function NavBar() {
  const { logout } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    logout(null, {
      optimisticData: defaultSession,
    });
    router.push("/");
  };

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <div className="hidden w-full h-full lg:flex flex-col lg:w-[18rem] items-center justify-between py-10 bg-white shadow-lg font-poppins">
      <div className="flex flex-col gap-5">
        <Link href={"/employee"}>
          <Image src="/cflogonew.png" alt="Logo" width={200} height={40} />
        </Link>
        <div className="flex flex-col gap-4">
          {navItems.map((navItems) => (
            <Link
              key={navItems.id}
              href={navItems.link}
              className={`flex flex-row items-center gap-2 text-base hover:border-l-[0.5rem] hover:border-[#5BBF21] hover:pl-2 ${
                isActive(navItems.link) &&
                "border-l-[0.5rem] border-[#5BBF21] pl-2 text-[#5BBF21] font-semibold"
              }`}
            >
              {isActive(navItems.link) ? (
                <div className="gap-2 flex flex-row items-center pl-2 text-[#5BBF21]">
                  {navItems.activeIcon}
                  {navItems.name}
                </div>
              ) : (
                <div className="gap-2 flex flex-row items-center text-blue-500">
                  {navItems.icon}
                  {navItems.name}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
      <button
        className="flex flex-row items-center justify-center gap-3 shadow-md text-base uppercase px-10 py-2 bg-[#5BBF21] hover:bg-[#55E800] text-white hover:text-gray-500 rounded-md font-semibold focus:outline-none focus:ring focus:ring-green-500"
        onClick={handleLogout}
      >
        <GoSignOut className="w-5 h-5" />
        Logout
      </button>
    </div>
  );
}
