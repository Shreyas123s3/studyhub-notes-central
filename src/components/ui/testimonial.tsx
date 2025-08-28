import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    // transparent wrapper so page background + dots remain visible
    <div className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
          <div className="flex items-center justify-center">
            <div className="relative h-[28rem] w-[22rem] md:h-[30rem] md:w-[28rem]">
              <AnimatePresence>
                {testimonials.map((t, i) => (
                  <motion.div
                    key={t.src}
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
                    className="absolute inset-0 origin-bottom"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <img
                      src={t.src}
                      alt={t.name}
                      draggable={false}
                      // ensure visible: block + object-cover, explicit sizes
                      className="block h-full w-full rounded-3xl object-cover shadow-2xl"
                      width={800}
                      height={800}
                      onError={(e: any) => {
                        // fallback: if local asset fails, keep visible placeholder
                        e.currentTarget.style.display = "block";
                        e.currentTarget.src = `/placeholders/${t.name.replace(/\s+/g, "-").toLowerCase()}.png`;
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
              >
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
    </div>
  );
}
