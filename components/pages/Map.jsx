import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/layouts/Leafletmap"), {
  ssr: false,
});

export default Map;
