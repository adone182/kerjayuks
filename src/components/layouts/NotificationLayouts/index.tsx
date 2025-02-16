import { NotificationHeader } from "../../molecules/NotificationHeader";

export const NotificationLayouts: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="container pt-6">
      <NotificationHeader />
      {children}
    </div>
  );
};
