import React from "react";
import working from "../../res/Working.png";

function HowItWorks() {
  return (
    <div className='h-screen flex flex-col p-10 gap-10 mt-10'>
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
        <span className='text-green-600'>How It Works</span>?
      </h2>
      <div className='flex justify-center items-center flex-col gap-5'>
        <img src={working.src} className='w-8/12 object-cover' alt='why' />
      </div>
    </div>
  );
}

export default HowItWorks;
