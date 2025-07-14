// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function PageLoader() {
//   const loaderRef = useRef(null);
//   const dotsRef = useRef([]);

//   useEffect(() => {
//     const loader = loaderRef.current;
//     const dots = dotsRef.current;

//     // Timeline for loader dots animation
//     const tlLoader = gsap.timeline({
//       repeat: 2,
//       onComplete: hideLoader,
//     });

//     tlLoader
//       .to(dots, {
//         y: 20,
//         autoAlpha: 1,
//         ease: "back.inOut",
//         stagger: 0.1,
//         duration: 0.5,
//       })
//       .to(loader, {
//         autoAlpha: 0,
//         scale: 0.5,
//         ease: "none",
//         duration: 0.3,
//         delay: 1,
//       });

//     function hideLoader() {
//       console.log("Loader finished");
//       // Optionally hide permanently, navigate, etc.
//     }
//   }, []);

//   return (
//     <div className="main-container relative w-full h-screen bg-[#fee49c]">
//       <div
//         id="loader"
//         ref={loaderRef}
//         className="absolute top-1/2 left-0 right-0 -translate-y-1/2 text-center opacity-0"
//       >
//         {[0, 1, 2, 3].map((_, i) => (
//           <div
//             key={i}
//             ref={(el) => (dotsRef.current[i] = el)}
//             className="dot inline-block w-3 h-3 rounded-full border-2 border-[#4a4a4a] mr-1 opacity-0"
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function PageLoader() {
//   const loaderRef = useRef(null);
//   const dotsRef = useRef([]);

//   useEffect(() => {
//     const loader = loaderRef.current;
//     const dots = dotsRef.current;

//     const tl = gsap.timeline({
//       repeat: 2,
//       onComplete: () => {
//         // Animate loader out
//         gsap.to(loader, {
//           y: -100,
//           autoAlpha: 0,
//           duration: 0.5,
//           ease: "back.in",
//         });
//       },
//     });

//     tl.to(dots, {
//       y: 10,
//       autoAlpha: 1,
//       ease: "back.inOut",
//       stagger: 0.1,
//       duration: 0.5,
//     }).to(dots, {
//       y: 0,
//       autoAlpha: 0,
//       ease: "back.inOut",
//       stagger: 0.1,
//       duration: 0.5,
//     });

//     return () => tl.kill();
//   }, []);

//   return (
//     <div className="fixed inset-0 bg-[#fee49c] z-50 flex items-center justify-center">
//       <div ref={loaderRef} className="flex gap-2">
//         {[0, 1, 2, 3].map((_, i) => (
//           <div
//             key={i}
//             ref={(el) => (dotsRef.current[i] = el)}
//             className="inline-block w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full border-2 border-[#4a4a4a] opacity-0"
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import gsap from "gsap";

export default function PageLoader({ onComplete }) {
  const loaderInnerRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const loaderInner = loaderInnerRef.current;
    const dots = dotsRef.current;

    // Slide the whole loader in from below
    // gsap.fromTo(
    //   loaderInner,
    //   { y: 100, autoAlpha: 0 },
    //   {
    //     y: 0,
    //     autoAlpha: 1,
    //     duration: 0.8,
    //     ease: "back.out(1.7)",
    //   }
    // );

    const tl = gsap.timeline({
      repeat: 2,
      onComplete: () => {
        // Slide loader out upwards
        gsap.to(loaderInner, {
          y: -100,
          autoAlpha: 0,
          duration: 0.5,
          ease: "back.in",
          onComplete: () => {
            if (onComplete) {
              onComplete();
            }
          },
        });
      },
    });

    tl.to(dots, {
      y: 10,
      autoAlpha: 1,
      ease: "back.inOut",
      stagger: 0.1,
      duration: 0.5,
    }).to(dots, {
      y: 0,
      autoAlpha: 0,
      ease: "back.inOut",
      stagger: 0.1,
      duration: 0.5,
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#f7eedd] z-50 flex items-center justify-center">
      <div ref={loaderInnerRef} className="flex flex-col items-center gap-4">
        <Image
          src={logo}
          alt="Logo"
          className="w-32 h-auto sm:w-40 md:w-48"
          priority
        />
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((_, i) => (
            <div
              key={i}
              ref={(el) => (dotsRef.current[i] = el)}
              className="inline-block w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full border-2 border-[#4a4a4a] opacity-0"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
