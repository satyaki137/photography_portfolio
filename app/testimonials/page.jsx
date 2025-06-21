'use client';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Santanu Majumder',
    message:
      'An excellent team lead by Dipayan. Highly professional and punctual. Delivers high quality pictures and videos with excellent, unique, innovative ideas. Very well behaved and mannered people too. Highly recommended.',
  },
  {
    name: 'Anjali Sharma',
    message:
      'Absolutely loved the entire experience! The photos turned out beautiful and candid.',
  },
  {
    name: 'Rahul Dutta',
    message:
      'They captured every emotion perfectly. A top-notch wedding photography team!',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#e8d3ae] py-16 px-4 text-center text-[#4c2a24] relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Comments</h2>

      <div className="max-w-2xl mx-auto relative overflow-hidden">
        {/* Slide Transition */}
        <div className="transition-all duration-700 ease-in-out">
          <p className="text-base md:text-lg mb-4 leading-relaxed">
            {testimonials[currentIndex].message}
          </p>
          <p className="text-[#a0523c] italic text-sm md:text-base">
            — {testimonials[currentIndex].name}
          </p>
        </div>

        {/* Nav Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-10 top-1/2 -translate-y-1/2 px-4 text-3xl font-bold text-[#4c2a24] hidden md:block"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-10 top-1/2 -translate-y-1/2 px-4 text-3xl font-bold text-[#4c2a24] hidden md:block"
        >
          &gt;
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? 'bg-[#4c2a24]' : 'bg-[#c7aa89]'
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
