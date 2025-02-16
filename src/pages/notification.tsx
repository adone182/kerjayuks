import { notifications } from "../api/mockData";
import NotificationList from "../components/organisms/NotificationList";
import { NotificationLayouts } from "../components/layouts/NotificationLayouts";

export default function NotificationPage() {
  return (
    <NotificationLayouts>
      <div className="space-y-0">
        {notifications.map((notif) => (
          <NotificationList key={notif.id} notif={notif} />
        ))}
      </div>
    </NotificationLayouts>
  );
}
