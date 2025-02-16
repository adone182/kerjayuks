import { User } from "../../../types/ui";
import { Avatar } from "../../atoms/Avatar";

type UserCardProps = {
  user: User;
};
export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="py-2 px-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl shadow-lg">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center gap-2">
          <Avatar
            src={`https://i.pravatar.cc/150`}
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">{user.name}</h2>
            <p className="text-xs italic font-extralight">{user.role}</p>
          </div>
        </div>
        <div>
          <p className="text-xs italic font-extralight">Member since</p>
          <p className="text-sm font-semibold">{user.memberSince}</p>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-4 mt-4">
        <div>
          <p className="text-xs font-extralight">Location</p>
          <p className="text-sm font-semibold">{user.location}</p>
        </div>
        <span className="text-xs italic font-extralight">ICO</span>
      </div>
    </div>
  );
};
