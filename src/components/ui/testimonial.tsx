
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * TeamCarousel — transparent, visible, robust image loading + fallbacks.
 * - Images must be placed into /public (exact filenames used below).
 * - This component intentionally has NO background so the site's gradient + animated dots show through.
 */

type Testimonial = {
  name: string;
  designation: string;
  src: string;
  links: React.ReactNode;
};

const testimonials: Testimonial[] = [
  {
    name: "Shreyas Salunkhe",
    designation: "10x Coding Club",
    src: "/shreyas.jpeg",
    links: (
      <>
        <a href="https://www.linkedin.com/in/shreyas-salunkhe-b69556325/" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>{" "}
        |{" "}
        <a href="https://www.instagram.com/shreyas_trx?igsh=ZjNjc3V5YWR3MjVy" target="_blank" rel="noreferrer" className="underline">Instagram</a>
      </>
    ),
  },
  {
    name: "Tushar Kaldate",
    designation: "Member at ASSET",
    src: "/tushar.jpeg",
    links: (
      <>
        <a href="https://www.linkedin.com/in/tushar-kaldate-2b5276262/" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>{" "}
        |{" "}
        <a href="https://www.instagram.com/3412kkp" target="_blank" rel="noreferrer" className="underline">Instagram</a>
      </>
    ),
  },
  {
    name: "Aradhya Avhad",
    designation: "Mozilla Club & ASSET member",
    src: "/aradhya.jpeg",
    links: (
      <>
        <a href="https://www.linkedin.com/in/aradhya-avhad-800552327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>{" "}
        | <span className="opacity-70">Instagram N/A</span>
      </>
    ),
  },
  {
    name: "Pranshu Bobade",
    designation: "GDG Club & ASSET member",
    src: "/pranshu.jpeg",
    links: (
      <>
        <a href="https://www.linkedin.com/in/pranshu-bobade-18a05032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>{" "}
        |{" "}
        <a href="https://www.instagram.com/notyetaegon?igsh=emVkeXNqaDRkMDFs" target="_blank" rel="noreferrer" className="underline">Instagram</a>
      </>
    ),
  },
];

export default function TeamCarousel({ autoplay = true }: { autoplay?: boolean }) {
  const [active, setActive] = useState(0);

  const handleNext = React.useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const handlePrev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(handleNext, 5000);
    return () => clearInterval(id);
  }, [autoplay, handleNext]);

  const isActive = (i: number) => i === active;
  const randomRotate = () => `${Math.floor(Math.random() * 16) - 8}deg`;

  return (
    // NO background classes here so page gradient + dots show through.
    <div className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
          {/* Image stack */}
          <div className="flex items-center justify-center">
            <div className="relative h-[28rem] w-[22rem] md:h-[30rem] md:w-[28rem]">
              <AnimatePresence>
                {testimonials.map((t, i) => (
                  <motion.div
                    key={t.src}
                    className="testimonial-card absolute inset-0 origin-bottom"
                    initial={{ opacity: 0, scale: 0.9, y: 40, rotate: randomRotate() }}
                    animate={{
                      opacity: isActive(i) ? 1 : 0.45,
                      scale: isActive(i) ? 1 : 0.94,
                      y: isActive(i) ? 0 : 20,
                      zIndex: isActive(i) ? 40 : 10,
                      rotate: isActive(i) ? "0deg" : randomRotate(),
                    }}
                    exit={{ opacity: 0, scale: 0.9, y: -40 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ willChange: "transform, opacity", background: "transparent" }}
                  >
                    <img
                      src={t.src}
                      alt={t.name}
                      draggable={false}
                      loading="eager"
                      width={800}
                      height={800}
                      className="block h-full w-full rounded-3xl object-cover shadow-2xl"
                      style={{ background: "transparent", display: "block" }}
                      onError={(e: any) => {
                        // hide broken images so stacked white cards don't show
                        const img = e.currentTarget as HTMLImageElement;
                        img.style.display = "none";
                        const parent = img.closest(".testimonial-card") as HTMLElement | null;
                        if (parent) parent.style.display = "none";
                        img.onerror = null;
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Text + controls */}
          <div className="py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
              >
                {/* Force white text so it is visible on the purple background */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">{testimonials[active].name}</h3>
                <p className="text-sm text-white/80 mt-1">{testimonials[active].designation}</p>
                <p className="mt-6 text-lg text-white/90">{testimonials[active].links}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex gap-4">
              <button onClick={handlePrev} aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <ArrowLeft className="h-5 w-5 text-white" />
              </button>
              <button onClick={handleNext} aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <ArrowRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* emergency CSS override -- minimal and scoped to the #team area.
          If site overlay or parent background is blocking this section, this override ensures transparency & image visibility.
          These rules are intentionally narrow and scoped to #team to avoid global changes. */}
      <style>{`
        #team, #team * { background: transparent !important; }
        #team img { display:block !important; opacity:1 !important; visibility:visible !important; }
      `}</style>
    </div>
  );
}
