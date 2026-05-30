const users = [
  { label: "Tourists", color: "bg-blue-100 text-blue-700" },
  { label: "Backpackers", color: "bg-green-100 text-green-700" },
  { label: "Business Travelers", color: "bg-purple-100 text-purple-700" },
  { label: "Digital Nomads", color: "bg-pink-100 text-pink-700" },
  { label: "Expats", color: "bg-yellow-100 text-yellow-700" },
  { label: "International Students", color: "bg-indigo-100 text-indigo-700" },
  { label: "Remote Workers", color: "bg-cyan-100 text-cyan-700" },
  { label: "Exchange Students", color: "bg-orange-100 text-orange-700" },
  { label: "Families", color: "bg-rose-100 text-rose-700" },
  { label: "Solo Travelers", color: "bg-teal-100 text-teal-700" },
  { label: "Retirees", color: "bg-lime-100 text-lime-700" },
  { label: "Teachers", color: "bg-sky-100 text-sky-700" },
  { label: "Volunteers", color: "bg-emerald-100 text-emerald-700" },
  { label: "Flight Crew", color: "bg-violet-100 text-violet-700" },
  { label: "Travel Bloggers", color: "bg-fuchsia-100 text-fuchsia-700" },
  { label: "Startup Founders", color: "bg-amber-100 text-amber-700" },
  { label: "Conference Attendees", color: "bg-red-100 text-red-700" },
  { label: "Medical Tourists", color: "bg-blue-100 text-blue-700" },
];

export default function WhoWeSupport() {
  return (
    <section className="py-20 bg-white" id="audience">
      <div className="max-w-5xl mx-auto px-4 text-center">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Who We Support
        </p>

        <h2 className="mt-3 text-4xl font-bold text-gray-900">
          Healthcare Support for Every Journey
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Whether you&rsquo;re visiting Vietnam for a few days or staying
          long-term, VESTIA helps you access healthcare services with
          confidence.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {users.map((user, index) => (
            <div
              key={index}
              className={`
                ${user.color}
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                shadow-sm
                hover:scale-105
                transition-all
                duration-200
                cursor-default
              `}
            >
              {user.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}