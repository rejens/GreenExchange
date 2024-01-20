import { getAllTrees } from "@/lib/treesAction";
import React from "react";

async function Trees() {
  const trees = await getAllTrees();

  // add all trees numberOfTrees
  const totalTrees = trees.reduce((acc, tree) => {
    return acc + tree.numberOfTrees;
  }, 0);

  // filter this month trees
  const thisMonthTrees = trees.filter((tree) => {
    const treeDate = new Date(tree.plantedDate);
    const today = new Date();
    return (
      treeDate.getMonth() === today.getMonth() &&
      treeDate.getFullYear() === today.getFullYear()
    );
  });

  return (
    <div
      className='min-h-screen'
      style={{
        backgroundImage:
          "url(https://th.bing.com/th/id/OIP.JM8xhGYldULK0Cw8UFgbyAHaEK?rs=1&pid=ImgDetMain",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className='flex justify-center items-center h-screen flex-col gap-5'
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className='flex flex-col justify-center items-center'>
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
            The mountains were so wild, so hard and so incredibly beautiful that
            I wanted to cry. So I took another deep breath to hold that moment
            deep in my heart.
          </i>
          <p className='text-2xl font-bold text-white'>"Jane Wilson-Howarth"</p>
        </div>
      </div>
      <div className='flex h-80 items-center justify-around bg-white p-5'>
        <div className='flex flex-col'>
          <h1 className='text-4xl text-black font-bold text-center'>
            {totalTrees}
          </h1>
          <h4 className='text-xl text-black text-center'>
            Total Trees Planted till now
          </h4>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-4xl text-black font-bold text-center'>
            {totalTrees}
          </h1>
          <h4 className='text-xl text-black text-center'>
            Trees Planted this month
          </h4>
        </div>
      </div>
      <div
        className='flex h-80 items-center justify-around '
        style={{
          backgroundImage:
            "url(https://th.bing.com/th/id/R.f951f813d796d5d98df48068f131d4c7?rik=nhlDRYO8FZXvHw&pid=ImgRaw&r=0)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className='flex justify-center items-center h-full w-full flex-col gap-5'
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <p className='text-3xl text-white'>
            "Technology may have caused climate change, but it can also solve
            it"
          </p>
          <p className='text-xl text-center text-white'>
            <span className='text-green-200 font-bold'>20% profit</span> we earn
            from the system, will help plant trees and make a better greenary
            Environment
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trees;
