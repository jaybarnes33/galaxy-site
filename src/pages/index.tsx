import Image from "next/image";
import { Inter } from "next/font/google";
import Intro from "@/sections/Intro";
import Button from "@/components/Button";
import About from "@/sections/About";
import Causes from "@/sections/Causes";
import Services from "@/sections/Services";
import Gallery from "@/sections/Gallery";
import Join from "@/sections/Join";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const focus = ["Healthcare", "Education", "Charity"];
  return (
    <>
      <Intro />
      <About />
      <Causes />
      <Services />
      <Gallery />
      <Join />
    </>
  );
}
