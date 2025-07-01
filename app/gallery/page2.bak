// 'use client';

// import { useEffect, useRef } from 'react';
// import { useSearchParams } from 'next/navigation';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const sections = [
//   {
//     title: 'Pre-Wedding',
//     slug: 'prewedding',
//     image: 'https://drive.diptapal.workers.dev/download.aspx?file=yKCHHsu2QSJR3f5b4VJzjvX2H1C0VknyA3AguM47gTzYsFYAkEmHwHjYrTIV2Hxk&expiry=fa3m2%2FKDL1fESrBwuCh1kQ%3D%3D&mac=793c290013911954711980865998df4ec4299bc363c262e58f943ff9a5644dc3'
//   },
//   {
//     title: 'Wedding',
//     slug: 'wedding',
//     image: 'https://drive.diptapal.workers.dev/download.aspx?file=qOo9cy6O7oqB4OXy6I2%2F6AilJ6xFSsvHG3AuQ45MqpAsPvsHWN4OUKt4RuVt746w&expiry=h7ZILHmNSredqYYlOSuptQ%3D%3D&mac=4188edb0f8cb5fe7437606c1da6a0225b01ac5ced73b280fd17e72142c981ef5'
//   },
//   {
//     title: 'Baby Shoot',
//     slug: 'babyshoot',
//     image: 'https://drive.diptapal.workers.dev/download.aspx?file=lA4mN4oLneomyMUCP%2Bc%2FNuqMuxbz6WxBdvnRBqz9dCJHb8XF%2FnojHO4aN0lfYWH1&expiry=IxUSWZKIKe47q2r4Fl8RKQ%3D%3D&mac=2cd7986e9a7c771a1f45237436803d9a9d37d696e88e6b4cb461978259eba2cb'
//   },
//   {
//     title: 'Others',
//     slug: 'others',
//     image: 'https://drive.diptapal.workers.dev/download.aspx?file=lA4mN4oLneomyMUCP%2Bc%2FNuqMuxbz6WxBdvnRBqz9dCJHb8XF%2FnojHO4aN0lfYWH1&expiry=IxUSWZKIKe47q2r4Fl8RKQ%3D%3D&mac=2cd7986e9a7c771a1f45237436803d9a9d37d696e88e6b4cb461978259eba2cb'
//   }
// ];

// export default function GalleryPage() {
//   const searchParams = useSearchParams();

//   const shoot = searchParams.get('shoot');
//   const type = searchParams.get('type');

//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     sectionRefs.current.forEach((section, index) => {
//       if (!section) return;

//       const direction = index % 2 === 0 ? -100 : 100;

//       gsap.fromTo(
//         section,
//         { opacity: 0, x: direction },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 1.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: section,
//             start: 'top 85%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       );
//     });

//     const hash = window.location.hash;
//     if (hash) {
//       const id = hash.replace('#', '');
//       const el = document.getElementById(id);
//       if (el) {
//         el.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, []);

//   if (shoot && type) {
//     return (
//       <div className="w-full h-screen flex flex-col items-center justify-center gap-4 text-center">
//         <h1 className="text-4xl font-bold">
//           This is {shoot} {type}.
//         </h1>
//         <button
//           onClick={() => (window.location.href = '/gallery')}
//           className="mt-4 bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-600 transition"
//         >
//           Back to Gallery
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full">
//       {sections.map((section, index) => (
//         <div
//           key={index}
//           id={section.slug}
//           ref={(el) => (sectionRefs.current[index] = el)}
//           className="relative h-[90vh] w-full overflow-hidden group"
//         >
//           <img
//             src={section.image}
//             alt={section.title}
//             className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
//           />
//           <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-700" />
//           <h2 className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
//             <div className="group flex flex-col items-center space-y-4">
//               <span className="bg-white/20 px-6 py-2 rounded-md border cursor-pointer border-white text-3xl md:text-5xl font-semibold hover:bg-gray-300 hover:text-white hover:bg-opacity-50">
//                 {section.title}
//               </span>
//               <div className="flex gap-4 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition duration-500">
//                 <button
//                   onClick={() => {
//                     window.location.href = `/gallery?shoot=${section.slug}&type=image`;
//                   }}
//                   className="bg-white/30 border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
//                 >
//                   IMAGES
//                 </button>
//                 <button
//                   onClick={() => {
//                     window.location.href = `/gallery?shoot=${section.slug}&type=video`;
//                   }}
//                   className="bg-white/30 border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
//                 >
//                   VIDEOS
//                 </button>
//               </div>
//             </div>
//           </h2>
//         </div>
//       ))}

//       <div className="bg-[#fef3c7] text-[#1f2937] py-4 text-sm text-center">
//         © Dipayan Pramanik 2021. Website designed and built by MUZAFFAR & SATYAKI.
//       </div>
//     </div>
//   );
// }



'use client';


import { useEffect, useRef } from 'react';
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

export default function GalleryPage() {
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

  // If there are query parameters, show the detail page
  // if (shoot && type) {
  //   return (
  //     <div className="w-full h-screen flex flex-col items-center justify-center gap-4 text-center">
  //       <h1 className="text-4xl font-bold">
  //         This is {shoot} {type}.
  //       </h1>
  //       <button
  //         onClick={() => (window.location.href = '/gallery')}
  //         className="mt-4 bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-600 transition"
  //       >
  //         Back to Gallery
  //       </button>
  //     </div>
  //   );
  // }
  // if (shoot === 'prewedding' && type === 'image') {
  //   return <Overlay onClose={() => {
  //     window.location.href = '/gallery?shoot=prewedding&type=image';

  //   }} />;
  // }

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


  // Default gallery page
  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div
          key={index}
          id={section.slug}
          ref={(el) => (sectionRefs.current[index] = el)}
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