import { user } from "../api/mockData";
import { MainLayouts } from "../components/layouts/MainLayouts";
import { ActivitySummary } from "../components/molecules/ActivitySummary";
import { NewsCarousel } from "../components/molecules/NewsCarousel";
import { OnlineCard } from "../components/molecules/OnlineCard";
import { UserCard } from "../components/molecules/UserCard";

export const HomePage = () => {
  return (
    <MainLayouts>
      <h1 className="font-poppins text-sm mb-2"> Hi, Good Morning!</h1>
      <UserCard user={user} />
      <ActivitySummary />
      <NewsCarousel />
      <OnlineCard />
    </MainLayouts>
  );
};
