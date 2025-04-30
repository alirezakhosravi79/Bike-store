import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import group from "../assets/Group2.png";

function Hero() {
  return (
    <section className="bg-gray-900 mt-4 px-6 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* 🔵 سمت چپ (متن) */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">The Bicycle</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolution</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            From sleek road bikes built for speed to rugged mountain bikes
            designed for off-road adventures, our slider celebrates the diversity
            of cycling disciplines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 px-8 py-3 rounded text-white hover:bg-orange-700 transition">
              Shop Now
            </button>
            <button className="bg-white px-8 py-3 rounded text-orange-600 hover:bg-gray-100 transition">
              Explore Products
            </button>
          </div>
        </div>

        {/* 🟠 سمت راست (تصویر) */}
        <div className="md:w-1/2 flex flex-col sm:flex-row gap-4">
          {/* تصویر 1 */}
          <div className="bg-black p-3 rounded w-full sm:w-[280px] flex justify-center items-center">
            <img src={hero1} alt="Bike 1" className="w-full max-w-[240px]" />
          </div>

          {/* تصویر 2 و گروه */}
          <div className="bg-orange-600 rounded p-4 w-full sm:w-[360px] text-center text-white">
            <img src={group} alt="Group" className="mx-auto w-[100px]" />
            <p className="mt-4">Fast Charging Support</p>
            <img src={hero2} alt="Bike 2" className="mt-4 rounded w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
