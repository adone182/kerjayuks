import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NewsCard } from "../NewsCard";
import { news } from "../../../api/mockData";

// const CustomDot = ({ onClick, active }) => {
//   return (
//     <button
//       onClick={() => onClick()}
//       className={`w-3 h-3 rounded-full mx-1 transition-all ${
//         active ? "bg-red-500 scale-125" : "bg-gray-300"
//       }`}
//     />
//   );
// };
export const NewsCarousel = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  return (
    <div>
      <h3 className="text-sm font-semibold mb-2">PCS News</h3>

      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        arrows={false}
        containerClass="carousel-container bg-transparent relative pb-7"
        dotListClass="absolute bottom-0 flex justify-center w-full"
      >
        {news.map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </Carousel>
    </div>
  );
};
