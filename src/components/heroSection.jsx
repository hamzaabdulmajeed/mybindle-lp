import React from 'react'
import mobile1 from "../assets/Group 3.png"
import mobile2 from "../assets/Group 4.png"


function heroSection({ title, desc, cards }) {
  return (
   <div className='w-full bg-[#F2F2F2] py-12 md:py-16'>
  <div className='lg:max-w-[1300px] mx-auto px-6 md:px-12'>
    <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'>
      
      <div className='flex-1 order-2 lg:order-1 flex justify-center items-center w-full'>
        <div className="relative w-full max-w-[400px] h-[350px] md:h-[450px] lg:h-[600px] flex justify-center items-center">
          <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] bg-[#FF4D4D] rounded-full"></div>
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src={mobile1}
              alt="Mobile mockup left"
              className="absolute lg:left-30 w-[110px] h-[220px] md:w-[160px] md:h-[320px] lg:w-[220px] lg:h-[440px]  rounded-[16px] md:rounded-[24px] lg:rounded-[30px] z-10 rotate-[-8deg] drop-shadow-2xl -translate-x-8 md:-translate-x-12 lg:-translate-x-20"
            />
            <img
              src={mobile2}
              alt="Mobile mockup right"
              className="absolute lg:right-[-25px] w-[110px] h-[220px] md:w-[160px] md:h-[320px] lg:w-[380px] lg:h-[580px]  rounded-[16px] md:rounded-[24px] lg:rounded-[30px] z-20 rotate-[8deg] drop-shadow-2xl translate-x-6 md:translate-x-10 lg:translate-x-16"
            />
          </div>
        </div>
      </div>
      <div className='flex-1 order-1 lg:order-2 w-full'>
        <div className="mb-8 md:mb-5 space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222222] tracking-tighter">
            {title.map((t, i) => (
              <span key={i}>
                {t}
                {i < title.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-base md:text-md font-medium text-[#525252] leading-tight">
            {desc.map((d, i) => (
              <span key={i}>
                {d}
                {i < desc.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
        <div className="space-y-2 md:space-y-3 max-w-[550px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#F2F2F2] shadow-lg rounded-xl p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#1A293C]">
                {card.title}
              </h2>
              <div className="text-sm md:text-base font-medium text-[#222222] leading-tight">
                {card.desc.map((d, i) => (
                  <p key={i} className="mb-0.5">
                    {d}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default heroSection
