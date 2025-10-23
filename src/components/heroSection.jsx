import React from 'react'
import mobile1 from "../assets/Group 3.png"
import mobile2 from "../assets/Group 4.png"


function heroSection({ title, desc, cards }) {
  return (
    <div className="w-full bg-[#F2F2F2] py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className='flex-1 order-2 lg:order-1'>
            <div className="relative flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px]">
              <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] bg-[#FF4D4D] rounded-full"></div>
              <div className="relative flex justify-center items-center gap-2 md:gap-4">
                <img
                  src={mobile1}
                  alt="Mobile mockup left"
                  className="w-[140px] h-[200px] md:w-[200px] md:h-[285px] lg:w-[280px] lg:h-[400px] z-20 rotate-[-12deg] drop-shadow-2xl"
                />
                <img
                  src={mobile2}
                  alt="Mobile mockup right"
                  className="w-[170px] h-[298px] md:w-[240px] md:h-[420px] lg:w-[340px] lg:h-[595px] rotate-[12deg] drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className='flex-1 order-1 lg:order-2'>
            <div className="mb-8 md:mb-12 space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
                {title.map((t, i) => (
                  <span key={i}>
                    {t}
                    {i < title.length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="text-base md:text-lg font-medium text-[#525252] leading-relaxed">
                {desc.map((d, i) => (
                  <span key={i}>
                    {d}
                    {i < desc.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
            <div className="space-y-4 md:space-y-5">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="bg-white shadow-lg rounded-xl p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#1A293C]">
                    {card.title}
                  </h2>
                  <div className="text-sm md:text-base font-medium text-[#222222] leading-relaxed">
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
