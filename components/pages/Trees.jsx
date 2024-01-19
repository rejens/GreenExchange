import React from "react";

function Trees() {
  return (
    <div
      className='max-h-screen flex justify-center items-center flex-col gap-5 overflow-y-auto '
      style={{
        backgroundImage: "url(https://cdn.wallpapersafari.com/5/76/cdElxA.jpg",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className='flex flex-col h-screen justify-center items-center'
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <h2
          className='
                text-4xl
                text-center
                font-bold
                pb-2
                text-white
                '
          style={{
            borderBottom: "1px solid #0000002a",
          }}
        >
          Lets Plant &nbsp;
          <span className='text-green-300'>Trees</span>.
        </h2>
        <i className='text-white text-center text-xl w-2/3'>
          The mountains were so wild, so hard and so incredibly beautiful that I
          wanted to cry. So I took another deep breath to hold that moment deep
          in my heart.
        </i>
        <p className='text-2xl font-bold text-white'>"Jane Wilson-Howarth"</p>
      </div>

      <div className='flex justify-between '>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold text-white'>100</h1>
          <p className='text-white'>Trees Planted</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold text-white'>100</h1>
          <p className='text-white'>Trees Planted</p>
        </div>
      </div>
    </div>
  );
}

export default Trees;
