import React from "react";

function About() {
  return (
    <div className='h-screen flex flex-col p-10 gap-10'>
      <h2
        className='
        text-4xl
        text-center
        font-bold
        pb-2
        '
        style={{
          borderBottom: "1px solid #0000002a",
        }}
      >
        Why <span className='text-green-600'>GreenExchange</span>?
      </h2>
      <div className='flex flex-col gap-5'>
        <img
          src='https://i.ibb.co/X2P8GQn/image.png'
          className='w-full object-cover'
          alt='why'
        />
      </div>
    </div>
  );
}

export default About;
