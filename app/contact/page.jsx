'use client';
import { useState } from 'react';
import ContactPopup from '../components/ContactPopup';

export default function ContactPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7eedd] flex items-center justify-center">
      <button
        onClick={() => setIsPopupOpen(true)}
        className="bg-[#3f1d1d] text-white px-6 py-2 rounded-md"
      >
        Contact Us
      </button>

      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </main>
  );
}
