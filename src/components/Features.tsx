import gps from "../assets/locicon.png";
import charg from "../assets/sharzhicon.png";
import speed from "../assets/speedicon.png";
import power from "../assets/powericon.png";

const utilitys = [
  {
    id: 1,
    img: gps,
    title: "GPS Tracking or Anti-Theft",
    des: "Locate your bike anytime with built-in GPS and anti-theft support.",
  },
  {
    id: 2,
    img: charg,
    title: "Super Charging Battery",
    des: "Fast-charging battery ensures extended ride with minimal downtime.",
  },
  {
    id: 3,
    img: speed,
    title: "Monitoring Speed Trip Status",
    des: "Track your speed and trip stats with precision.",
  },
  {
    id: 4,
    img: power,
    title: "Power Your Ride Conditions",
    des: "Adjust settings to power your ride based on terrain and needs.",
  },
];

function Features() {
  return (
    <section className="bg-gray-900 py-16 px-6">
      <div className="container mx-auto">
        {/* عنوان اصلی */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            OUR FEATURES & FACILITIES
          </h2>
          <p className="text-gray-400 mt-2">
            Explore the best capabilities built into our smart bikes.
          </p>
        </div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {utilitys.map((item) => (
            <div
              key={item.id}
              className="bg-orange-600 rounded-xl shadow-lg p-6 text-center flex flex-col items-center gap-4 transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              {/* آیکن با بک‌گراند خاص */}
              <div className="relative w-[60px] h-[60px]">
                <img src={item.img} alt={item.title} className="z-10 relative" />
                <div className="absolute top-1 -right-3 bg-orange-800 rounded-tl-[10px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[18px] w-full h-full -z-10"></div>
              </div>

              {/* عنوان و توضیح */}
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white opacity-80">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
