import React from 'react'



function stepper() {
  return (
    <div className='w-full min-h-[867px] bg-[#F2F2F2] py-16 grid grid-cols-1 gap-10'>
      <div className='text-center'>
        <h1 className='text-[79px] font-[600] font-bold  text-[#222222]'>How to Install Our App</h1>
         <p className="text-[22px] font-medium text-[#525252] mt-2 ">
          Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
        </p>
      </div>
<div className='flex items-center justify-center space-x-6 mt-10 mb-10'>
     <div className="flex items-center space-x-6">
        <span className="text-[#FF5349] font-semibold text-[60px]">01</span>
        <div className="w-[700px] h-[1px] bg-gray-300"></div>
      </div>

      {/* Step 2 */}
      <div className="flex items-center space-x-6">
        <span className="text-[#1A293C] font-semibold text-[60px]">02</span>
        <div className="w-[700px] h-[1px] bg-gray-300"></div>
      </div>

      {/* Step 3 */}
      <div className="flex items-center space-x-6">

      <span className="text-[#1A293C] font-semibold text-[60px]">03</span>
</div>
</div>


      <div className="max-w-[1716px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 ">
        <div className="h-[200px] w-[500px] bg-[#F2F2F2] shadow-md rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-[32px] font-semibold mb-3 text-[#1A293C]">🔥 Seamless Connections</h2>
          <p className="text-[21px] font-medium text-[#222222]">
            Stay in touch with friends, <br /> family, and like-minded <br /> people with just a tap.
          </p>
        </div>

        <div className="h-[200px] w-[500px] bg-[#F2F2F2] shadow-md rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-[32px] font-semibold mb-3 text-[#1A293C]">📸 Share Your Story</h2>
          <p className="text-[21px] font-medium text-gray-700 text-[#222222]">
            Upload photos, videos, and updates to <br /> show the world what’s happening in <br /> your life.
          </p>
        </div>
        <div className="h-[200px] w-[500px] bg-[#F2F2F2] shadow-md rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-[32px] font-semibold mb-3 text-[#1A293C]">💬 Real-Time Chat</h2>
          <p className="text-[21px] font-medium text-gray-700 text-[#222222]">
            Whether it’s DMs or group <br /> conversations, connect instantly with <br /> smooth, lightweight messaging.
          </p>
        </div>
      </div>
    </div>
  )
}



export default stepper
