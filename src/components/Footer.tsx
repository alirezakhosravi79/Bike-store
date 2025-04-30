function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 mt-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
  
          {/* ستون اول - برند */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">BikeStore</h3>
            <p className="text-gray-400">
              Premium bikes and accessories for your adventures. Ride better, ride smarter.
            </p>
          </div>
  
          {/* ستون دوم - لینک‌ها */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Products</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
  
          {/* ستون سوم - تماس */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@bikestore.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
            <p className="text-gray-400">Location: 123 Bike St, NY, USA</p>
          </div>
        </div>
  
        {/* خط جداکننده */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} BikeStore. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  