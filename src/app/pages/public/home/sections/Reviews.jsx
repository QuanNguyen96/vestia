import { useRef } from "react";
import { register } from "swiper/element/bundle";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import invariant from "tiny-invariant";

import { Button, Card } from "components/ui";
import { useIsomorphicEffect } from "hooks";

register();

const reviews = [
  {
    uid: "1",
    name: "John Anderson",
    country: "USA",
    avatar: "https://i.pravatar.cc/100?img=11",
    date: "2 weeks ago",
    rating: 5,
    text: "Fast support when I got sick in Hanoi. Very professional team and excellent communication.",
  },
  {
    uid: "2",
    name: "Emily Watson",
    country: "United Kingdom",
    avatar: "https://i.pravatar.cc/100?img=5",
    date: "1 month ago",
    rating: 5,
    text: "They helped me find a hospital and translator within 30 minutes. Highly recommended.",
  },
  {
    uid: "3",
    name: "Mark Johnson",
    country: "Australia",
    avatar: "https://i.pravatar.cc/100?img=15",
    date: "3 weeks ago",
    rating: 5,
    text: "Reliable service for travelers. Everything was arranged quickly and smoothly.",
  },
  {
    uid: "4",
    name: "Sarah Miller",
    country: "Canada",
    avatar: "https://i.pravatar.cc/100?img=20",
    date: "5 days ago",
    rating: 5,
    text: "Excellent medical assistance while travelling in Vietnam. Friendly and responsive staff.",
  },
];

export default function Reviews() {
  const carouselRef = useRef(null);

  useIsomorphicEffect(() => {
    invariant(carouselRef.current, "carouselRef is null");

    Object.assign(carouselRef.current, {
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 2,
        },
      },
    });

    setTimeout(() => {
      carouselRef.current.initialize();
    });
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            What Travelers Say
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Trusted by tourists, expats, digital nomads, and international
            students throughout Vietnam.
          </p>
        </div>

        <div className="mt-10 relative">

          <swiper-container
            ref={carouselRef}
            init="false"
            space-between="24"
          >
            {reviews.map((review) => (
              <swiper-slide key={review.uid}>
                <Card className="h-full p-6 rounded-2xl">

                  <div className="flex items-center gap-4">

                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {review.name}
                      </h4>

                      <p className="text-sm text-gray-500">
                        {review.country}
                      </p>

                      <p className="text-xs text-gray-400">
                        {review.date}
                      </p>
                    </div>

                  </div>

                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <StarIcon
                        key={idx}
                        className="size-4 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="mt-4 leading-7 text-gray-600">
                    {review.text}
                  </p>

                </Card>
              </swiper-slide>
            ))}
          </swiper-container>

          <div className="mt-8 flex justify-center gap-3">

            <Button
              isIcon
              variant="flat"
              className="prev-btn size-11 rounded-full"
            >
              <ChevronLeftIcon className="size-5" />
            </Button>

            <Button
              isIcon
              variant="flat"
              className="next-btn size-11 rounded-full"
            >
              <ChevronRightIcon className="size-5" />
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}