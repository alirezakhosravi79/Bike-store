import best from '../assets/bestbike.png';

function BestSeller() {
  return (
    <section className="bg-white py-16 px-6">
      {/* عنوان اصلی */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Best Sellers Products This Week
        </h2>
      </div>

      {/* باکس‌های اصلی */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-10">
        {/* باکس چپ */}
        <div className="flex-1 flex flex-col gap-4">
          {/* بخش بالا - نارنجی (وسط‌چین و سایه قوی‌تر) */}
          <div className="bg-orange-600 text-white p-6 rounded-xl shadow-2xl flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-4">
              The Most Popular Bike Of The Season
            </h3>
            <button className="bg-white text-orange-600 px-6 py-2 rounded font-semibold">
              Show More
            </button>
          </div>

          {/* بخش پایین - سفید با سایه بیشتر */}
          <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-2xl">
            <h4 className="text-sm text-gray-500 mb-2">The Most Popular</h4>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want To Take Cycling To The Next Level
            </h3>
            <p className="text-gray-600">
              Be creative and organized to find more time to ride.
            </p>
          </div>
        </div>

        {/* باکس راست - مشکی */}
        <div className="flex-1 bg-black text-white p-6 rounded-xl shadow-md flex flex-col gap-6">
          {/* بالا: متن چپ و عکس راست */}
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* متن */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">
                Super Deluxe Tandem 7i
              </h3>
              <p className="text-gray-300">
                Lightweight 16-inch steel frame is the perfect bike for rides around your neighborhood or trails.
              </p>
            </div>
            {/* عکس */}
            <div className="flex-1">
              <img
                src={best}
                alt="bike"
                className="rounded w-full max-w-[300px] mx-auto"
              />
            </div>
          </div>

          {/* پایین: دکمه و ویژگی‌ها */}
          <div className="flex flex-col mt-12 md:flex-row items-start md:items-center justify-between gap-6">
            <button className="bg-orange-600 px-6 py-2 rounded font-semibold text-white">
              Show More
            </button>
            <div className="flex gap-6 text-sm">
              <div>
                <p className="text-gray-400">Material</p>
                <p>Carbon Fiber</p>
              </div>
              <div>
                <p className="text-gray-400">Speed</p>
                <p>45 km/h</p>
              </div>
              <div>
                <p className="text-gray-400">Weight</p>
                <p>12 kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
