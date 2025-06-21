'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';



import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import prewedding from './assets/images/Prewedding.jpg';
import wedding from './assets/images/Wedding.jpg';
import babyshoot from './assets/images/babyshoot.jpg';
import photographer from './assets/images/photographer.jpg';
import Testimonials from './testimonials/page.jsx';
import ContactPopup from './components/ContactPopup.jsx';



export default function HomePage() {
 const [showContactPopup, setShowContactPopup] = useState(false);


  return (
    <main className="bg-[#f7eedd] min-h-screen relative overflow-hidden">



      {/* Sticky Social Icons */}
      <div className="hidden md:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 text-[#4e2e2b] text-xl z-50">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-20  text-center min-h-screen">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4e2e2b] mb-6 m-20">
          We make your memory tighter!
        </h1>
        <p className="text-[#4e2e2b] text-base sm:text-lg leading-relaxed">
          Ten, twenty, fifty years later, a photograph is what keeps your memories alive.
          Photography is not just about tricks and techniques. It is also about emotions,
          smiles, tears, hugs and kisses — it is about saving those moments of love, with love.
          So when you tie your most special knot, let us save those moments for you, forever.
        </p>
      </div>

      <section className="relative h-screen w-full bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${prewedding.src})` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-8 py-4 border border-[#d8c6a1] text-[#d8c6a1] text-3xl sm:text-5xl font-semibold hover:bg-slate-100 cursor-pointer hover:scale-105 transition">
            <Link href="/pre-wedding">Pre-Wedding</Link>
          </div>
        </div>
      </section>


      <section className="relative h-screen w-full bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${wedding.src})` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-8 py-4 border border-[#d8c6a1] text-[#d8c6a1] text-3xl sm:text-5xl font-semibold hover:bg-slate-100 cursor-pointer hover:scale-105 transition">
            <Link href="/wedding">Wedding</Link>
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
        {/* Overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

      </section>


      <section className="bg-[#f7eedd] py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 px-10 py-20">
          {/* Text Content */}
          <div className="md:w-1/2 text-[#4c2a24] mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Dipayan Pramanik</h2>
            <p className="text-md text-[#7a5b4b] font-semibold mb-6">Owner</p>

            <p className="text-base leading-relaxed mb-4 ">
              Dipayan is a Kolkata based wedding photographer. Having a dual degree in Electrical Engineering,
              photography has always been his passion from childhood. This passion started increasing as days progressed.
              His life has been a roller coaster ride since he was with his camera professionally from January 26, 2016.
              As a self-taught professional photographer, social media played the most important role.
            </p>

            <p className="text-base leading-relaxed">
              "Being a wedding photographer, I love to capture the candid moments of a couple's big day.
              Every time I meet new people, one more new story starts. Wedding photography also comes with responsibilities,
              as the client trusts us to create their most special moments memorable for life."
            </p>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={photographer} // Place this image in your public folder
              alt="Dipayan Pramanik"
              width={400}
              height={250}
              className="rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      <Testimonials />

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

      {showContactPopup && (
        <ContactPopup isOpen={showContactPopup} onClose={() => setShowContactPopup(false)} />
      )}

      {/* Footer Outside the Section */}
      <div className="bg-[#fef3c7] text-[#1f2937] py-4 text-sm text-center">
        © Dipayan Pramanik 2021. Website designed and built by MUZAFFAR & SATYAKI.
      </div>


    </main>
  );
}
