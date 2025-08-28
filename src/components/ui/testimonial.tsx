
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Shreyas Salunkhe",
    designation: "10x Coding Club",
    src: "/lovable-uploads/19404656-a9ba-4b2e-ab66-8efa034b9f8f.png", // Shreyas image
    quote: (
      <>
        <a href="https://www.linkedin.com/in/shreyas-salunkhe-b69556325/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200 underline">LinkedIn</a> |{" "}
        <a href="https://www.instagram.com/shreyas_trx?igsh=ZjNjc3V5YWR3MjVy" target="_blank" rel="noreferrer" className="text-pink-300 hover:text-pink-200 underline">Instagram</a>
      </>
    ),
  },
  {
    name: "Tushar Kaldate",
    designation: "Member at ASSET",
    src: "/lovable-uploads/6699e80d-dffa-4507-a555-715611bccbd1.png", // Tushar image
    quote: (
      <>
        <a href="https://www.linkedin.com/in/tushar-kaldate-2b5276262/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200 underline">LinkedIn</a> |{" "}
        <a href="https://www.instagram.com/3412kkp" target="_blank" rel="noreferrer" className="text-pink-300 hover:text-pink-200 underline">Instagram</a>
      </>
    ),
  },
  {
    name: "Aradhya Avhad",
    designation: "Mozilla Club & ASSET member",
    src: "/lovable-uploads/a7e6a62e-cada-4a52-8f8b-491e1cb7f223.png", // Aradhya image
    quote: (
      <>
        <a href="https://www.linkedin.com/in/aradhya-avhad-800552327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200 underline">LinkedIn</a> |{" "}
        <span className="text-white/70">Instagram N/A</span>
      </>
    ),
  },
  {
    name: "Pranshu Bobade",
    designation: "GDG Club & ASSET member",
    src: "/lovable-uploads/59215696-90e4-4c37-bad9-1c8fdbc91219.png", // Pranshu image
    quote: (
      <>
        <a href="https://www.linkedin.com/in/pranshu-bobade-18a05032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200 underline">LinkedIn</a> |{" "}
        <a href="https://www.instagram.com/notyetaegon?igsh=emVkeXNqaDRkMDFs" target="_blank" rel="noreferrer" className="text-pink-300 hover:text-pink-200 underline">Instagram</a>
      </>
    ),
  },
];

type Testimonial = {
  name: string;
  designation: string;
  src: string;
  quote: JSX.Element;
};

const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index: number) => index === active;
  const randomRotate = () => `${Math.floor(Math.random() * 16) - 8}deg`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 font-sans antialiased md:px-8 lg:px-12">
      <style>{`
        .team-section img {
          filter: brightness(1.1) contrast(1.05);
        }
        .team-section h3,
        .team-section p {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          color: white !important;
        }
        .team-section .text-blue-200 {
          color: #bfdbfe !important;
        }
        .team-section .text-blue-100 {
          color: #dbeafe !important;
        }
      `}</style>
      <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 team-section">
        {/* Image Section - Larger and more visible */}
        <div className="flex items-center justify-center">
          <div className="relative h-[36rem] w-[30rem] md:h-[40rem] md:w-[32rem]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, scale: 0.9, y: 50, rotate: randomRotate() }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.6,
                    scale: isActive(index) ? 1 : 0.92,
                    y: isActive(index) ? 0 : 20,
                    zIndex: isActive(index) ? testimonials.length : testimonials.length - Math.abs(index - active),
                    rotate: isActive(index) ? '0deg' : randomRotate(),
                  }}
                  exit={{ opacity: 0, scale: 0.9, y: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover shadow-2xl"
                    onLoad={() => console.log(`Image loaded for ${testimonial.name}: ${testimonial.src}`)}
                    onError={() => console.error(`Failed to load image for ${testimonial.name}: ${testimonial.src}`)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text Section - Enhanced visibility on dark background */}
        <div className="flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col justify-between"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {testimonials[active].name}
                </h3>
                <p className="text-lg text-blue-200 mt-2 drop-shadow">
                  {testimonials[active].designation}
                </p>
                <motion.p className="mt-8 text-xl text-blue-100 drop-shadow">
                  {testimonials[active].quote}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex gap-4 pt-12">
            <button onClick={handlePrev} className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowLeft className="h-6 w-6 text-white" />
            </button>
            <button onClick={handleNext} className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Component() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <div className="z-10 w-full">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}

export default Component;
