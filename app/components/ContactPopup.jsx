// 'use client';
// import { useState } from 'react';
// import { IoMdClose } from 'react-icons/io';

// export default function ContactPopup({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
//       <div className="bg-[#d6b88d] text-[#3f1d1d] w-full max-w-2xl p-8 rounded-md relative">
//         {/* Close Button */}
//         <button onClick={onClose} className="absolute top-4 right-4 text-xl">
//           <IoMdClose />
//         </button>

//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-center mb-1">Let's get together</h2>
//         <p className="text-center text-sm underline mb-4">
//           <a href="mailto:knottymomentsofficial@gmail.com">knottymomentsofficial@gmail.com</a> | <a href="tel:+918621821822">+91-8621821822</a>
//         </p>

//         {/* Form */}
//         <form className="space-y-4">
//           <div className="flex gap-4">
//             <input type="text" placeholder="Name" className="w-full p-2 bg-[#f1e4c6] outline-none" />
//           </div>

//           <div className="flex gap-4">
//             <input type="email" placeholder="Email" className="w-1/2 p-2 bg-[#f1e4c6] outline-none" />
//             <input type="tel" placeholder="Phone Number" className="w-1/2 p-2 bg-[#f1e4c6] outline-none" />
//           </div>

//           <div>
//             <select className="w-full p-2 bg-[#f1e4c6] outline-none">
//               <option>Choose an event</option>
//               <option>Wedding</option>
//               <option>Pre-wedding</option>
//               <option>Engagement</option>
//               <option>Birthday</option>
//             </select>
//           </div>

//           <div className="flex gap-4">
//             <input type="date" className="w-1/2 p-2 bg-[#f1e4c6] outline-none" />
//             <input type="date" className="w-1/2 p-2 bg-[#f1e4c6] outline-none" />
//           </div>

//           <div className="flex items-center space-x-2">
//             <input type="checkbox" id="oneday" />
//             <label htmlFor="oneday">It's a <strong>one-day event</strong></label>
//           </div>

//           <textarea placeholder="Details (Optional)" rows={4} className="w-full p-2 bg-[#f1e4c6] outline-none"></textarea>

//           <button type="submit" className="bg-[#3f1d1d] text-white py-2 px-6 rounded-md hover:opacity-90">
//             Submit
//           </button>
//         </form>

//         {/* Footer icons */}
//         <div className="text-center mt-6 text-xl space-x-4">
//           <a href="#"><i className="fab fa-facebook-f"></i></a>
//           <a href="#"><i className="fab fa-instagram"></i></a>
//           <a href="#"><i className="fab fa-youtube"></i></a>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function ContactPopup({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [oneDay, setOneDay] = useState(false);
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*New Contact Form Submission:*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Event Type:* ${eventType}
*Event Date:* ${startDate} to ${endDate}
*One Day Event:* ${oneDay ? 'Yes' : 'No'}
*Details:* ${details || 'N/A'}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/918906122720?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

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
          <a href="mailto:knottymomentsofficial@gmail.com">knottymomentsofficial@gmail.com</a> |{' '}
          <a href="tel:+918906122720">+91-8906122720</a>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 bg-[#f1e4c6] outline-none"
            />
          </div>

          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-1/2 p-2 bg-[#f1e4c6] outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-1/2 p-2 bg-[#f1e4c6] outline-none"
            />
          </div>

          <div>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full p-2 bg-[#f1e4c6] outline-none"
            >
              <option value="">Choose an event</option>
              <option value="Wedding">Wedding</option>
              <option value="Pre-wedding">Pre-wedding</option>
              <option value="Engagement">Engagement</option>
              <option value="Birthday">Birthday</option>
            </select>
          </div>

          <div className="flex gap-4">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-1/2 p-2 bg-[#f1e4c6] outline-none"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-1/2 p-2 bg-[#f1e4c6] outline-none"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="oneday"
              checked={oneDay}
              onChange={(e) => setOneDay(e.target.checked)}
            />
            <label htmlFor="oneday">
              It's a <strong>one-day event</strong>
            </label>
          </div>

          <textarea
            placeholder="Details (Optional)"
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full p-2 bg-[#f1e4c6] outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-[#3f1d1d] text-white py-2 px-6 rounded-md hover:opacity-90"
          >
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
