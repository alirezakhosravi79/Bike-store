import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import { FaBicycle, FaTools, FaGlobe } from "react-icons/fa";

function About() {
  return (
    <section className="bg-black text-white py-16 px-6">
      {/* معرفی برند */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="text-gray-400 text-lg">
          At <span className="text-orange-500 font-semibold">Bike</span>, we blend passion and performance.
          Our mission is to bring top-quality bicycles and unmatched customer service to riders of all levels.
        </p>
      </div>

      {/* ویژگی‌ها با آیکون */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
        <div className="text-center p-6 border border-gray-800 rounded-xl bg-gray-900">
          <FaBicycle className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Performance Bikes</h3>
          <p className="text-gray-400">
            Explore bikes designed for speed, adventure, and ultimate control.
          </p>
        </div>
        <div className="text-center p-6 border border-gray-800 rounded-xl bg-gray-900">
          <FaTools className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
          <p className="text-gray-400">
            Get maintenance tips and help from real cycling experts.
          </p>
        </div>
        <div className="text-center p-6 border border-gray-800 rounded-xl bg-gray-900">
          <FaGlobe className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
          <p className="text-gray-400">
            We deliver bikes and parts worldwide with trusted service.
          </p>
        </div>
      </div>

      {/* تیم ما */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-400">
          Passionate riders and professionals behind the brand.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[{ name: "Alex Johnson", role: "Founder", img: team1 },
          { name: "Sarah Lee", role: "Product Manager", img: team2 },
          { name: "Mike Brown", role: "Lead Technician", img: team3 }
        ].map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.img}
              alt={member.name}
              className="rounded-full w-32 h-32 mx-auto mb-4 object-cover border-4 border-orange-500"
            />
            <h4 className="text-lg font-semibold">{member.name}</h4>
            <p className="text-gray-400 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
