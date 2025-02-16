import { Clock6, Clock9, RotateCw } from "lucide-react";

export const ActivitySummary = () => {
  return (
    <div className="py-4 px-2">
      <h3 className="text-sm font-semibold">Today's activity</h3>
      <div className="flex justify-between mt-2">
        <div className="flex flex-col items-center">
          <Clock9 className="text-orange-500" size={24} />
          <p className="text-sm font-semibold mt-1">08:30</p>
          <p className="text-xs text-gray-500">Check In</p>
        </div>

        <div className="flex flex-col items-center">
          <RotateCw className="text-orange-500" size={24} />
          <p className="text-orange-500 text-sm font-semibold mt-1">03:00:00</p>
          <p className="text-xs text-gray-500">Working Hours</p>
        </div>

        <div className="flex flex-col items-center">
          <Clock6 className="text-orange-500" size={24} />
          <p className="text-sm font-semibold mt-1">--:--</p>
          <p className="text-xs text-gray-500">Check Out</p>
        </div>
      </div>
    </div>
  );
};
