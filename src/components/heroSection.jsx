import React from 'react'
import mobile1 from "../assets/Group 3.png"
import mobile2 from "../assets/Group 4.png"


function heroSection() {
  return (
    <div className="w-full min-h-[867px] bg-[#F2F2F2] py-16 flex">
      <div className='flex-1'>
        <div className="relative flex justify-center items-center ">
          <div className="absolute w-[500px] h-[500px] bg-[#FF4D4D] rounded-full"></div>

          <div className="relative flex justify-end items-center ml-30">
            <img
              src={mobile1}
              alt="Mobile mockup left"
              className="w-[350px] h-[500px] z-20p rotate-[-15deg]  drop-shadow-2xl"
            />
            <img
              src={mobile2}
              alt="Mobile mockup right"
              className="w-[450px] h-[788px] rotate-[15deg]  drop-shadow-2xl "
            />
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className="text-center mb-16 leading-[60px] space-y-10">
          <h1 className="text-[79px] font-[600] font-bold  text-[#222222] leading-[70px]">
            Where Every Click <br /> Sparks a Connection!
          </h1>
          <p className="text-[22px] font-medium text-[#525252] mt-2 leading-[30px]">
            A small act of kindness today can create a lifetime of impact for someone in <br /> need. Give from the heart and change a life!
          </p>
        </div>
        <div className="max-w-[762px] mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-2">
          <div className="bg-[#F2F2F2] shadow-md rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <h2 className="text-[32px] font-semibold mb-3 text-[#1A293C]">🎥 Short Videos & Reels</h2>
            <p className="text-[21px] font-medium text-[#222222]">
              Share engaging, bite-sized content that keeps everyone <br /> entertained.
            </p>
          </div>
          <div className="bg-[#F2F2F2] shadow-md rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <h2 className="text-[32px] font-semibold mb-3 text-[#1A293C]">🔔 Smart Notifications</h2>
            <p className="text-[21px] font-medium text-[#222222]">
              Stay updated on what matters without the noise.
            </p>
          </div>
          <div className="bg-[#F2F2F2] shadow-md rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <h2 className="text-[32px] font-semibold mb-3 text-[#1A293C]">👥 Interest-Based Communities</h2>
            <p className="text-[21px] font-medium text-[#222222]">
              Join groups and discussions that match your passion
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default heroSection
