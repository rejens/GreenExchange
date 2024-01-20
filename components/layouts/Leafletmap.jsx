"use client";

import "leaflet/dist/leaflet.css";

import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { getAllTrees } from "@/lib/treesAction";
// import { useMap } from "react-leaflet/hooks";

async function Leafletmap() {
  const trees = await getAllTrees();

  const newLocal = "/marker-icon.png";
  const customIcon = new L.Icon({
    iconUrl: newLocal,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className='h-[600px] mb-20'>
      <MapContainer
        center={[28.3973623, 84.12576]}
        zoom={7}
        scrollWheelZoom={true}
        style={{
          height: "100%",
          width: "100%",
          zIndex: "10",
        }}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {trees.map((tree) => (
          <Marker
            key={tree._id}
            position={[tree.latitude, tree.longitude]}
            icon={customIcon}
          >
            <Popup>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xl font-bold'>
                  {tree.numbers} Trees Planted
                </h1>
                <p className='text-sm'>On {tree.plantedDate}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Leafletmap;
