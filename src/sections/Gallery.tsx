import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const services = [
  {
    name: "outreach",
    description: "",
  },
  {
    name: "fundraising",
    description: "",
  },
  {
    name: "volunteering",
    description: "",
  },
];

const Gallery = () => {
  return (
    <section className="py-10 grid justify-center px-3 md:px-[5rem]">
      <div className="flex flex-col items-center">
        <span className="text-secondary uppercase tracking-wide">
          Our Gallery
        </span>
        <h1 className="text-3xl font-bold text-center md:max-w-[70%]  tracking-wide">
          We organize outreach programs to orphanages and rural areas.
        </h1>
      </div>

      <Image
        className="w-full my-4"
        width={500}
        height={400}
        src="/images/gallery.png"
        alt="gallery"
      />
    </section>
  );
};

export default Gallery;
