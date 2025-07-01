'use client';

import Image from 'next/image';
import aboutmeImage from '../assets/images/aboutme.jpg';

export default function AboutMe() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={aboutmeImage}
            alt="About Background"
            fill
            priority
            className="object-cover"
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="max-w-2xl text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Company Story
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              We started our journey with a simple mission: to deliver excellence 
              in every product we create. Our team is passionate about crafting 
              innovative solutions that make a difference. Over the years, we've 
              grown into a trusted name, but our commitment to quality and 
              customer satisfaction remains as strong as ever.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Outside the Section */}
      <div className="bg-[#fef3c7] text-[#1f2937] py-4 text-sm text-center">
        © Dipta Pal 2025.
      </div>
    </div>
  );
}
