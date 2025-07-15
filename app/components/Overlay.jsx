// 'use client';

// import { useState, useEffect } from 'react';

// const bannerImageUrl =
//   'https://drive.diptapal.workers.dev/download.aspx?file=x1Zrc2l76y3dZrYfLYiy8s10pvI5UiGbVkeI2ETkPdmw4A5Vs90b4EPyDqFyhAl9&expiry=SxGJS0bHjf5U%2BI9vT2WV9Q%3D%3D&mac=05f87a85d796474440cb36b321051b018c2e005e91d084a133150c482ef5551c';

// const blocks = [
//   {
//     color: '#f4d35d',
//     name: 'Eggs',
//     imageUrl:
//       'https://drive.diptapal.workers.dev/download.aspx?file=x1Zrc2l76y3dZrYfLYiy8s10pvI5UiGbVkeI2ETkPdmw4A5Vs90b4EPyDqFyhAl9&expiry=SxGJS0bHjf5U%2BI9vT2WV9Q%3D%3D&mac=05f87a85d796474440cb36b321051b018c2e005e91d084a133150c482ef5551c',
//   },
//   {
//     color: '#db5b4a',
//     name: 'Bacon',
//     imageUrl:
//       'https://images.unsplash.com/photo-1602338326551-d9f6eaa1ba48?fit=crop&w=800&h=600',
//   },
//   {
//     color: '#e2bb7f',
//     name: 'Toast',
//     imageUrl:
//       'https://images.unsplash.com/photo-1572441710534-84ef22ed6ba4?fit=crop&w=800&h=600',
//   },
//   {
//     color: '#f67b7d',
//     name: 'Donuts',
//     imageUrl:
//       'https://images.unsplash.com/photo-1598373182133-006ec04cc6eb?fit=crop&w=800&h=600',
//   },
//   {
//     color: '#a1775a',
//     name: 'Coffee',
//     imageUrl:
//       'https://images.unsplash.com/photo-1509042239860-f550ce710b93?fit=crop&w=800&h=600',
//   },
// ];

// export default function OverlayBlocks({ onClose }) {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [scale, setScale] = useState({ x: 1, y: 1 });

//   useEffect(() => {
//     const updateScale = () => {
//       if (activeIndex !== null) {
//         const blockWidth = window.innerWidth / blocks.length;
//         const blockHeight = window.innerHeight * 0.2;
//         const xScale = (window.innerWidth / blockWidth).toFixed(2);
//         const yScale = (window.innerHeight / blockHeight).toFixed(2);
//         setScale({ x: xScale, y: yScale });
//       } else {
//         setScale({ x: 1, y: 1 });
//       }
//     };

//     updateScale();
//     window.addEventListener('resize', updateScale);
//     return () => window.removeEventListener('resize', updateScale);
//   }, [activeIndex]);

//   const handleClick = (index) => {
//     setActiveIndex(index);
//   };

//   const handleClose = () => {
//     setActiveIndex(null);
//     if (onClose) onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-white z-50 overflow-auto">
//       {/* Banner Image */}
//       <div className="w-full h-64 md:h-80 relative">
//         <img
//           src={bannerImageUrl}
//           alt="Banner"
//           className="w-full h-full object-contain"
//         />
//       </div>

//       {/* Blocks */}
//       <ul className="fixed bottom-0 left-0 w-full flex z-10">
//         {blocks.map((block, i) => (
//           <li
//             key={i}
//             onClick={() => handleClick(i)}
//             className={`flex-1 h-[20vh] transform transition-transform duration-700 origin-bottom cursor-pointer
//               ${activeIndex === i ? `z-30` : ''}
//             `}
//             style={{
//               backgroundColor: block.color,
//               transform:
//                 activeIndex === i
//                   ? `scale(${scale.x}, ${scale.y})`
//                   : 'scale(1)',
//             }}
//           />
//         ))}
//       </ul>

//       {/* Labels */}
//       <ul
//         className={`fixed bottom-0 left-0 w-full flex text-white text-[18px] tracking-widest z-20 transition-all duration-300
//         ${activeIndex !== null ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
//       >
//         {blocks.map((block, i) => (
//           <li
//             key={i}
//             className="flex-1 h-[20vh] flex items-center justify-center cursor-pointer"
//             onClick={() => handleClick(i)}
//           >
//             {block.name}
//           </li>
//         ))}
//       </ul>

//       {/* Overlay with image */}
//       {activeIndex !== null && (
//         <div className="fixed inset-0 bg-white flex flex-col items-center justify-center text-center p-10 z-40 transition-all duration-300">
//           <button
//             onClick={handleClose}
//             className="absolute top-5 right-5 text-3xl text-gray-700 hover:scale-110 transition"
//           >
//             &times;
//           </button>
//           <h2 className="text-3xl font-light tracking-widest mb-6">
//             {blocks[activeIndex].name}
//           </h2>
//           <div className="w-full max-w-xl">
//             <img
//               src={blocks[activeIndex].imageUrl}
//               alt={blocks[activeIndex].name}
//               className="w-full h-auto object-cover rounded shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// 'use client';

// import { useState, useEffect } from 'react';

// const bannerImageUrl =
//     'https://drive.diptapal.workers.dev/download.aspx?file=x1Zrc2l76y3dZrYfLYiy8s10pvI5UiGbVkeI2ETkPdmw4A5Vs90b4EPyDqFyhAl9&expiry=SxGJS0bHjf5U%2BI9vT2WV9Q%3D%3D&mac=05f87a85d796474440cb36b321051b018c2e005e91d084a133150c482ef5551c';

// const blocks = [
//     {
//         color: '#f4d35d',
//         name: 'Eggs',
//         imageUrl:
//             'https://drive.diptapal.workers.dev/download.aspx?file=x1Zrc2l76y3dZrYfLYiy8s10pvI5UiGbVkeI2ETkPdmw4A5Vs90b4EPyDqFyhAl9&expiry=SxGJS0bHjf5U%2BI9vT2WV9Q%3D%3D&mac=05f87a85d796474440cb36b321051b018c2e005e91d084a133150c482ef5551c',
//     },
//     {
//         color: '#db5b4a',
//         name: 'Bacon',
//         imageUrl:
//             'https://images.unsplash.com/photo-1602338326551-d9f6eaa1ba48?fit=crop&w=800&h=600',
//     },
//     {
//         color: '#e2bb7f',
//         name: 'Toast',
//         imageUrl:
//             'https://images.unsplash.com/photo-1572441710534-84ef22ed6ba4?fit=crop&w=800&h=600',
//     },
//     {
//         color: '#f67b7d',
//         name: 'Donuts',
//         imageUrl:
//             'https://images.unsplash.com/photo-1598373182133-006ec04cc6eb?fit=crop&w=800&h=600',
//     },
//     {
//         color: '#a1775a',
//         name: 'Coffee',
//         imageUrl:
//             'https://images.unsplash.com/photo-1509042239860-f550ce710b93?fit=crop&w=800&h=600',
//     },
// ];

// export default function OverlayBlocks() {
//     const [activeIndex, setActiveIndex] = useState(null);
//     const [scale, setScale] = useState({ x: 1, y: 1 });

//     useEffect(() => {
//         const updateScale = () => {
//             if (activeIndex !== null) {
//                 const blockWidth = window.innerWidth / blocks.length;
//                 const blockHeight = window.innerHeight * 0.2;
//                 const xScale = (window.innerWidth / blockWidth).toFixed(2);
//                 const yScale = (window.innerHeight / blockHeight).toFixed(2);
//                 setScale({ x: xScale, y: yScale });
//             } else {
//                 setScale({ x: 1, y: 1 });
//             }
//         };

//         updateScale();
//         window.addEventListener('resize', updateScale);
//         return () => window.removeEventListener('resize', updateScale);
//     }, [activeIndex]);

//     const handleClick = (index) => {
//         setActiveIndex(index);
//     };

//     const handleClose = () => {
//         setActiveIndex(null);
//     };

//     return (
//         <div className="fixed inset-0 bg-white z-50 overflow-auto">
//             {/* Banner Image */}
//             <div className="w- h-4/5">
//                 <img
//                     src={bannerImageUrl}
//                     alt="Banner"
//                     className="w-full h-full object-contain"
//                 />
//             </div>

//             {/* Blocks */}
//             <ul className="fixed bottom-0 left-0 w-full flex z-10">
//                 {blocks.map((block, i) => (
//                     <li
//                         key={i}
//                         onClick={() => handleClick(i)}
//                         className={`flex-1 h-[20vh] transform transition-transform duration-700 origin-bottom cursor-pointer
//               ${activeIndex === i ? `z-30` : ''}
//             `}
//                         style={{
//                             backgroundImage: `url(${block.imageUrl})`,
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                             transform:
//                                 activeIndex === i
//                                     ? `scale(${scale.x}, ${scale.y})`
//                                     : 'scale(1)',
//                         }}
//                     />
//                 ))}
//             </ul>

//             {/* Labels */}
//             <ul
//                 className={`fixed bottom-0 left-0 w-full flex text-white text-[18px] tracking-widest z-20 transition-all duration-300
//         ${activeIndex !== null ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
//             >
//                 {blocks.map((block, i) => (
//                     <li
//                         key={i}
//                         className="flex-1 h-[20vh] flex items-center justify-center cursor-pointer"
//                         onClick={() => handleClick(i)}
//                     >
//                         {block.name}
//                     </li>
//                 ))}
//             </ul>

//             {/* Overlay with image */}
//             {activeIndex !== null && (
//                 <div className="fixed inset-0 bg-white flex flex-col items-center justify-center text-center p-10 z-40 transition-all duration-300">
//                     <button
//                         onClick={handleClose}
//                         className="absolute top-5 right-5 text-3xl text-gray-700 hover:scale-110 transition"
//                     >
//                         &times;
//                     </button>
//                     <h2 className="text-3xl font-light tracking-widest mb-6">
//                         {blocks[activeIndex].name}
//                     </h2>
//                     <div className="w-full max-w-xl">
//                         <img
//                             src={blocks[activeIndex].imageUrl}
//                             alt={blocks[activeIndex].name}
//                             className="w-full h-auto object-cover rounded shadow-lg"
//                         />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }


'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Overlay({ shoot, type }) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(null);
  const [scale, setScale] = useState({ x: 1, y: 1 });

  const overlayData = {
    prewedding: {
      image: {
        bannerImageUrl:
          'https://drive.diptapal.workers.dev/download.aspx?file=9qye7pDSME773DOjN2h%2FvQuwvpq3MUQO8U9SYkd7%2BOtZZ1pRTinaCkMffAd4dMRv&expiry=leV9qn%2FEGoIho%2FtFWGd%2FTg%3D%3D&mac=6b2354223e72affd19187ed3bc08dccb4fccb673dc8fd85397c8b63712d9bf63',
        blocks: [
          {
            name: '',
            imageUrl:
              'https://drive.diptapal.workers.dev/download.aspx?file=CTXsr7sAIFvUNjQ1mDfl1lSKfYq6fO%2FEdhMqrWPZ0tMTKaiZZcs0QSvpXp1Vl7pg&expiry=GdQovKNIOGMUKKzYKt6U4Q%3D%3D&mac=f0912983cecf6c8c1e48deafa6705cdea08e0e673171232433228eff048474f5',
          },
          {
            name: '',
            imageUrl:
              'https://drive.diptapal.workers.dev/download.aspx?file=6oAx7I2Z1d%2BE8J8t9dUdysC%2BjUzTd6Ksiu5nBiYgX2%2FFKwQdL8IQXP7AfjvIogp%2F&expiry=czI4FT%2BlwJTPY3rg3Ls61w%3D%3D&mac=0df15032c7a80ae0204170627509dfb52cff2863a1a3254c606fb775826ba095',
          },
          {
            name: '',
            imageUrl:
              'https://drive.diptapal.workers.dev/download.aspx?file=hQprD%2Fe2Bf8vTVww0NfBzR0c5NZpruauSah8Js1ZVCL3Zlp53GP0D40B62piTB8B&expiry=dBq8Uv7EU7Johm75ncbw%2BQ%3D%3D&mac=2222ea324d0feb63490ab843d5ec35fd8b4c78b726127b438cbe32157cd60999',
          },
        ],
      },

      video: {
        bannerImageUrl:
          'https://img.youtube.com/vi/AOEQIoARxPY/maxresdefault.jpg',
        blocks: [
          {
            name: 'Video 1',
            videoUrl: 'https://www.youtube.com/embed/AOEQIoARxPY' ,
            thumbnailUrl: 'https://img.youtube.com/vi/AOEQIoARxPY/maxresdefault.jpg',
          },
          {
            name: 'Video 2',
            videoUrl: 'https://www.youtube.com/embed/tlHalU4TC8A',
            thumbnailUrl: 'https://img.youtube.com/vi/tlHalU4TC8A/maxresdefault.jpg',
          },
          {
            name: 'Video 3',
            videoUrl: 'https://www.youtube.com/embed/QaGmoHHpiqk',
            thumbnailUrl: 'https://img.youtube.com/vi/QaGmoHHpiqk/maxresdefault.jpg',
          },
        ],
      },

    },
    wedding: {
      image: {
        bannerImageUrl:
          'https://drive.diptapal.workers.dev/download.aspx?file=jngL6N70MLmjGA1bB5bNPprN4Ld8qL7BNeiZvl3CXjFpfJGNnegin%2Bz0ViJMw546&expiry=BqGhkW6vf9cvdxUYJ5gUsQ%3D%3D&mac=1a101acc2095497587e3dab141b6790cdddf03a4ff2c9e46a851fce867f7806c',
        blocks: [
          {
            name: '',
            imageUrl:
              'https://drive.diptapal.workers.dev/download.aspx?file=mlKMlBIiBLNlk%2FXhnPkPSNzb1%2Bt8MDA%2BbT%2BnAk2jKdPTmz3eWuqxFHUzc8k8%2FVeW&expiry=xTyNBPSa3oXsdmF%2FEBBjcA%3D%3D&mac=709d1186e9eea7229903372761820e1f56aa9c3992eaababf62999f5a5d47e4a',
          },
          {
            name: '',
            imageUrl:
              'https://drive.diptapal.workers.dev/download.aspx?file=h0Tlk%2B%2F0fLVnFDQPwiHp1C3rLNujv8qzEOE466uUrCRY4euFB11NEPxUy4BnxwO9&expiry=jkrVc5DgwBkCKZjH5zLzuA%3D%3D&mac=6a814260de9fe53f727031a07fc91bbaf3f3d0088e5cd4daa453481a6c3cec91',
          },
          {
            name: '',
            imageUrl:
              'https://drive.diptapal.workers.dev/download.aspx?file=dqNlpwRwcyVAMoEWj1CYQFbKeZnzMXfUqYswYjHYJnjSfOEGGqSTpPP3g0yT2%2FhH&expiry=ysAcJHg4fuu11jqqjA6bUQ%3D%3D&mac=1227ec9e0c9af55e20bf06723086b895f3669bfbcd6bd2b35b4df8ebb1e6f437',
          },
        ],
      },
      video: {
        bannerImageUrl:
          'https://img.youtube.com/vi/H2hDjBa9sWg/maxresdefault.jpg',
        blocks: [
          {
            name: 'Video 1',
            videoUrl: 'https://www.youtube.com/embed/H2hDjBa9sWg',
            thumbnailUrl: 'https://img.youtube.com/vi/H2hDjBa9sWg/maxresdefault.jpg',
          },
          {
            name: 'Video 2',
            videoUrl: 'https://www.youtube.com/embed/3XC5NYBV-zM',
            thumbnailUrl: 'https://img.youtube.com/vi/3XC5NYBV-zM/maxresdefault.jpg',
          },
          {
            name: 'Video 3',
            videoUrl: 'https://www.youtube.com/embed/3gDeheqjlmM',
            thumbnailUrl: 'https://img.youtube.com/vi/3gDeheqjlmM/maxresdefault.jpg',
          },
        ],
      },
    },
    babyshoot: {
      image: {
        bannerImageUrl:
          'https://drive.diptapal.workers.dev/download.aspx?file=woRezg2%2FOCfvPOWrtMVMBngC1f%2F8F0lv1jgyQGc52p34xfKiaTqoLZrnV708gXNu&expiry=tVGfzQsB3YFFvPTuubwxRw%3D%3D&mac=a9a56e1d0857a1bb8edf30d238fc20a2b0df2368fa11490a4b73d960139fc68a',
        blocks: [
          {
            name: '',
            imageUrl:
              'https://drive.diptapal.workers.dev/download.aspx?file=PvjAE3Di00sUsMRPdiNSfDrXmezPr%2BiUIE2ElGMvlqMP%2Fl0K%2BE8S7I0ReH8OBrM2&expiry=fKmTWw4Z71MRGqiWD%2B8%2B8Q%3D%3D&mac=3a79afbe0f5865f23d540667c71c156be8e2e15feaa1322f9b7a8f6dd6093d00',
          },
          {
            name: '',
            imageUrl:
              'https://drive.diptapal.workers.dev/download.aspx?file=mYU81SPsyMpG6ltZLaZwM4hiPNJxtzgYI4ks78YMSaqPUp%2B899Qu3cB5Zl9rVCJ9&expiry=dOQY49ZSJ0AqO6asI2h4kw%3D%3D&mac=3182c72005ff4601cec0c046b978235713052a0fd2350685da0a0ee77116d990',
          },
          {
            name: '',
            imageUrl:
              'https://drive.diptapal.workers.dev/download.aspx?file=%2FzwNg1PEH7egONyeazdCn4dp2GR2kqiOJAg5928ETIRjtD1pQH5UlqlyX0eZ8TyY&expiry=DVI54%2F06%2Fq14cTT2bis%2Fxg%3D%3D&mac=dd022de29747dc0919c8fbb2aace3a943a2944a99005677677ba5b3af4bc9f65',
          },
        ],
      },
      video: {
        bannerImageUrl:
          'https://img.youtube.com/vi/KvxlN_djY8A/maxresdefault.jpg',
        blocks: [
          {
            name: 'Video 1',
            videoUrl: 'https://www.youtube.com/embed/KvxlN_djY8A',
            thumbnailUrl: 'https://img.youtube.com/vi/KvxlN_djY8A/maxresdefault.jpg',
          },
          {
            name: 'Video 2',
            videoUrl: 'https://www.youtube.com/embed/XwICX0p3QOk',
            thumbnailUrl: 'https://img.youtube.com/vi/XwICX0p3QOk/maxresdefault.jpg',
          },
          {
            name: 'Video 3',
            videoUrl: 'https://www.youtube.com/embed/MLQTbUufepE',
            thumbnailUrl: 'https://img.youtube.com/vi/MLQTbUufepE/hqdefault.jpg',
          },
        ],
      },
    },
    others: {
      image: {
        bannerImageUrl:
          'https://drive.diptapal.workers.dev/download.aspx?file=jngL6N70MLmjGA1bB5bNPprN4Ld8qL7BNeiZvl3CXjFpfJGNnegin%2Bz0ViJMw546&expiry=BqGhkW6vf9cvdxUYJ5gUsQ%3D%3D&mac=1a101acc2095497587e3dab141b6790cdddf03a4ff2c9e46a851fce867f7806c',
        blocks: [
          {
            name: '',
            imageUrl:
              'https://drive.diptapal.workers.dev/download.aspx?file=mlKMlBIiBLNlk%2FXhnPkPSNzb1%2Bt8MDA%2BbT%2BnAk2jKdPTmz3eWuqxFHUzc8k8%2FVeW&expiry=xTyNBPSa3oXsdmF%2FEBBjcA%3D%3D&mac=709d1186e9eea7229903372761820e1f56aa9c3992eaababf62999f5a5d47e4a',
          },
          {
            name: '',
            imageUrl:
              'https://drive.diptapal.workers.dev/download.aspx?file=h0Tlk%2B%2F0fLVnFDQPwiHp1C3rLNujv8qzEOE466uUrCRY4euFB11NEPxUy4BnxwO9&expiry=jkrVc5DgwBkCKZjH5zLzuA%3D%3D&mac=6a814260de9fe53f727031a07fc91bbaf3f3d0088e5cd4daa453481a6c3cec91',
          },
          {
            name: '',
            imageUrl:
              'https://drive.diptapal.workers.dev/download.aspx?file=dqNlpwRwcyVAMoEWj1CYQFbKeZnzMXfUqYswYjHYJnjSfOEGGqSTpPP3g0yT2%2FhH&expiry=ysAcJHg4fuu11jqqjA6bUQ%3D%3D&mac=1227ec9e0c9af55e20bf06723086b895f3669bfbcd6bd2b35b4df8ebb1e6f437',
          },
        ],
      },
      video: {
        bannerImageUrl:
          'https://img.youtube.com/vi/yz-Wfs7M3YM/maxresdefault.jpg',
        blocks: [
          {
            name: 'Video 1',
            videoUrl: 'https://www.youtube.com/embed/XUl-cJ7jiXE',
            thumbnailUrl: 'https://img.youtube.com/vi/XUl-cJ7jiXE/maxresdefault.jpg',
          },
          {
            name: 'Video 2',
            videoUrl: 'https://www.youtube.com/embed/yz-Wfs7M3YM',
            thumbnailUrl: 'https://img.youtube.com/vi/yz-Wfs7M3YM/hqdefault.jpg',
          },
          {
            name: 'Video 3',
            videoUrl: 'https://www.youtube.com/embed/JpnQDTVzaAM',
            thumbnailUrl: 'https://img.youtube.com/vi/JpnQDTVzaAM/hqdefault.jpg',
          },
        ],
      },
    },
  };

  const shootData = overlayData[shoot]?.[type];

  useEffect(() => {
    const updateScale = () => {
      if (activeIndex !== null && shootData?.blocks) {
        const blockWidth = window.innerWidth / shootData.blocks.length;
        const blockHeight = window.innerHeight * 0.2;
        const xScale = (window.innerWidth / blockWidth).toFixed(2);
        const yScale = (window.innerHeight / blockHeight).toFixed(2);
        setScale({ x: xScale, y: yScale });
      } else {
        setScale({ x: 1, y: 1 });
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [activeIndex, shootData?.blocks?.length]);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    router.push('/gallery');
  };

  if (!shootData) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-center">
        <p className="text-lg text-gray-600">No overlay content found.</p>
      </div>
    );
  }

  const { bannerImageUrl, blocks } = shootData;

  return (
    <div className='fixed inset-0 flex flex-col bg-white z-50 overflow-hidden'>
      {/* Banner Image */}
      {bannerImageUrl && (
        <div className='w-full relative h-[65vh]'>
          <img
            src={bannerImageUrl}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 text-white text-4xl hover:rotate-180 transition-transform duration-500"
          >
            &times;
          </button>
        </div>
      )}

      {/* Blocks */}
      <ul className="w-full flex h-[35vh] z-10">
        {blocks.map((block, i) => (
          <li
            key={i}
            onClick={() => handleClick(i)}
            className={`flex-1 transform transition-transform duration-700 origin-bottom cursor-pointer ${
              activeIndex === i ? `z-30` : ''
            }`}
            style={{
              backgroundImage:
                type === 'video'
                  ? `url(${block.thumbnailUrl})`
                  : `url(${block.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform:
                activeIndex === i
                  ? `scale(${scale.x}, ${scale.y})`
                  : 'scale(1)',
            }}
          />
        ))}
      </ul>

      {/* Labels */}
      <ul
        className={`absolute bottom-0 left-0 w-full flex text-white text-[18px] tracking-widest z-20 transition-all duration-300 ${
          activeIndex !== null
            ? 'opacity-0 pointer-events-none'
            : 'opacity-100'
        }`}
      >
        {blocks.map((block, i) => (
          <li
            key={i}
            className="flex-1 h-[20vh] flex items-center justify-center cursor-pointer"
            onClick={() => handleClick(i)}
          >
            {block.name}
          </li>
        ))}
      </ul>

      {/* Overlay */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center text-center p-10 z-40 transition-all duration-300">
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-5 right-5 text-3xl text-gray-700 hover:scale-110 transition"
          >
            &times;
          </button>
          <h2 className="text-3xl font-light tracking-widest mb-6">
            {blocks[activeIndex].name}
          </h2>
          <div className="w-full max-w-xl">
            {type === "video" ? (
              <iframe
                width="100%"
                height="400"
                src={`${blocks[activeIndex].videoUrl}?controls=0&showinfo=0&rel=0&modestbranding=1`}
                frameBorder="0"
                allowFullScreen
                className="rounded shadow-lg"
              ></iframe>
            ) : (
              <img
                src={blocks[activeIndex].imageUrl}
                alt={blocks[activeIndex].name}
                className="w-full h-auto object-cover rounded shadow-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}