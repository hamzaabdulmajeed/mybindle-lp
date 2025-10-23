function CardSection({ title, desc, cards }) {
  return (
    <div className="w-full bg-[#F2F2F2] py-16 md:py-24 px-4">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282722] leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl font-medium text-[#222222] mt-3 max-w-2xl mx-auto">
          {desc}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 md:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1A293C]">
              {card.title}
            </h2>
            <div className="text-base md:text-lg font-medium text-[#222222] leading-relaxed">
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
  )
}

export default CardSection
