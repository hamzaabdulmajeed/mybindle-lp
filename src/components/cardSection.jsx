function CardSection({title, desc, cards}) {
  return (
    <div className="w-full min-h-[867px] bg-[#F2F2F2] py-16">
      <div className="text-center mb-16">
        <h1 className="text-[78.67px] font-semibold text-[#282722]">
          {title}
        </h1>
        <p className="text-[26px] font-medium text-[#222222] mt-2">
          {desc}
        </p>
      </div>
      <div className="max-w-[1716px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         {cards.map((card, index) => (
          <div key={index} className="bg-[#F2F2F2] shadow-md rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
          
          <h2 className="text-[32px] font-semibold mb-3 text-[#1A293C]">{card.title}</h2>
          <p className="text-[21px] font-medium text-[#222222]">
           {card.desc}
          </p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default CardSection
