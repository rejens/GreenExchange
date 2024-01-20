import Landing from "@/components/pages/Landing";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import About from "@/components/pages/About";
import HowItWorks from "@/components/pages/HowItWorks";
import Trees from "@/components/pages/Trees";
import Map from "@/components/pages/Map";
import dynamic from "next/dynamic";

// import Leafletmap from "@/components/layouts/Leafletmap";

const Leafletmap = dynamic(() => import("@/components/layouts/Leafletmap"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Navbar />
      <Landing />
      <About />
      <HowItWorks />
      <Trees />
      <Leafletmap />
    </main>
  );
}

// import Map from "@/components/pages/Map";
// import dynamic from "next/dynamic";

// // import Leafletmap from "@/components/layouts/Leafletmap";

// const Leafletmap = dynamic(() => import("@/components/layouts/Leafletmap"), {
//   ssr: false,
// });
// =======
// import Map from "@/components/layouts/Map";
// import { Suspense } from "react";

// <Leafletmap />
