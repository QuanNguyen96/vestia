import {
  HeartIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const values = [
  {
    icon: HeartIcon,
    title: "Compassion",
    desc: "Putting people first in every situation.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Trust",
    desc: "Reliable support when travelers need it most.",
  },
  {
    icon: GlobeAltIcon,
    title: "Accessibility",
    desc: "Helping international visitors navigate healthcare with confidence.",
  },
];

export default function Mission() {
  return (
    <section
      id="mission"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-4">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Mission
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Making Healthcare More Accessible
          </h2>

          <div className="mt-8 max-w-3xl mx-auto">

            <span
              aria-hidden="true"
              className="text-6xl text-blue-100 font-serif"
            >
              &ldquo;
            </span>

            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 -mt-4">
              We believe every traveler deserves safety, comfort, and care
              &mdash; even far from home. VESTIA exists to ensure international
              visitors feel protected, supported, and understood throughout
              their healthcare journey in Vietnam.
            </p>

          </div>

        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  text-center
                  shadow-sm
                  border
                  border-gray-100
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-2 text-gray-600 leading-6">
                  {value.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}