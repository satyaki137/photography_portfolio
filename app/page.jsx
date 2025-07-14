'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import SplitText from 'gsap/SplitText';


gsap.registerPlugin(SplitText);




import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import prewedding from './assets/images/Prewedding2.jpg';
import wedding from './assets/images/Wedding2.jpg';
import babyshoot from './assets/images/babyshoot.jpg';

import About from './about/page.jsx';
import ContactPopup from './components/ContactPopup.jsx';
import PageLoader from "./components/PageLoader.jsx";




export default function HomePage() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  // const headingRef = useRef(null);
  // useEffect(() => {
  //   const split = new SplitType(headingRef.current, { types: 'chars' });

  //   gsap.from(split.chars, {
  //     y: 100,
  //     delay: 3,
  //     rotation: 720,
  //     scale: 0.3,
  //     opacity: 0,
  //     stagger: {
  //       each: 0.05,
  //       from: 'random',
  //     },
  //     ease: 'back.out(2)', // Gives it a bouncy fun feel
  //     duration: 1.2,

  //   });
  //   return () => {
  //     split.revert();
  //   };
  // }, []);

  useEffect(() => {
    document.fonts.ready.then(() => {
      gsap.set(".split", { opacity: 1 });

      let splitInstance;
      const split = new SplitText(".split", {
        type: "lines, words",
        linesClass: "line",
      });

      gsap.from(split.lines, {
        delay: 1,
        duration: 0.6,
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
      });

    },
    );
  });
  [];




  return (

    <main className="bg-[#f7eedd] min-h-screen relative overflow-hidden">
      {/* <PageLoader />   */}

      {!loadingComplete && (
        <PageLoader onComplete={() => setLoadingComplete(true)} />
      )}

      {loadingComplete && (
        <>
          {/* Sticky Social Icons */}
          <div className="hidden md:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 text-[#4e2e2b] text-xl z-50">
            <a href="https://www.facebook.com/dipevent" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/tokens_of_memory_by_dipta_pal" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@TokensofMemory" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>

          <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-4xl text-center pb-40">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4e2e2b] mb-6">
                We make your memory tighter!
              </h1>
              <p className="split text-[#4e2e2b] text-base sm:text-lg leading-relaxed opacity-0">
                Ten, twenty, fifty years later, a photograph is what keeps your memories alive.
                Photography is not just about tricks and techniques. It is also about emotions,
                smiles, tears, hugs and kisses — it is about saving those moments of love, with love.
                So when you tie your most special knot, let us save those moments for you, forever.
              </p>
            </div>
          </div>
          <section className="relative h-screen w-full bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${prewedding.src})` }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-8 py-4 border border-[#d8c6a1] text-[#d8c6a1] text-3xl sm:text-5xl font-semibold hover:bg-slate-100 cursor-pointer hover:scale-105 transition">
                <Link href="/gallery/#prewedding">Pre-Wedding</Link>
              </div>
            </div>
          </section>

          <section className="relative h-screen w-full bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${wedding.src})` }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-8 py-4 border border-[#d8c6a1] text-[#d8c6a1] text-3xl sm:text-5xl font-semibold hover:bg-slate-100 cursor-pointer hover:scale-105 transition">
                <Link href="/gallery/#wedding">Wedding</Link>
              </div>
            </div>
          </section>

          <section className="relative h-screen w-full bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${babyshoot.src})` }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-8 py-4 border border-[#d8c6a1] text-[#d8c6a1] text-3xl sm:text-5xl font-semibold hover:bg-slate-100 cursor-pointer hover:scale-105 transition">
                <Link href="/babyshoot">Baby Shoot</Link>
              </div>
            </div>
          </section>

          <section className="relative h-screen w-full overflow-hidden">
            <video
              src="/videos/bg-video.mp4"
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Link href="/videos">
                <div className="px-8 py-4 border border-[#d8c6a1] text-[#d8c6a1] text-3xl sm:text-5xl font-semibold hover:bg-slate-100 cursor-pointer hover:scale-105 transition">
                  Videos
                </div>
              </Link>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
          </section>

          <About />

          <section className="bg-[#991b1b] text-center py-20 relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#fef3c7]">
              Tie your special memory with us!
            </h2>
            <button
              className="bg-[#fde68a] hover:bg-[#fcd34d] text-[#7c2d12] font-medium py-2 px-6 rounded-full transition-all"
              onClick={() => setShowContactPopup(true)}
            >
              Book a Session
            </button>
          </section>
        </>
      )}

      {showContactPopup && (
        <ContactPopup
          isOpen={showContactPopup}
          onClose={() => setShowContactPopup(false)}
        />
      )}

      <div className="bg-[#fef3c7] text-[#1f2937] py-4 text-sm text-center">
        © Dipta Pal 2025.
      </div>



    </main >
  );
}