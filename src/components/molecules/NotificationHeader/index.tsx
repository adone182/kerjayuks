import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const NotificationHeader = () => {
  return (
    <div className="flex items-center gap-3 mb-[1px] pb-4 px-4 shadow-md">
      <Link to="/" className="flex items-center">
        <ArrowLeft size={20} className="text-gray-700" />
      </Link>
      <span className="font-poppins text-xl font-bold text-orange-600">
        Notification
      </span>
    </div>
  );
};
