import Button from "@/components/Button";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Causes = () => {
  const causes = [
    { name: "Adwoa's Surgery", target: 50000, raised: 20000 },
    { name: "Plastic Surgery for Moses", target: 20000, raised: 20000 },
    { name: "Yaa's Education", target: 40000, raised: 20000 },
    { name: "Donation to Adulam", target: 35000, raised: 20000 },
  ];
  return (
    <section className="py-10 grid justify-center px-3 md:px-[5rem]">
      <div className="flex flex-col items-center">
        <span className="text-secondary uppercase tracking-wide">
          Our causes
        </span>
        <h1 className="text-4xl font-bold text-center tracking-wide">
          Donate to our causes{" "}
        </h1>
      </div>
      <Carousel className="my-3 h-full" responsive={responsive}>
        {causes.map((cause) => (
          <div
            key={cause.name}
            className="mx-3 my-2"
            style={{ boxShadow: "20px 30px 80px -5px #00000012" }}
          >
            <Image
              className="w-full h-[200px] object-cover object-center"
              width={500}
              height={200}
              src="/images/image.png"
              alt="child"
            />
            <div className="px-2">
              <span className="text-secondary">Ghana</span>
              <h2 className="font-semibold">{cause.name}</h2>
              <div className="px-2 py-3 bg-primary w-full">
                <h3 className="text-neutral-100 text-center my-1">
                  {Math.round((cause.raised / cause.target) * 100)}% raised
                </h3>
                <div
                  className={classNames("h-2  bg-white my-1")}
                  style={{ width: `${(cause.raised / cause.target) * 100}%` }}
                ></div>
                <div className="flex justify-between text-neutral-100 font-semibold tracking-wide my-1">
                  <div>
                    <span>Raised: </span>
                    <span>{cause.raised}</span>
                  </div>
                  <div>
                    <span>Goal: </span>
                    <span>{cause.target}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between my-1">
                <Button variant="secondary">Donate Now</Button>
                <Button variant="accent">Read more</Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Causes;
