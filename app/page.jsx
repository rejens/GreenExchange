import Landing from "@/components/pages/Landing";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import About from "@/components/pages/About";
import HowItWorks from "@/components/pages/HowItWorks";
import Trees from "@/components/pages/Trees";


export default function Home() {
  // height, width, markers, zoom, center;

  const alerts = [
    {
      _id: "1",
      hazard: {
        title: "Flood",
      },
      location: {
        name: "Brgy. Poblacion, San Francisco, Agusan del Sur",
        coordinates: {
          lat: 8.5874,
          lng: 125.972,
        },
        municipality: "San Francisco",
        district: "1st",
        province: "Agusan del Sur",
      },
    },
    {
      _id: "2",
      hazard: {
        title: "Flood",
      },
      location: {
        name: "Brgy. Poblacion, San Francisco, Agusan del Sur",
        coordinates: {
          lat: 8.5874,
          lng: 125.972,
        },
        municipality: "San Francisco",
        district: "1st",
        province: "Agusan del Sur",
      },
    },
    {
      _id: "3",
      hazard: {
        title: "Flood",
      },
      location: {
        name: "Brgy. Poblacion, San Francisco, Agusan del Sur",
        coordinates: {
          lat: 8.5874,
          lng: 125.972,
        },
        municipality: "San Francisco",
        district: "1st",
        province: "Agusan del Sur",
      },
    },
    {
      _id: "4",
      hazard: {
        title: "Flood",
      },
      location: {
        name: "Brgy. Poblacion, San Francisco, Agusan del Sur",
        coordinates: {
          lat: 8.5874,
          lng: 125.972,
        },
        municipality: "San Francisco",
        district: "1st",
        province: "Agusan del Sur",
      },
    },
    {
      _id: "5",
      hazard: {
        title: "Flood",
      },
      location: {
        name: "Brgy. Poblacion, San Francisco, Agusan del Sur",
        coordinates: {
          lat: 8.5874,
          lng: 125.972,
        },
        municipality: "San Francisco",
        district: "1st",
        province: "Agusan del Sur",
      },
    },
  ];

  const markers = alerts?.map(({ _id, hazard, location }) => ({
    id: _id,
    hazard: hazard.title,
    title: location.name,
    position: location.coordinates,
    address: `${location.municipality} ${location.district}, ${location.province} Province`,
    link: `https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`,
  }));

  const center = () => {
    const totalCount = alerts.length;
    let latSum = 0;
    let lngSum = 0;

    alerts.forEach((item) => {
      latSum += item.location.coordinates.lat;
      lngSum += item.location.coordinates.lng;
    });
    const lat = latSum / totalCount;
    const lng = lngSum / totalCount;

    return { lat, lng };
  };
  return (
    <main className='flex flex-col'>
      <Navbar />
      <Landing />
      <About />
      <HowItWorks />
      <Trees />

      {/* <Suspense fallback={<div>Loading...</div>}>
        <Map
          height='50vh'
          width='100vw'
          markers={markers}
          zoom={10}
          center={center()}
        />
      </Suspense> */}
    </main>
  );
}
