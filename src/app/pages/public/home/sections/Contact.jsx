import {
    PhoneIcon,
    EnvelopeIcon,
    ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-b from-blue-50 to-white"
        >
            <div className="max-w-6xl mx-auto px-4">

                <div
                    className="
            overflow-hidden
            rounded-3xl
            bg-white
            border
            border-blue-100
            shadow-xl
          "
                >
                    <div className="grid lg:grid-cols-2">

                        {/* Left */}
                        <div className="p-8 lg:p-12 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                            <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
                                24/7 Support
                            </p>

                            <h2 className="mt-3 text-4xl font-bold">
                                Need Help in Vietnam?
                            </h2>

                            <p className="mt-4 text-blue-50 leading-7">
                                Our team helps international visitors access trusted medical
                                services quickly and safely anywhere in Vietnam.
                            </p>

                            <div className="mt-8">

                                <p className="text-sm uppercase tracking-wider text-blue-100">
                                    Emergency Hotline
                                </p>

                                <a
                                    href="tel:0385022165"
                                    className="
                    mt-2
                    inline-flex
                    items-center
                    gap-3
                    text-4xl
                    font-bold
                    hover:opacity-90
                  "
                                >
                                    <PhoneIcon className="w-8 h-8" />
                                    0385 022 165
                                </a>

                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">

                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-white/15
                    px-5
                    py-3
                    backdrop-blur
                    hover:bg-white/20
                    transition
                  "
                                >
                                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                                    Facebook Page
                                </a>

                                <a
                                    href="https://zalo.me/0385022165"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-5
                    py-3
                    text-blue-700
                    font-semibold
                    hover:scale-105
                    transition
                  "
                                >
                                    Chat via Zalo
                                </a>

                            </div>

                            <p className="mt-10 text-sm italic text-blue-100">
                                “Vietnamese Warmth, Complete Trust.”
                            </p>

                        </div>

                        {/* Right */}
                        <div className="p-8 lg:p-12">

                            <h3 className="text-2xl font-bold text-gray-900">
                                Request Assistance
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Leave your contact details and our team will reach out as soon
                                as possible.
                            </p>

                            <form className="mt-8 space-y-4">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-500
                  "
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-500
                  "
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-500
                  "
                                />

                                <textarea
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-500
                  "
                                />

                                <button
                                    type="submit"
                                    className="
                    w-full
                    rounded-xl
                    bg-blue-600
                    py-3
                    font-semibold
                    text-white
                    hover:bg-blue-700
                    transition
                  "
                                >
                                    Request Support
                                </button>

                            </form>

                            {/* <div className="mt-6 flex items-center gap-2 text-gray-600">
                                <EnvelopeIcon className="w-5 h-5" />
                                <span>trancamnhung086@gmail.com</span>
                            </div> */}

                            {/* Email Contact */}
                            <div
                                className="
    mt-8
    rounded-2xl
    border
    border-blue-100
    bg-blue-50
    p-4
  "
                            >
                                <div className="flex items-start gap-3">

                                    <div
                                        className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-blue-100
      "
                                    >
                                        <EnvelopeIcon className="h-5 w-5 text-blue-600" />
                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Email Support
                                        </p>

                                        <a
                                            href="mailto:trancamnhung086@gmail.com"
                                            className="
          mt-1
          block
          font-semibold
          text-blue-700
          hover:underline
          break-all
        "
                                        >
                                            trancamnhung086@gmail.com
                                        </a>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}



// import {
//   PhoneIcon,
//   EnvelopeIcon,
//   ChatBubbleLeftRightIcon,
// } from "@heroicons/react/24/outline";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-20 bg-gradient-to-b from-blue-50 to-white"
//     >
//       <div className="max-w-6xl mx-auto px-4">

//         <div
//           className="
//             overflow-hidden
//             rounded-3xl
//             bg-white
//             border
//             border-blue-100
//             shadow-xl
//           "
//         >
//           <div className="grid lg:grid-cols-2">

//             {/* LEFT SIDE */}
//             <div className="p-8 lg:p-12 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

//               <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
//                 24/7 Medical Assistance
//               </p>

//               <h2 className="mt-3 text-4xl font-bold">
//                 Need Help in Vietnam?
//               </h2>

//               <p className="mt-4 text-blue-50 leading-7">
//                 Our team supports international visitors with emergency
//                 assistance, hospital coordination, translation services,
//                 and healthcare guidance across Vietnam.
//               </p>

//               {/* HOTLINE + EMAIL */}
//               <div className="mt-8 grid gap-4 sm:grid-cols-2">

//                 {/* Phone */}
//                 <a
//                   href="tel:0385022165"
//                   className="
//                     rounded-2xl
//                     bg-white/15
//                     backdrop-blur
//                     p-5
//                     hover:bg-white/20
//                     transition
//                   "
//                 >
//                   <div className="flex items-center gap-2 text-blue-100">
//                     <PhoneIcon className="w-5 h-5" />
//                     <span className="text-sm uppercase tracking-wide">
//                       Emergency Hotline
//                     </span>
//                   </div>

//                   <p className="mt-3 text-2xl lg:text-3xl font-bold">
//                     0385 022 165
//                   </p>

//                   <p className="mt-1 text-sm text-blue-100">
//                     Tap to call instantly
//                   </p>
//                 </a>

//                 {/* Email */}
//                 <a
//                   href="mailto:trancamnhung086@gmail.com"
//                   className="
//                     rounded-2xl
//                     bg-white/15
//                     backdrop-blur
//                     p-5
//                     hover:bg-white/20
//                     transition
//                   "
//                 >
//                   <div className="flex items-center gap-2 text-blue-100">
//                     <EnvelopeIcon className="w-5 h-5" />
//                     <span className="text-sm uppercase tracking-wide">
//                       Email Support
//                     </span>
//                   </div>

//                   <p className="mt-3 text-base lg:text-lg font-semibold break-all">
//                     trancamnhung086
//                     @gmail.com
//                   </p>

//                   <p className="mt-1 text-sm text-blue-100">
//                     Available for inquiries
//                   </p>
//                 </a>

//               </div>

//               {/* SOCIAL BUTTONS */}
//               <div className="mt-8 flex flex-wrap gap-3">

//                 <a
//                   href="https://facebook.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     rounded-xl
//                     bg-white/15
//                     px-5
//                     py-3
//                     backdrop-blur
//                     hover:bg-white/20
//                     transition
//                   "
//                 >
//                   <ChatBubbleLeftRightIcon className="w-5 h-5" />
//                   Facebook Page
//                 </a>

//                 <a
//                   href="https://zalo.me/0385022165"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     rounded-xl
//                     bg-white
//                     px-5
//                     py-3
//                     text-blue-700
//                     font-semibold
//                     hover:scale-105
//                     transition
//                   "
//                 >
//                   Chat via Zalo
//                 </a>

//               </div>

//               {/* EMAIL STRIP */}
//               <div
//                 className="
//                   mt-8
//                   rounded-2xl
//                   border
//                   border-white/20
//                   bg-white/10
//                   px-5
//                   py-4
//                 "
//               >
//                 <div className="flex items-center gap-3">

//                   <EnvelopeIcon className="w-6 h-6 flex-shrink-0" />

//                   <div>
//                     <p className="text-sm text-blue-100">
//                       Direct Email Contact
//                     </p>

//                     <a
//                       href="mailto:trancamnhung086@gmail.com"
//                       className="font-semibold hover:underline break-all"
//                     >
//                       trancamnhung086@gmail.com
//                     </a>
//                   </div>

//                 </div>
//               </div>

//               <p className="mt-10 text-sm italic text-blue-100">
//                 “Vietnamese Warmth, Complete Trust.”
//               </p>

//             </div>

//             {/* RIGHT SIDE */}
//             <div className="p-8 lg:p-12">

//               <h3 className="text-2xl font-bold text-gray-900">
//                 Request Assistance
//               </h3>

//               <p className="mt-3 text-gray-600">
//                 Leave your information and our support team will contact
//                 you shortly.
//               </p>

//               <form className="mt-8 space-y-4">

//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="
//                     w-full
//                     rounded-xl
//                     border
//                     border-gray-200
//                     px-4
//                     py-3
//                     outline-none
//                     focus:border-blue-500
//                   "
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="
//                     w-full
//                     rounded-xl
//                     border
//                     border-gray-200
//                     px-4
//                     py-3
//                     outline-none
//                     focus:border-blue-500
//                   "
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="
//                     w-full
//                     rounded-xl
//                     border
//                     border-gray-200
//                     px-4
//                     py-3
//                     outline-none
//                     focus:border-blue-500
//                   "
//                 />

//                 <textarea
//                   rows={4}
//                   placeholder="How can we help you?"
//                   className="
//                     w-full
//                     rounded-xl
//                     border
//                     border-gray-200
//                     px-4
//                     py-3
//                     outline-none
//                     focus:border-blue-500
//                   "
//                 />

//                 <button
//                   type="submit"
//                   className="
//                     w-full
//                     rounded-xl
//                     bg-blue-600
//                     py-3
//                     font-semibold
//                     text-white
//                     hover:bg-blue-700
//                     transition
//                   "
//                 >
//                   Request Support
//                 </button>

//               </form>

//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }