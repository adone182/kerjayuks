import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NewsCard } from "../NewsCard";
import { news } from "../../../api/mockData";

export const NewsCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  return (
    <div>
      <h3 className="text-sm font-semibold mb-2">PCS News</h3>

      <Carousel
        responsive={responsive}
        partialVisible={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={500}
        showDots={true}
        arrows={false}
        itemClass="pe-2"
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
