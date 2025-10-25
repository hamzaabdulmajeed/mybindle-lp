function stepper({ title, desc, cards }) {
  return (
    <div className='w-full bg-[#F2F2F2] py-16 md:py-20 px-4 md:px-8'>
      <div className="max-w-6xl mx-auto">
        <div className='text-center mb-10 md:mb-16'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight px-4'>
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-medium text-[#525252] mt-3 px-4">
            {desc}
          </p>
        </div>
        <div className='flex items-center justify-center gap-2 sm:gap-4 md:gap-8 mb-12 md:mb-16 px-2'>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <span className="text-[#FF5349] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">01</span>
            <div className="w-8 sm:w-16 md:w-32 lg:w-80 h-[2px] bg-gray-300"></div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <span className="text-[#1A293C] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">02</span>
            <div className="w-8 sm:w-16 md:w-32 lg:w-80 h-[2px] bg-gray-300"></div>
          </div>

          <div className="flex items-center">
            <span className="text-[#1A293C] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">03</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F2F2F2] shadow-lg rounded-xl p-5 sm:p-6 md:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-[#1A293C]">
                {card.title}
              </h2>
              <div className="text-sm sm:text-base md:text-lg font-medium text-[#222222] leading-relaxed">
                {card.desc.map((d, i) => (
                  <p key={i} className="mb-1">
                    {d}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default stepper
