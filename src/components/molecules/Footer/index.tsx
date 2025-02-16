import { CalendarCheck, FileText, Home, LogOut, Settings } from "lucide-react";

export const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-sm bg-white border-t shadow-[0_-4px_10px_rgba(0,0,0,0.1)] py-3 flex justify-between items-end px-4">
      <div className="flex flex-col items-center text-red-500">
        <Home size={18} />
        <span className="text-xs font-bold mt-1">Home</span>
      </div>

      <div className="flex flex-col items-center text-gray-400">
        <CalendarCheck size={18} />
        <span className="text-xs mt-1">Attendance</span>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="w-11 h-11 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md -translate-y-10 left-1 top-[-20px] absolute">
          <LogOut size={21} />
        </div>
        <span className="text-xs text-red-500 mt-[-4px] font-bold">
          Check Out
        </span>
      </div>

      <div className="flex flex-col items-center text-gray-400">
        <FileText size={18} />
        <span className="text-xs mt-1">Form</span>
      </div>

      <div className="flex flex-col items-center text-gray-400">
        <Settings size={18} />
        <span className="text-xs mt-1">Setting</span>
      </div>
    </div>
  );
};
