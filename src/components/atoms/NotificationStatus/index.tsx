import { Check, XIcon, MoveRight } from "lucide-react";

type NotificationStatusProps = {
  status: "approved" | "rejected" | "processing";
};

export default function NotificationStatus({
  status,
}: NotificationStatusProps) {
  const statusIcons = {
    approved: <Check size={12} />,
    rejected: <XIcon size={12} />,
    processing: <MoveRight size={12} />,
  };

  return (
    <div
      className={`absolute right-[-8px] bottom-[-4px] rounded-full shadow-xl w-4 h-4 flex items-center justify-center text-white font-semibold ${
        status === "approved"
          ? "bg-green-500"
          : status === "rejected"
          ? "bg-red-500"
          : "bg-blue-500"
      }`}
    >
      {statusIcons[status]}
    </div>
  );
}
