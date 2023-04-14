import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="grid md:grid-cols-2 py-10 px-3 md:px-[5rem]">
      <Image
        src={"/images/images.png"}
        width={500}
        height={400}
        alt="children"
      />
      <div className=" leading-7">
        <h2 className="font-bold text-4xl">
          Let&apos;s share our joy and happiness
        </h2>
        <p className="my-1">
          There are millions of people around us who are not able to realise
          their full potential due to disability and poverty.
        </p>
        <p className="my-1">
          Galaxy Foundation aims to put smiles on each and everyone&apos;s faces
          by raising funds to help people with disability get the needed
          treatment.
        </p>

        <Button variant="secondary">Donate Now</Button>
      </div>
    </section>
  );
};

export default About;
