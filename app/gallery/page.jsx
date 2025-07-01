'use client';

import { useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import prewedding from '../assets/images/Prewedding1.jpg';
import wedding from '../assets/images/Wedding1.jpg';
import babyshoot from '../assets/images/babyshoot.jpg';
import others from '../assets/images/Others.jpg';

import Overlay from '../components/Overlay';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { title: 'Pre-Wedding', slug: 'prewedding', image: prewedding },
  { title: 'Wedding', slug: 'wedding', image: wedding },
  { title: 'Baby Shoot', slug: 'babyshoot', image: babyshoot },
  { title: 'Others', slug: 'others', image: others },
];

function GalleryPageInner() {
  const searchParams = useSearchParams();

  const shoot = searchParams.get('shoot');
  const type = searchParams.get('type');

  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const direction = index % 2 === 0 ? -100 : 100;

      gsap.fromTo(
        section,
        { opacity: 0, x: direction },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  if (shoot && type) {
    return (
      <Overlay
        shoot={shoot}
        type={type}
        onClose={() => {
          window.history.pushState({}, '', '/gallery');
        }}
      />
    );
  }

  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div
          key={index}
          id={section.slug}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          className="relative h-[90vh] w-full overflow-hidden group"
        >
          <Image
            src={section.image}
            alt={section.title}
            fill
            className="object-cover transform group-hover:scale-105 transition duration-700"
            priority
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-700" />
          <h2 className="object-cover absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
            <div className="group flex flex-col items-center space-y-4">
              <span className="bg-white/20 px-6 py-2 rounded-md border cursor-pointer border-white text-3xl md:text-5xl font-semibold hover:bg-gray-300 hover:text-white hover:bg-opacity-50">
                {section.title}
              </span>

              <div className="flex gap-4 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition duration-500">
                <button
                  onClick={() => {
                    window.location.href = `/gallery?shoot=${section.slug}&type=image`;
                  }}
                  className="bg-white/30 border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                >
                  IMAGES
                </button>
                <button
                  onClick={() => {
                    window.location.href = `/gallery?shoot=${section.slug}&type=video`;
                  }}
                  className="bg-white/30 border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                >
                  VIDEOS
                </button>
              </div>
            </div>
          </h2>
        </div>
      ))}

      <div className="bg-[#fef3c7] text-[#1f2937] py-4 text-sm text-center">
        © Dipta Pal 2025. Website designed and built by MUZAFFAR & SATYAKI.
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading gallery...</div>}>
      <GalleryPageInner />
    </Suspense>
  );
}
