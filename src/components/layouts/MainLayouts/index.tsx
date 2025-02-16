import { Footer } from "../../molecules/Footer";
import { Navbar } from "../../molecules/Navbar";

export const MainLayouts: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="container px-4 pt-6 pb-20">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
