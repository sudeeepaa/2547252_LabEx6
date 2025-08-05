import { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./components/EventCard";

export default function App() {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState("event celebration");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ACCESS_KEY = "4eDpR9sbV7ILSpeNPvZw8BUqqnvnymf4x_OltPaoB6w";

  useEffect(() => {
    fetchImages();
  }, [query]);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=15&client_id=${ACCESS_KEY}`
      );
      setEvents(response.data.results);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch event images.");
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.search.value;
    if (input.trim()) {
      setQuery(input);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3E9DC] font-['Playfair_Display']">
      <header className="relative bg-gradient-to-r from-[#8B5E3C] to-[#B87D4B] p-10 shadow-lg text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
          EventEase
        </h1>
        <p className="text-white text-lg mt-3 italic">
          Plan • Organize • Celebrate
        </p>

        <form onSubmit={handleSearch} className="flex justify-center mt-8">
          <input
            type="text"
            name="search"
            placeholder="Search events..."
            className="p-3 border border-gray-300 rounded-l-lg w-64 sm:w-96 focus:outline-none focus:ring-2 focus:ring-[#B87D4B] transition"
          />
          <button className="px-6 bg-[#B87D4B] text-white font-semibold rounded-r-lg hover:bg-[#8B5E3C] transition">
            Search
          </button>
        </form>

        <div className="flex justify-center mt-4 flex-wrap gap-3">
          {["Conference", "Workshop", "Wedding", "Festival", "Concert", "Exhibition"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setQuery(category)}
                className="px-4 py-2 text-sm rounded-full bg-[#EADBC8] hover:bg-[#B87D4B] hover:text-white transition shadow-sm"
              >
                {category}
              </button>
            )
          )}
        </div>
      </header>

      {loading && (
        <h1 className="text-center text-2xl mt-10 animate-pulse">Loading events...</h1>
      )}
      {error && (
        <h1 className="text-center text-red-500 text-2xl mt-10">{error}</h1>
      )}

      {!loading && !error && (
        <section className="px-6 py-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#8B5E3C] mb-4">About EventEase</h2>
          <p className="text-gray-700 text-lg leading-relaxed italic">
            Welcome to EventEase – your partner in creating unforgettable moments!
            Whether it’s a wedding, corporate meetup, or a birthday celebration,
            we help you plan, organize, and manage events effortlessly.
          </p>
        </section>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.user.name}
              description={event.alt_description || "An unforgettable event"}
              image={event.urls.small}
            />
          ))}
        </div>
      )}

      <footer className="bg-[#8B5E3C] text-white py-6 text-center mt-8">
        <p className="italic">© 2025 EventEase – Celebrating Moments</p>
        <p className="text-sm mt-2 opacity-80">Follow us on Instagram @EventEase</p>
      </footer>
    </div>
  );
}
