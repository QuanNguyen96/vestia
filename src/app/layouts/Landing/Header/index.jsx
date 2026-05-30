import { useLocation, useNavigate } from "react-router-dom";
import logo from "assets/appLogo.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (id) => {
    // Nếu đang ở trang khác Home → quay về Home trước
    if (location.pathname !== "/") {
      navigate("/");

      // delay để DOM load xong rồi scroll
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}

        {/* <div
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="font-bold text-2xl text-blue-600">
            VESTIA
          </div>

          <div className="text-xs text-gray-500">
            Medical Support in Hanoi
          </div>
        </div> */}

        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          {/* LEFT LOGO */}
          <img
            src={logo}
            alt="VESTIA Logo"
            className="w-10 h-10 object-contain"
          />

          {/* RIGHT TEXT */}
          <div>
            <div className="font-bold text-2xl text-blue-600 leading-tight">
              VESTIA
            </div>

            <div className="text-xs text-gray-500">
              Medical Support in Hanoi
            </div>
          </div>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">

          {/* <button onClick={() => handleNav("about")} className="hover:text-blue-600">
            About
          </button> */}
          <a href="/about" className="hover:text-blue-600">
            About
          </a>

          <button onClick={() => handleNav("services")} className="hover:text-blue-600">
            Services
          </button>

          <button onClick={() => handleNav("trust")} className="hover:text-blue-600">
            Why Trust Us
          </button>

          <button onClick={() => handleNav("mission")} className="hover:text-blue-600">
            Mission
          </button>

          <button onClick={() => handleNav("contact")} className="hover:text-blue-600">
            Contact
          </button>

        </nav>

        {/* CTA */}
        <a
          href="tel:0385022165"
          className="
            px-5
            py-2.5
            bg-blue-600
            text-white
            rounded-xl
            font-medium
            hover:bg-blue-700
            transition
          "
        >
          Get Help Now
        </a>

      </div>
    </header>
  );
}