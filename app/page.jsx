import Landing from "@/components/pages/Landing";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import About from "@/components/pages/About";
import HowItWorks from "@/components/pages/HowItWorks";

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Navbar />
      <Landing />
      <About />
      <HowItWorks />
    </main>
  );
}
