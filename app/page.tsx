'use client'

import Image from "next/image";
import useWindowSize from './components/usewindowsize'; // Import the custom hook
import React from 'react';
import Navbar from "./components/navbar/navbar";


export default function Home() {

  const windowSize = useWindowSize();
  const isDesktop = windowSize.width >= 768; // Example threshold for desktop

  return (
    <div>
      {isDesktop ? (
        // For desktop (medium screens and above)
        <div className=''>
          <div className="sticky top-0 z-50 shadow-2xl">
            <Navbar />
          </div>
          {/* background */}
          <video
            src={"/video/almonte1.mp4"}
            loop
            autoPlay
            muted
            style={{ opacity: 0.75, height: '90vh' }}
            className='object-cover absolute w-screen top-0 left-0 -z-10'
          >
          </video>



          <div className='px-40 w-[80%] flex flex-col justify-start pt-60 space-y-5'>
            <span className='text-8xl text-white'>Joes Italian Kitchen</span>
            <span className='text-neutral-200 text-2xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, quas, iusto corrupti
            </span>
            <div className='flex space-x-10'>
              <button className='px-12 py-4 bg-black border-2 border-black text-white hover:bg-transparent hover:border-white duration-200'>
                Reservations
              </button>
              <button className='px-12 py-4 bg-white border-2 border-black text-black hover:bg-transparent hover:border-white duration-200'>
                Order Online
              </button>
            </div>
          </div>
{/* 
    <section>
      <div className="flex space-x-5 mt-40">
        <div className="flex-1 bg-white h-96 w-full p-4">Menu</div>
        <div className="flex-1 bg-white p-4">Locations</div>
        <div className="flex-1 bg-white p-4">About</div>
      </div>
    </section> */}
        </div>

        
      ) : (
        // For mobile (small screens)
        <div>
        <p>view on desktop</p>
    </div>

)}
 </div>
  );
}
