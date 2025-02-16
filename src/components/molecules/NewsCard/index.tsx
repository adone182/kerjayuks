import { formatedDate } from "../../../utility/formatedDate";
import { Avatar } from "../../atoms/Avatar";

type NewsCardProps = {
  author: string;
  date: string;
  content: string[];
  avatar: string;
};

export const NewsCard = ({ author, date, content, avatar }: NewsCardProps) => {
  const { weekday, fullDate } = formatedDate(date);
  return (
    <div className="bg-white rounded-xl p-2 flex flex-col items-start gap-2 border border-gray-200 ">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar src={avatar} alt={author} className="w-8 h-8 rounded-full" />
          <h4 className="text-red-500 text-sm font-semibold">{author}</h4>
        </div>

        <div className="flex flex-col items-end text-xs text-gray-500">
          <p>{weekday}</p>
          <p>{fullDate}</p>
        </div>
      </div>

      <div className="w-full">
        {content.map((text, index) => (
          <p key={index} className="text-sm text-gray-800">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};
