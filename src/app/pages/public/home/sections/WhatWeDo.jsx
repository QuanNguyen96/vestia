import {
  LifebuoyIcon,
  BuildingOffice2Icon,
  HeartIcon,
  LanguageIcon,
  MapPinIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: LifebuoyIcon,
    title: "Emergency Support",
    desc: "Immediate assistance for urgent medical situations anywhere in Vietnam.",
    cardBg: "bg-red-100/20",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    hoverBg: "group-hover:bg-red-600",
    borderColor: "hover:border-red-200",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Hospital Coordination",
    desc: "Quick access to trusted hospitals, clinics, and healthcare providers.",
    cardBg: "bg-blue-100/20",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
    borderColor: "hover:border-blue-200",
  },
  {
    icon: HeartIcon,
    title: "Health Consultation",
    desc: "Guidance on symptoms, treatment options, and next steps.",
    cardBg: "bg-pink-100/20",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    hoverBg: "group-hover:bg-pink-600",
    borderColor: "hover:border-pink-200",
  },
  {
    icon: LanguageIcon,
    title: "Translation Assistance",
    desc: "Bridge language barriers between patients and medical staff.",
    cardBg: "bg-purple-100/20",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    hoverBg: "group-hover:bg-purple-600",
    borderColor: "hover:border-purple-200",
  },
  {
    icon: MapPinIcon,
    title: "Local Medical Guidance",
    desc: "Help finding nearby pharmacies, hospitals, and emergency services.",
    cardBg: "bg-green-100/20",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    hoverBg: "group-hover:bg-green-600",
    borderColor: "hover:border-green-200",
  },
  {
    icon: BoltIcon,
    title: "Rapid Response",
    desc: "Fast support when time matters most during medical emergencies.",
    cardBg: "bg-amber-100/20",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    hoverBg: "group-hover:bg-amber-600",
    borderColor: "hover:border-amber-200",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Services
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Medical Assistance for Travelers
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
            We help tourists, expats, business travelers, and international
            students access healthcare services quickly and confidently while
            staying in Vietnam.
          </p>

        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`
                  group
                  rounded-3xl
                  p-8
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  ${service.cardBg}
                  ${service.borderColor}
                `}
              >
                <div
                  className={`
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    ${service.iconBg}
                    ${service.hoverBg}
                  `}
                >
                  <Icon
                    className={`
                      w-7
                      h-7
                      transition-colors
                      duration-300
                      ${service.iconColor}
                      group-hover:text-white
                    `}
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {service.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}