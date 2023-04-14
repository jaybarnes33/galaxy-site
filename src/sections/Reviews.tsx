import Carousel from "@/components/Carousel";
import Image from "next/image";
import React from "react";

const Reviews = () => {
  return (
    <div className="grid md:grid-cols-2 justify-center gap-3 px-3 md:px-[5rem] py-10">
      <Image
        width={500}
        height={400}
        alt="person smiling"
        src={"/images/review.png"}
      />
      <div className="text-center">
        <small className="font-bold text-secondary">Testimonials</small>
        <h1 className="text-3xl font-bold">What people say about us</h1>
      </div>
      <Carousel items={{ xl: 1, tablet: 1, lg: 1, mobile: 1 }}>
        <div className="text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            optio recusandae, aliquid sit, repudiandae amet culpa eius ullam
            esse blanditiis quae illo saepe nisi velit ab impedit dicta. Maxime,
            nemo.
          </p>
        </div>
        <div className="text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            optio recusandae, aliquid sit, repudiandae amet culpa eius ullam
            esse blanditiis quae illo saepe nisi velit ab impedit dicta. Maxime,
            nemo.
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Reviews;
