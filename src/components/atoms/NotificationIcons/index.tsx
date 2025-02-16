import { CoinsIcon, Pill, AlarmClock } from "lucide-react";

type NotificationIconProps = {
  type: "Reimbursement" | "Sickness" | "Overtime";
};

export default function NotificationIcon({ type }: NotificationIconProps) {
  const Icons = {
    Reimbursement: (
      <CoinsIcon size={24} className="text-yellow-300 font-bold" />
    ),
    Sickness: <Pill size={24} className="text-blue-700 font-bold" />,
    Overtime: <AlarmClock size={24} className="text-gray-800 font-bold" />,
  };

  return <>{Icons[type]}</>;
}
