import iphone from "../assets/iPhone 14 Pro.png"
import iphone1 from "../assets/iPhone 14 Pro (1).png"
export default function Banner() {
  return (
    <section className="w-full min-h-[600px] bg-[#F2F2F2] py-20 md:px-60 mx-auto">
      <div className="bg-[#FF5349] md:py-24 rounded-lg">
        <div className="max-w-7xl min-h-[600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-9 text-white relative">
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-[76px] font-bold leading-tight">
              Be the Reason <br /> Someone Smiles Today!
            </h2>
            <p className="text-white/90 text-[22px] leading-tight ">
              Your generosity can change lives every day. Every donation brings
              hope, support, and a brighter <br /> future. Give today and make a
              difference!
            </p>
            <button className="bg-white text-red-500 px-20 py-8 font-semibold rounded-lg shadow hover:bg-red-100 transition">
              Donate Now
            </button>
            <div className=" absolute min-h-[490px] top-[250px] left-[500px]">
              <img
                src={iphone1}
                alt="Donation app preview left"
                className="w-200 h-[420px] drop-shadow-lg"
              />
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end items-center w-[400px]">
            <div className="absolute top-[120px]">
              <img
                src={iphone}
                alt="Donation app preview right"
                className="w-[400px] h-[575px] drop-shadow-xl ml-[-60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
