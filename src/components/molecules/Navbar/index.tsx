import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-4">
      <Link to="/">
        <span className="font-poppins text-xl font-bold text-orange-600 hover:text-orange-700">
          KerjaYuk!
        </span>
      </Link>

      <div className="flex space-x-4 items-center hover:bg-blue-100 p-2 rounded-full">
        <Link to="/notification" className="relative">
          <span className="absolute top-0 right-[1px] w-[8px] h-[8px] bg-red-500 rounded-full border-[2px] border-white"></span>
          <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};
