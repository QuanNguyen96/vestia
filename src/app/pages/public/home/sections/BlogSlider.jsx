
const blogs = [
    {
        title: "Top International Hospitals in Hanoi for Foreign Travelers",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "What to Do During a Medical Emergency in Hanoi",
        img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Finding English-Speaking Doctors in Hanoi",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Healthcare Support for Tourists Visiting Hanoi",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Hospital Coordination Services in Hanoi",
        img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Travel Insurance and Medical Care in Hanoi",
        img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
    },
    
];

export default function BlogSlider() {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">

                <h2 className="text-3xl font-bold text-center">
                    Travel Health Insights
                </h2>

                <div className="mt-10 grid md:grid-cols-3 gap-6">
                    {blogs.map((b, i) => (
                        <article
                            key={i}
                            className="rounded-lg overflow-hidden shadow-sm bg-white"
                        >
                            <img
                                src={b.img}
                                alt={b.title}
                                className="h-48 w-full object-cover"
                            />

                            <div className="p-4">
                                <h3 className="font-semibold">
                                    {b.title}
                                </h3>
                            </div>

                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}