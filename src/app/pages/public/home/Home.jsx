import Hero from "./sections/Hero";
import WhyTrust from "./sections/WhyTrust";
import WhatWeDo from "./sections/WhatWeDo";
import Mission from "./sections/Mission";
import WhoWeSupport from "./sections/WhoWeSupport";
import Reviews from "./sections/Reviews";
import BlogSlider from "./sections/BlogSlider";
import Contact from "./sections/Contact";
import AboutPreview from "./sections/AboutPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyTrust />
      <AboutPreview />
      <WhatWeDo />
      <Mission />
      <WhoWeSupport />
      <Reviews />
      <BlogSlider />
      <Contact />
    </>
  );
}