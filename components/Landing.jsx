"use client";
import React from "react";
import BgImg from "../res/bg.jpg";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Landing() {
  return (
    <div
      className='h-screen flex flex-row justify-center items-center flex-wrap'
      style={{
        backgroundImage: `url(${BgImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className='flex gap-5 md:w-1/2 w-full items-center flex-col'>
        <h2
          className='sm:text-xl text-green-700 font-bold'
          style={{
            fontSize: 60,
          }}
        >
          GreenExchange
        </h2>
        <p className='text-xl'>Exchange Greenery with Waste</p>
      </div>
      <div
        className='flex flex-col p-8 rounded-md shadow-md'
        style={{
          border: "1px solid #0000002a",
          height: 500,
          width: 480,
          backgroundColor: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 className='text-xl text-black font-bold text-center'>
          Call us for Waste Products
        </h2>
      </div>
    </div>
  );
}

export default Landing;
