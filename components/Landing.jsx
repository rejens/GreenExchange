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
          // height: 500,
          width: 480,
          backgroundColor: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 className='text-xl text-black font-bold text-center'>
          Call us for Waste Products
        </h2>
        <div className='flex gap-5 flex-wrap pt-5'>
          <div className='w-full md:w-5/12'>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold text-gray-700 tracking-wide'>
                Date
              </label>
              <input
                className='text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                type='date'
                placeholder='John Doe'
              />
            </div>
          </div>
          <div className='w-full md:w-5/12'>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold text-gray-700 tracking-wide'>
                Time
              </label>
              <input
                className='text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                type='time'
                placeholder='Time'
              />
            </div>
          </div>
        </div>
        <div className='flex gap-5 flex-wrap pt-5'>
          <div className='w-full md:w-5/12'>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold text-gray-700 tracking-wide'>
                Phone
              </label>
              <input
                className='text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                type='number'
                placeholder='985-4021245'
              />
            </div>
          </div>
          <div className='w-full md:w-5/12'>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold text-gray-700 tracking-wide'>
                Waste Type
              </label>
              <select
                className='text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                name='type'
                id='type'
              >
                <option value='ewaste'>E-Waste</option>
                <option value='clothes'>Clothes</option>
              </select>
            </div>
          </div>
        </div>
        <div className='flex gap-5 flex-wrap pt-5'>
          <div className='w-full md:w-5/12'>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold text-gray-700 tracking-wide'>
                Weight (in Kgs)
              </label>
              <input
                className='text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500'
                type='number'
                placeholder='3'
              />
            </div>
          </div>
          <div className='w-full md:w-5/12'>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold text-gray-700 tracking-wide'>
                Image
              </label>
              <div
                onClick={() => {
                  document.querySelector("input[type=file]").click();
                }}
                className='flex h-10 w-full items-center justify-center rounded-md border-dashed border-2 border-gray-400 hover:bg-gray-100 cursor-pointer '
                style={{ border: "1px dashed #0000009a" }}
              >
                Upload
              </div>
              <input type='file' accept='image/*' className='hidden' />
            </div>
          </div>
        </div>
        <div className='flex gap-5 flex-wrap pt-5'>
          <div className='w-full'>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold text-gray-700 tracking-wide'>
                Description
              </label>
              <input
                className='text-base py-2 border-b w-full border-gray-300 focus:outline-none focus:border-indigo-500'
                type='text'
                placeholder='Describe your waste product'
              />
            </div>
          </div>
        </div>
        <div className='flex gap-5 flex-wrap pt-5'>
          <div className='w-full'>
            <label className='text-sm font-bold text-gray-700 tracking-wide'>
              I Want to
            </label>
            <div className='flex flex-row gap-2'>
              {/* Radio buttons */}
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='option'
                  id='Sell'
                  className='w-4 h-4'
                />
                <label htmlFor='Sell'>Sell</label>
              </div>
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='option'
                  id='Donate'
                  className='w-4 h-4'
                />
                <label htmlFor='Donate'>Donate</label>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-5 flex-wrap pt-5'>
          <div className='w-full'>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold text-gray-700 tracking-wide'>
                Address
              </label>
              <input
                className='text-base py-2 border-b w-full border-gray-300 focus:outline-none focus:border-indigo-500'
                type='text'
                placeholder='House No. 233, Khumaltar, Lalitpur'
              />
            </div>
          </div>
        </div>
        <div className='flex mt-5 w-full'>
          <Button colorScheme='blue'>Done</Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
