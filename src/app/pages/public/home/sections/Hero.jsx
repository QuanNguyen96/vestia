
// export default function Hero() {
//     return (
//         <section className="relative w-full min-h-[650px] overflow-hidden">

//             {/* BACKGROUND GRADIENT (PRO MEDICAL STYLE) */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9] via-[#2563eb] to-[#1d4ed8]" />

//             {/* soft overlay glow */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />

//             {/* diagonal white cut */}
//             <div
//                 className="absolute top-0 right-0 w-1/2 h-full bg-white"
//                 style={{
//                     clipPath: "polygon(0 0, 100% 0, 0 100%, 0% 100%)",
//                 }}
//             />

//             {/* CONTENT */}
//             <div className="relative z-10 max-w-6xl mx-auto px-6 h-[650px] flex items-center">

//                 {/* LEFT TEXT */}
//                 <div className="w-full md:w-1/2 text-white pr-10">

//                     <p className="uppercase tracking-widest text-white/80 text-sm">
//                         Medical Support
//                     </p>

//                     <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
//                         Your health, our priority
//                     </h1>

//                     <p className="mt-5 text-white/80 text-lg">
//                         Fast medical assistance for travelers, expats, and international visitors.
//                         We connect you with trusted hospitals and doctors in Vietnam.
//                     </p>

//                     <div className="mt-8 flex gap-4">
//                         <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:scale-105 transition">
//                             Read More
//                         </button>

//                         <button className="px-6 py-3 border border-white/70 text-white rounded-lg hover:bg-white/10 transition">
//                             Contact Us
//                         </button>
//                     </div>

//                     <div className="mt-10 flex gap-1">
//                         {[...Array(6)].map((_, i) => (
//                             <div key={i} className="w-2 h-2 bg-white/40 rounded-full" />
//                         ))}
//                     </div>
//                 </div>

//                 {/* RIGHT IMAGE (FIXED BIGGER + FULL COVER) */}
//                 <div className="hidden md:flex w-1/2 justify-end items-center relative">

//                     {/* glow background */}
//                     <div className="absolute w-[520px] h-[520px] bg-cyan-300/30 rounded-full blur-3xl -right-10" />

//                     <img
//                         src="https://png.pngtree.com/background/20211216/original/pngtree-medical-health-daytime-doctors-and-patients-outdoor-examination-photography-map-with-picture-image_1507220.jpg"
//                         alt="doctor"
//                         className="relative w-[520px] h-[520px] object-cover rounded-2xl shadow-2xl scale-105"
//                     />
//                 </div>

//             </div>

//             {/* BOTTOM WAVE */}
//             <div className="absolute bottom-0 left-0 w-full">
//                 <svg viewBox="0 0 1440 320" className="w-full h-[120px]">
//                     <path
//                         fill="#ffffff"
//                         d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128L1440,320L0,320Z"
//                     />
//                 </svg>
//             </div>

//         </section>
//     );
// }


export default function Hero() {
  return (
    <section className="relative w-full min-h-[650px] overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9] via-[#2563eb] to-[#1d4ed8]" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />

      {/* Diagonal Shape */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-white"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%, 0% 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-[650px] flex items-center">

        {/* LEFT */}
        <div className="w-full md:w-1/2 text-white pr-0 md:pr-10">

          <p className="uppercase tracking-widest text-white/80 text-sm">
            Medical Support
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Your Health, Our Priority
          </h1>

          <p className="mt-5 text-white/80 text-lg leading-8">
            Fast medical assistance for travelers, expats, and international
            visitors. We connect you with trusted hospitals and doctors
            throughout Vietnam.
          </p>

          {/* CONTACT CARD */}
          <div
            className="
              mt-6
              inline-flex
              flex-wrap
              items-center
              gap-4
              rounded-2xl
              border
              border-white/20
              bg-white/10
              backdrop-blur-md
              px-5
              py-4
            "
          >

            <div>
              <p className="text-xs uppercase tracking-wider text-white/70">
                Medical Coordinator
              </p>

              <p className="font-semibold text-white">
                Trần Cẩm Nhung
              </p>
            </div>

            <div className="hidden sm:block h-10 w-px bg-white/20" />

            <div>
              <p className="text-xs uppercase tracking-wider text-white/70">
                Emergency Hotline
              </p>

              <a
                href="tel:0385022165"
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-white
                  hover:text-cyan-200
                  transition
                "
              >
                0385 022 165
              </a>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button
              className="
                px-6
                py-3
                bg-white
                text-blue-600
                font-semibold
                rounded-lg
                shadow-md
                hover:scale-105
                transition
              "
            >
              Read More
            </button>

            <button
              className="
                px-6
                py-3
                border
                border-white/70
                text-white
                rounded-lg
                hover:bg-white/10
                transition
              "
            >
              Contact Us
            </button>

          </div>

          {/* QUOTE */}
          <div className="mt-8">

            <p className="italic text-white/80">
              “Vietnamese Warmth, Complete Trust.”
            </p>

            <div className="mt-4 flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/40"
                />
              ))}
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex w-1/2 justify-end items-center relative">

          <div
            className="
              absolute
              w-[520px]
              h-[520px]
              bg-cyan-300/30
              rounded-full
              blur-3xl
              -right-10
            "
          />

          <img
            src="https://png.pngtree.com/background/20211216/original/pngtree-medical-health-daytime-doctors-and-patients-outdoor-examination-photography-map-with-picture-image_1507220.jpg"
            alt="doctor"
            className="
              relative
              w-[520px]
              h-[520px]
              object-cover
              rounded-2xl
              shadow-2xl
              scale-105
            "
          />

        </div>

      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-[120px]">
          <path
            fill="#ffffff"
            d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128L1440,320L0,320Z"
          />
        </svg>
      </div>

    </section>
  );
}