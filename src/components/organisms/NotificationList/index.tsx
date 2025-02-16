import { Notification } from "../../../types/ui";
import NotificationIcon from "../../atoms/NotificationIcons";
import NotificationStatus from "../../atoms/NotificationStatus";

type NotificationItemProps = {
  notif: Notification;
};

export default function NotificationList({ notif }: NotificationItemProps) {
  return (
    <div
      className={`flex items-start gap-4 ${
        notif.isRead ? "bg-white" : "bg-blue-100"
      } px-4 py-3`}
    >
      <div className="relative bg-gradient-to-r from-red-600 to-pink-600 p-2 rounded-md shadow flex items-center gap-2">
        <NotificationIcon type={notif.type} />
        <NotificationStatus status={notif.status} />
      </div>

      <div className="flex items-start justify-between">
        <div className="w-3/4">
          <h4 className="text-sm font-semibold">{notif.title}</h4>
          <p className="text-xs text-gray-600">{notif.description}</p>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          {notif.date === "2024-02-16"
            ? "Today"
            : notif.date === "2024-02-15"
            ? "Yesterday"
            : notif.date}
        </p>
      </div>
    </div>
  );
}
