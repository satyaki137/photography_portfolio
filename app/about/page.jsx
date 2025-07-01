'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import photographer from '../assets/images/photographer.jpg'; // Make sure the path is correct

export default function About() {
  return (
    <section className="bg-[#f7eedd] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 px-10 py-20">
        {/* Text Content */}
        <div className="md:w-1/2 text-[#4c2a24] mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Dipayan Pramanik</h2>
          <p className="text-md text-[#7a5b4b] font-semibold mb-6">Owner</p>

          <p className="text-base leading-relaxed mb-4">
            Dipayan is a Kolkata-based wedding photographer. Having a dual degree in Electrical Engineering,
            photography has always been his passion since childhood. This passion grew stronger over time.
            His life has been a roller coaster since he began working professionally with his camera on January 26, 2016.
            As a self-taught professional photographer, social media played a crucial role in his journey.
          </p>

          <p className="text-base leading-relaxed">
            "Being a wedding photographer, I love to capture the candid moments of a couple's big day.
            Every time I meet new people, a new story begins. Wedding photography comes with responsibilities,
            as clients trust us to preserve their most special memories for a lifetime."
          </p>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={photographer}
            alt="Dipayan Pramanik"
            width={400}
            height={500}
            className="rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}
