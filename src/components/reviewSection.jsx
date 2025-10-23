import React, { useState } from 'react'

function ReviewSection({ title, cards }) {


  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(cards.length);
  };
  
  return (
    <div className='w-full bg-[#F2F2F2] py-16 md:py-20 px-4 md:px-8'>
      <div className="max-w-6xl mx-auto">
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight'>
            {title}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.slice(0, visibleCount).map((c, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-yellow-500 mb-3 text-xl">
                {"⭐".repeat(c.rating)}
                {"☆".repeat(5 - c.rating)}
              </div>
              <p className="text-gray-700 italic mb-4 text-base leading-relaxed">
                "{c.comment}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={c.profile}
                  alt={c.user}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-base text-gray-900">{c.user}</h3>
                  <p className="text-gray-500 text-sm">{c.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < cards.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={showMore}
              className="bg-[#FF5349] text-white px-12 py-4 text-base font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewSection
