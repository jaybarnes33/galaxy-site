import React, { ReactNode } from "react";
import CarouselWrapper from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carousel = ({
  items,
  children,
}: {
  children: ReactNode;
  items: { xl: number; lg: number; tablet: number; mobile: number };
}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return <CarouselWrapper responsive={responsive}>{children}</CarouselWrapper>;
};

export default Carousel;
