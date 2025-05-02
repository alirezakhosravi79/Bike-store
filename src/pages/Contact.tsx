import React from "react";

function Contact() {
  return (
    <section className="bg-black text-white py-16 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-400">
          Have questions or need assistance? Fill out the form below or reach us via the contact details.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-900 rounded-xl shadow-md p-6">
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
              rows={5}
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 py-2 rounded font-semibold hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center text-gray-400">
        <p>Email: support@bikeshop.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Cycle Road, Bike City, USA</p>
      </div>
    </section>
  );
}

export default Contact;
