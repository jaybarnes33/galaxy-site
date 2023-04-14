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

const Services = () => {
  return (
    <section className="py-10 grid justify-center px-3 md:px-[5rem]">
      <div className="flex flex-col items-center">
        <span className="text-secondary uppercase tracking-wide">
          Our services
        </span>
        <h1 className="text-3xl font-bold text-center md:max-w-[70%]  tracking-wide">
          We are on a mission to help the helpless
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6 my-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="p-3 min-h-[350px] grid place-items-center border border-primary  w-full even:bg-primary even:text-neutral-100"
          >
            <div>
              <Image
                className="mx-auto"
                width={60}
                height={60}
                src={`/assets/${service.name}.svg`}
                alt={service.name}
              />
              <h2 className="text-center font-bold text-xl capitalize my-2">
                {service.name}
              </h2>
              <p className="text-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                consequatur laborum repudiandae eos quibusdam eius itaque
                facilis dolorem labore esse.
              </p>
              <div className="flex justify-center">
                <Button variant="secondary">Read More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
