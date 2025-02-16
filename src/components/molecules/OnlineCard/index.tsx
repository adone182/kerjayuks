import { onlineUsers } from "../../../api/mockData";

export const OnlineCard = () => {
  return (
    <div className="mt-6 pb-10">
      <h3 className="text-sm font-semibold mb-2">Online</h3>
      <div className="bg-gray-50 rounded-2xl shadow-[6px_6px_10px_rgba(0,0,0,0.15)] flex items-center p-2 px-3 border border-gray-200">
        {onlineUsers.map((user, index) => (
          <div key={user.id} className="flex flex-col items-center relative">
            <div className={`relative z-[2] ${index !== 0 ? "-ml-3" : ""}`}>
              <img
                src={user.img}
                alt={user.name}
                className="w-[46px] h-[46px] rounded-full border-2 border-white shadow-md"
              />
            </div>
            <p className="text-[10px] font-semibold mt-1">{user.name}</p>
            <p className="text-[10px] text-gray-500">{user.location}</p>
          </div>
        ))}
        <div className="relative">
          <div className="absolute bottom-[-8px] left-3 -translate-x-1/2 flex items-center justify-center w-[46px] h-[46px] rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-[10px] text-center font-semibold shadow-md z-[1]">
            10 <br /> more
          </div>
        </div>
      </div>
    </div>
  );
};
