export default function EventCard({ title, description, image }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transform transition hover:rotate-1 hover:scale-105 hover:shadow-2xl border-2 border-[#F3E9DC]">
      <img
        src={image}
        alt={description}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-[#B87D4B]">{title}</h2>
        <p className="text-gray-600 mt-2 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
