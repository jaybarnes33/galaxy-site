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

const Join = () => {
  return (
    <section className="py-10  ">
      <div className=" grid md:grid-cols-3 gap-6 mt-4 px-3 md:px-[5rem] bg-primary py-[2rem]">
        <div className="flex flex-col items-center p-3 text-white">
          <span className="text-2xl font-bold">80+</span>
          <span>Volunteers</span>
        </div>
        <div className="flex flex-col items-center p-3 text-white">
          <span className="text-2xl font-bold">50+</span>
          <span>Children Saved</span>
        </div>
        <div className="flex flex-col items-center p-3 text-white">
          <span className="text-2xl font-bold">90+</span>
          <span>Surgeries</span>
        </div>
      </div>
      <div className="grid md:grid-cols-2  gap-6 text-neutral-100 px-3 md:px-[5rem] bg-accent2 py-[2rem]">
        <div>
          <span className="text-primary uppercase font-semibold text-xs">
            Our Mission
          </span>
          <h2 className="text-3xl md:max-w-[70%] font-bold tracking-wide mb-3">
            Help by donating or sponsoring a project
          </h2>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            est sit culpa pariatur esse nemo repellat quis? Quis recusandae
            perferendis quo voluptates eaque nulla qui dolorem, odio eius,
            laborum molestiae!
          </p>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            est sit culpa pariatur esse nemo repellat quis? Quis recusandae
            perferendis quo voluptates eaque nulla qui dolorem, odio eius,
            laborum molestiae!
          </p>
          <Button variant="primary">See all details</Button>
        </div>
      </div>
    </section>
  );
};

export default Join;
