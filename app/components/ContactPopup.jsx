'use client';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function ContactPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-[#d6b88d] text-[#3f1d1d] w-full max-w-2xl p-8 rounded-md relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">
          <IoMdClose />
        </button>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-1">Let's get together</h2>
        <p className="text-center text-sm underline mb-4">
          <a href="mailto:knottymomentsofficial@gmail.com">knottymomentsofficial@gmail.com</a> | <a href="tel:+918621821822">+91-8621821822</a>
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex gap-4">
            <input type="text" placeholder="Name" className="w-full p-2 bg-[#f1e4c6] outline-none" />
          </div>

          <div className="flex gap-4">
            <input type="email" placeholder="Email" className="w-1/2 p-2 bg-[#f1e4c6] outline-none" />
            <input type="tel" placeholder="Phone Number" className="w-1/2 p-2 bg-[#f1e4c6] outline-none" />
          </div>

          <div>
            <select className="w-full p-2 bg-[#f1e4c6] outline-none">
              <option>Choose an event</option>
              <option>Wedding</option>
              <option>Pre-wedding</option>
              <option>Engagement</option>
              <option>Birthday</option>
            </select>
          </div>

          <div className="flex gap-4">
            <input type="date" className="w-1/2 p-2 bg-[#f1e4c6] outline-none" />
            <input type="date" className="w-1/2 p-2 bg-[#f1e4c6] outline-none" />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="oneday" />
            <label htmlFor="oneday">It's a <strong>one-day event</strong></label>
          </div>

          <textarea placeholder="Details (Optional)" rows={4} className="w-full p-2 bg-[#f1e4c6] outline-none"></textarea>

          <button type="submit" className="bg-[#3f1d1d] text-white py-2 px-6 rounded-md hover:opacity-90">
            Submit
          </button>
        </form>

        {/* Footer icons */}
        <div className="text-center mt-6 text-xl space-x-4">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  );
}
