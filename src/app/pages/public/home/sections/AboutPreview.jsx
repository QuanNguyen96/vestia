export default function AboutPreview() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">

                {/* Label */}
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        About VESTIA
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-gray-900">
                        Medical Support for Travelers in Hanoi
                    </h2>
                </div>

                {/* BLOG STYLE CARD */}
                <div className="mt-10 bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm">

                    <p className="text-gray-600 leading-8">
                        VESTIA provides fast and reliable medical assistance for
                        travelers, expats, and international visitors in Hanoi.
                    </p>

                    <p className="mt-4 text-gray-600 leading-8">
                        We help you connect with trusted hospitals, English-speaking
                        doctors, and emergency support services whenever you need help.
                    </p>

                    <p className="mt-4 text-gray-600 leading-8">
                        Our mission is to make healthcare in Vietnam easier, safer, and
                        more accessible for everyone staying far from home...
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex items-center justify-between flex-wrap gap-4">

                        <p className="text-sm text-gray-500 italic">
                            Continue reading full introduction about VESTIA...
                        </p>

                        <a
                            href="/about"
                            className="
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
                            Read More
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}