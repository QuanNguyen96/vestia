import {
    HeartIcon,
    ShieldCheckIcon,
    GlobeAltIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
    const values = [
        {
            icon: HeartIcon,
            title: "Patient First",
            desc: "We prioritize safety, comfort, and fast support for every traveler in need.",
        },
        {
            icon: ShieldCheckIcon,
            title: "Trusted Care",
            desc: "We work with verified hospitals and healthcare professionals in Hanoi.",
        },
        {
            icon: GlobeAltIcon,
            title: "International Support",
            desc: "Designed for tourists, expats, students, and business travelers.",
        },
        {
            icon: UserGroupIcon,
            title: "Human Assistance",
            desc: "Real people helping you 24/7, not automated systems.",
        },
    ];

    return (
        <div className="bg-white">

            {/* HERO */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24">
                <div className="max-w-5xl mx-auto px-4 text-center">

                    <p className="uppercase tracking-widest text-white/70 text-sm">
                        About VESTIA
                    </p>

                    <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                        Medical Support You Can Trust in Hanoi
                    </h1>

                    <p className="mt-6 text-white/80 text-lg leading-8">
                        We provide fast, reliable and professional medical assistance for
                        international travelers, expats, and visitors in Vietnam.
                    </p>

                </div>
            </section>

            {/* STORY */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4">

                    <h2 className="text-3xl font-bold text-gray-900 text-center">
                        Our Story
                    </h2>

                    <p className="mt-8 text-gray-600 leading-8">
                        VESTIA was created with a simple mission: to make healthcare
                        accessible and less stressful for foreigners in Vietnam.
                    </p>

                    <p className="mt-4 text-gray-600 leading-8">
                        Many travelers face language barriers, unfamiliar hospitals, and
                        uncertainty when medical issues arise. We bridge that gap by
                        connecting you with trusted medical services quickly and safely.
                    </p>

                    <p className="mt-4 text-gray-600 leading-8">
                        Whether it is an emergency, a consultation, or hospital coordination,
                        we ensure you are never alone in the process...
                    </p>

                </div>
            </section>

            {/* VALUES */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">

                    <h2 className="text-3xl font-bold text-center text-gray-900">
                        What We Stand For
                    </h2>

                    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {values.map((v, i) => {
                            const Icon = v.icon;

                            return (
                                <div
                                    key={i}
                                    className="
                    bg-white
                    rounded-2xl
                    p-6
                    border
                    border-gray-100
                    shadow-sm
                    hover:shadow-lg
                    transition
                  "
                                >

                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-blue-600" />
                                    </div>

                                    <h3 className="mt-4 font-semibold text-gray-900">
                                        {v.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-600 leading-6">
                                        {v.desc}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    <h2 className="text-3xl font-bold text-gray-900">
                        Need Medical Support in Vietnam?
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Our team is available 24/7 to assist you in emergencies.
                    </p>

                    <a
                        href="/contact"
                        className="
              inline-flex
              mt-8
              px-6
              py-3
              bg-blue-600
              text-white
              rounded-xl
              font-medium
              hover:bg-blue-700
              transition
            "
                    >
                        Contact Us Now
                    </a>

                </div>
            </section>

        </div>
    );
}