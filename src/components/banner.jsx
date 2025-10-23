import iphone from "../assets/iPhone 14 Pro.png"
import iphone1 from "../assets/iPhone 14 Pro (1).png"
export default function Banner() {
  return (
    <section className="w-full bg-[#F2F2F2] py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#FF5349] py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-14 rounded-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5 md:space-y-6 z-10 relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Be the Reason<br />
                Someone Smiles Today!
              </h2>
              <p className="text-white/95 text-base md:text-lg leading-relaxed">
                Your generosity can change lives every day. Every donation brings
                hope, support, and a brighter future. Give today and make a
                difference!
              </p>
              <button className="bg-white text-[#FF5349] px-10 md:px-14 py-4 md:py-5 text-base md:text-lg font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
                Donate Now
              </button>
            </div>
            <div className="relative h-[400px] md:h-[450px] lg:h-[500px] flex justify-center lg:justify-end items-end">
              <div className="hidden md:block absolute bottom-0 left-0 lg:left-1">
                <img
                  src={iphone1}
                  alt="Donation app preview"
                  className="w-[140px] lg:w-[180px] h-auto drop-shadow-2xl opacity-90"
                />
              </div>
              <div className="absolute bottom-0 right-0 md:right-4 lg:right-0">
                <img
                  src={iphone}
                  alt="Donation app preview"
                  className="w-[240px] md:w-[280px] lg:w-[320px] h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
