// import { useState } from "react";
// import {
//   CheckCircleIcon,
//   ClockIcon,
//   GlobeAltIcon,
//   BuildingOffice2Icon,
//   ShieldCheckIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/outline";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";

// const items = [
//   {
//     icon: ClockIcon,
//     title: "24/7 Emergency Support",
//     desc: "Immediate assistance whenever you need help, day or night.",
//     image:
//       "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     icon: GlobeAltIcon,
//     title: "English-Speaking Assistance",
//     desc: "Clear communication and guidance for international visitors.",
//     image:
//       "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     icon: BuildingOffice2Icon,
//     title: "Fast Hospital Coordination",
//     desc: "Quick connections with trusted healthcare providers.",
//     image:
//       "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     icon: UserGroupIcon,
//     title: "Local Expert Support",
//     desc: "Experienced professionals helping you navigate care.",
//     image:
//       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     icon: ShieldCheckIcon,
//     title: "Safe & Reliable Care",
//     desc: "Focused on your comfort, safety, and peace of mind.",
//     image:
//       "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
//   },
// ];

// export default function WhyTrust() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section id="trust" className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4">

//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* Left Carousel */}
//           <div className="relative">

//             <Swiper
//               modules={[Autoplay, EffectFade]}
//               effect="fade"
//               loop
//               autoplay={{
//                 delay: 3500,
//                 disableOnInteraction: false,
//               }}
//               onSlideChange={(swiper) =>
//                 setActiveIndex(swiper.realIndex)
//               }
//               className="rounded-3xl overflow-hidden shadow-xl"
//             >
//               {items.map((item, idx) => (
//                 <SwiperSlide key={idx}>
//                   <div className="relative">

//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-[320px] md:h-[450px] lg:h-[520px] object-cover"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Floating badge */}
//             <div className="absolute bottom-6 left-6 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 max-w-xs">

//               <div className="text-xs uppercase tracking-wider text-blue-600 font-semibold">
//                 Featured Support
//               </div>

//               <div className="mt-1 font-bold text-gray-900">
//                 {items[activeIndex].title}
//               </div>

//             </div>

//           </div>

//           {/* Right Content */}
//           <div>

//             <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
//               Why Choose Us
//             </p>

//             <h2 className="mt-3 text-4xl font-bold text-gray-900">
//               Why People Trust VESTIA
//             </h2>

//             <p className="mt-4 text-gray-600 leading-7">
//               We help travelers, expats, international students, and
//               business professionals access healthcare services across
//               Vietnam quickly, safely, and with confidence.
//             </p>

//             <div className="mt-8 space-y-5">

//               {items.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={index}
//                     className="
//                       bg-white
//                       rounded-2xl
//                       p-5
//                       shadow-sm
//                       hover:shadow-lg
//                       transition-all
//                       duration-300
//                       border border-transparent
//                       hover:border-blue-100
//                     "
//                   >
//                     <div className="flex gap-4">

//                       <div className="flex-shrink-0">
//                         <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
//                           <Icon className="w-6 h-6 text-blue-600" />
//                         </div>
//                       </div>

//                       <div>

//                         <h3 className="font-semibold text-gray-900">
//                           {item.title}
//                         </h3>

//                         <p className="mt-1 text-sm leading-6 text-gray-600">
//                           {item.desc}
//                         </p>

//                       </div>

//                     </div>
//                   </div>
//                 );
//               })}

//             </div>

//             <div className="mt-8 flex flex-wrap gap-5">

//               <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
//                 <CheckCircleIcon className="w-5 h-5 text-green-500" />
//                 Trusted Healthcare Network
//               </div>

//               <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
//                 <CheckCircleIcon className="w-5 h-5 text-green-500" />
//                 Support Across Vietnam
//               </div>

//               <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
//                 <CheckCircleIcon className="w-5 h-5 text-green-500" />
//                 International-Friendly Service
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const items = [
  {
    icon: ClockIcon,
    title: "24/7 Emergency Support",
    desc: "Immediate assistance whenever you need help, day or night.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: GlobeAltIcon,
    title: "English-Speaking Assistance",
    desc: "Clear communication and guidance for international visitors.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Fast Hospital Coordination",
    desc: "Quick connections with trusted healthcare providers.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: UserGroupIcon,
    title: "Local Expert Support",
    desc: "Experienced professionals helping you navigate care.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: ShieldCheckIcon,
    title: "Safe & Reliable Care",
    desc: "Focused on your comfort, safety, and peace of mind.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function WhyTrust() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="trust" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="relative">

            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              loop
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) =>
                setActiveIndex(swiper.realIndex)
              }
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              {items.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-[320px]
                        md:h-[450px]
                        lg:h-[520px]
                        object-cover
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Floating card */}
            <div
              className="
                absolute
                bottom-6
                left-6
                z-20
                bg-white/95
                backdrop-blur
                rounded-2xl
                shadow-xl
                px-5
                py-4
                max-w-xs
              "
            >
              <div className="text-xs uppercase tracking-wider text-blue-600 font-semibold">
                Featured Support
              </div>

              <div className="mt-1 font-bold text-gray-900">
                {items[activeIndex].title}
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              Why People Trust VESTIA
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              We help travelers, expats, international students, and
              business professionals access healthcare services across
              Vietnam quickly, safely, and with confidence.
            </p>

            <div className="mt-8 space-y-5">

              {items.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      bg-white
                      p-5
                      border
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                      ${
                        isActive
                          ? "border-blue-200 shadow-lg ring-2 ring-blue-100"
                          : "border-gray-100 shadow-sm"
                      }
                    `}
                  >

                    {/* Top accent line */}
                    <div
                      className={`
                        absolute
                        top-0
                        left-0
                        h-1
                        bg-blue-500
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />

                    <div className="flex gap-4">

                      <div className="flex-shrink-0">

                        <div
                          className={`
                            w-12
                            h-12
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "bg-blue-100"
                                : "bg-blue-50"
                            }
                            group-hover:bg-blue-100
                            group-hover:scale-110
                          `}
                        >
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>

                      </div>

                      <div>

                        <h3 className="font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          {item.desc}
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* Bottom trust badges */}
            <div className="mt-8 flex flex-wrap gap-5">

              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                Trusted Healthcare Network
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                Support Across Vietnam
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                International-Friendly Service
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}