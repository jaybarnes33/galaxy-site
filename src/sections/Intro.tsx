import Button from "@/components/Button";
import Image from "next/image";

export default function Intro() {
  const focus = ["Healthcare", "Education", "Charity"];
  return (
    <main>
      <div className="relative grid px-3 md:px-[5rem] md:grid-cols-2 bg-primary place-items-center py-10 min-h-screen">
        <div className="relative">
          <Image src="/assets/Group.svg" alt="vector" width={10} height={10} />
          <h1 className="text-3xl tracking-wide md:text-6xl font-bold text-white ">
            Let&apos;s make the world a better place
          </h1>
          <Image
            className="absolute right-0 -top-2"
            src="/assets/scribble1.svg"
            alt="vector"
            width={50}
            height={10}
          />
          <div className="flex gap-9 uppercase text-neutral-400 py-3">
            {focus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <Image
            className="absolute bottom-0  right-[50%] "
            src="/assets/scribble2.svg"
            alt="vector"
            width={70}
            height={10}
          />

          <Button variant="secondary">Donate Now</Button>
        </div>
        <div className="flex gap-4 my-5">
          <Image
            src="/images/image.png"
            className="w-[200px] sm:w-[350px] md:w-[500px]"
            width={300}
            height={200}
            alt="Children smiling"
          />
          <Image
            src="/images/image (1).png"
            className="w-[40%]"
            width={200}
            height={400}
            alt="Children smiling"
          />
        </div>
        <div className="bg-[#f4f4f442] absolute bottom-0 py-10 px-4 w-full flex justify-around">
          <Image src="/images/MTN.png" width={70} height={40} alt="MTN" />
          <Image src="/images/MTN.png" width={70} height={40} alt="MTN" />
          <Image src="/images/MTN.png" width={70} height={40} alt="MTN" />
          <Image src="/images/MTN.png" width={70} height={40} alt="MTN" />
        </div>
      </div>
    </main>
  );
}
