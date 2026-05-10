export default function HotelRoyalGalleria() {
  const rooms = [
    {
      name: 'Deluxe Room',
      price: '₹2450',
      desc: 'Elegant interiors with premium comfort and complimentary breakfast.'
    },
    {
      name: 'Super Deluxe',
      price: '₹3250',
      desc: 'Luxury stay experience with spacious rooms and modern amenities.'
    },
    {
      name: 'Executive Rooms',
      price: '₹3450',
      desc: 'Perfect for business and premium travelers seeking refined comfort.'
    },
    {
      name: 'Family Room',
      price: '₹4850',
      desc: 'Large family-friendly suites designed for relaxation and togetherness.'
    },
    {
      name: 'Suits Rooms',
      price: '₹5950',
      desc: 'Our finest luxury suites crafted for a royal and unforgettable stay.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="tracking-[6px] uppercase text-yellow-400 mb-4">Luxury • Comfort • Elegance</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            HOTEL <span className="text-yellow-400">ROYAL GALLERIA</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Experience timeless luxury, royal hospitality, and unforgettable stays.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#rooms"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-2xl transition duration-300 shadow-2xl"
            >
              Explore Rooms
            </a>

            <a
              href="#booking"
              className="border border-yellow-400 hover:bg-yellow-500 hover:text-black text-yellow-400 px-8 py-4 rounded-2xl transition duration-300"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-16 bg-zinc-950">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <p className="text-yellow-400 uppercase tracking-[4px] mb-4">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Luxury Crafted For Royal Experiences
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hotel Royal Galleria offers a premium hospitality experience designed with elegance, comfort, and sophistication. Whether you are traveling for business, family vacations, or special occasions, our luxurious rooms and warm service create unforgettable memories.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Enjoy complimentary breakfast, modern interiors, peaceful ambiance, and personalized services tailored to every guest.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Hotel"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-6 rounded-2xl shadow-2xl">
              <h3 className=\"text-3xl font-bold\">3★</h3>
              <p className="font-medium">Luxury Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-24 px-6 md:px-16 bg-black">
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[4px] mb-4">Our Rooms</p>
          <h2 className="text-4xl md:text-5xl font-bold">Exclusive Room Collection</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl"
            >
              <img
                src={`https://source.unsplash.com/800x600/?luxury-hotel-room,hotel-room,${index}`}
                alt={room.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{room.name}</h3>
                  <span className="text-yellow-400 text-xl font-semibold">{room.price}</span>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">{room.desc}</p>

                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-xl font-semibold transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 px-6 md:px-16 bg-zinc-950">
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[4px] mb-4">Amenities</p>
          <h2 className="text-4xl md:text-5xl font-bold">Premium Facilities</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            'Complimentary Breakfast',
            'Luxury Suites',
            '24/7 Room Service',
            'Free High-Speed WiFi',
            'Family Friendly',
            'Elegant Interiors',
            'Private Parking',
            'Premium Hospitality'
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black border border-yellow-500/20 p-8 rounded-3xl text-center hover:border-yellow-400 transition duration-300"
            >
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-24 px-6 md:px-16 bg-black">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-3xl p-10 shadow-2xl border border-zinc-800">
          <div className="text-center mb-10">
            <p className="text-yellow-400 uppercase tracking-[4px] mb-4">Reservation</p>
            <h2 className="text-4xl md:text-5xl font-bold">Book Your Luxury Stay</h2>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-black border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-black border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-yellow-400"
            />

            <input
              type="date"
              className="bg-black border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-yellow-400"
            />

            <input
              type="date"
              className="bg-black border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-yellow-400"
            />

            <select className="bg-black border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-yellow-400">
              <option>Select Room Type</option>
              {rooms.map((room, index) => (
                <option key={index}>{room.name}</option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Guests"
              className="bg-black border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-yellow-400"
            />

            <textarea
              placeholder="Special Requests"
              rows="4"
              className="md:col-span-2 bg-black border border-zinc-700 rounded-xl p-4 focus:outline-none focus:border-yellow-400"
            ></textarea>

            <button className="md:col-span-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-2xl text-lg transition duration-300 shadow-2xl">
              Confirm Booking
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-16 bg-zinc-950">
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[4px] mb-4">Guest Reviews</p>
          <h2 className="text-4xl md:text-5xl font-bold">What Our Guests Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            'Absolutely luxurious stay with amazing hospitality and beautiful rooms.',
            'The family room was spacious and elegant. Breakfast was excellent!',
            'One of the best hotel experiences with royal comfort and premium service.'
          ].map((review, index) => (
            <div
              key={index}
              className="bg-black border border-zinc-800 p-8 rounded-3xl shadow-xl"
            >
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-300 leading-relaxed mb-6">“{review}”</p>
              <h4 className="font-semibold">Happy Guest</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-10 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4 text-yellow-400">HOTEL ROYAL GALLERIA</h3>
        <p className="text-gray-400 mb-4">Luxury Redefined. Comfort Perfected.</p>
        <p className="text-gray-500">Check-In: 12:00 PM onwards • Check-Out: 10:00 AM</p>
        <p className="text-yellow-400 text-xl mt-4 font-semibold">+91 98980 48500</p>
        <p className="text-gray-600 mt-6 text-sm">© 2026 Hotel Royal Galleria. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
