// export default function Footer() {
//   return (
//     <footer className="border-t mt-10">
//       <div className="max-w-6xl mx-auto px-4 py-6 text-sm flex justify-between">
//         <p>© {new Date().getFullYear()} VESTIA</p>
//         <p>Vietnam Medical Travel Support</p>
//       </div>
//     </footer>
//   );
// }


import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto px-4 py-14">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <h3 className="text-2xl font-bold">
              VESTIA
            </h3>

            <p className="mt-4 text-slate-300 leading-7">
              Trusted medical assistance for travelers, expats,
              and international visitors in Hanoi.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-500/30 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

              <span className="text-sm">
                Available 24/7
              </span>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h4 className="font-semibold text-lg">
              Contact
            </h4>

            <div className="mt-5 space-y-4 text-slate-300">

              <div className="flex gap-3">
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <span>0385 022 165</span>
              </div>

              <div className="flex gap-3">
                <EnvelopeIcon className="w-5 h-5 flex-shrink-0" />
                <span>trancamnhung086@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                <span>Hanoi, Vietnam</span>
              </div>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="font-semibold text-lg">
              Quick Links
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-slate-300">

              <a href="#services" className="hover:text-white transition">
                Services
              </a>

              <a href="#trust" className="hover:text-white transition">
                Why Trust Us
              </a>

              <a href="#mission" className="hover:text-white transition">
                Our Mission
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>

            </div>

          </div>

          {/* Support */}
          <div>

            <h4 className="font-semibold text-lg">
              Emergency Support
            </h4>

            <div className="mt-5">

              <a
                href="tel:0385022165"
                className="
                  block
                  text-3xl
                  font-bold
                  text-blue-400
                "
              >
                0385 022 165
              </a>

              <p className="mt-2 text-slate-300">
                Fast response for travelers needing
                medical assistance in Hanoi.
              </p>

              <div className="mt-5 flex gap-3">

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-xl
                    bg-white/10
                    px-4
                    py-2
                    hover:bg-white/20
                    transition
                  "
                >
                  Facebook
                </a>

                <a
                  href="https://zalo.me/0385022165"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-xl
                    bg-white/10
                    px-4
                    py-2
                    hover:bg-white/20
                    transition
                  "
                >
                  Zalo
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div
          className="
            max-w-6xl
            mx-auto
            px-4
            py-5
            flex
            flex-col
            md:flex-row
            justify-between
            gap-3
            text-sm
            text-slate-400
          "
        >
          <p>
            © {new Date().getFullYear()} VESTIA. All rights reserved.
          </p>

          <p>
            Vietnamese Warmth, Complete Trust.
          </p>

        </div>

      </div>

    </footer>
  );
}