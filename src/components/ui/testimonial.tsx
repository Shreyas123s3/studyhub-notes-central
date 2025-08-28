
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Shreyas Salunkhe",
    designation: "10x Coding Club",
    src: "/lovable-uploads/6699e80d-dffa-4507-a555-715611bccbd1.png",
    quote: (
      <>
        <a href="https://www.linkedin.com/in/shreyas-salunkhe-b69556325/" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a> |{" "}
        <a href="https://www.instagram.com/shreyas_trx?igsh=ZjNjc3V5YWR3MjVy" target="_blank" className="text-pink-400 hover:underline">Instagram</a>
      </>
    ),
  },
  {
    name: "Tushar Kaldate",
    designation: "Member at ASSET",
    src: "/lovable-uploads/55ad6781-06fe-4418-9347-1085b456a6f3.png",
    quote: (
      <>
        <a href="https://www.linkedin.com/in/tushar-kaldate-2b5276262/" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a> |{" "}
        <a href="https://www.instagram.com/3412kkp" target="_blank" className="text-pink-400 hover:underline">Instagram</a>
      </>
    ),
  },
  {
    name: "Aradhya Avhad",
    designation: "Mozilla Club & ASSET member",
    src: "/lovable-uploads/59215696-90e4-4c37-bad9-1c8fdbc91219.png",
    quote: (
      <>
        <a href="https://www.linkedin.com/in/aradhya-avhad-800552327" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a> |{" "}
        <span className="text-gray-400">Instagram N/A</span>
      </>
    ),
  },
  {
    name: "Pranshu Bobade",
    designation: "GDG Club & ASSET member",
    src: "/lovable-uploads/a7e6a62e-cada-4a52-8f8b-491e1cb7f223.png",
    quote: (
      <>
        <a href="https://www.linkedin.com/in/pranshu-bobade-18a05032a" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a> |{" "}
        <a href="https://www.instagram.com/notyetaegon?igsh=emVkeXNqaDRkMDFs" target="_blank" className="text-pink-400 hover:underline">Instagram</a>
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
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-20">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <div className="relative h-80 w-full max-w-xs">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, scale: 0.9, y: 50, rotate: randomRotate() }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.5,
                    scale: isActive(index) ? 1 : 0.9,
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
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text Section */}
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
                <h3 className="text-2xl font-bold text-white">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-blue-200">
                  {testimonials[active].designation}
                </p>
                <motion.p className="mt-8 text-lg text-blue-100">
                  {testimonials[active].quote}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex gap-4 pt-12">
            <button onClick={handlePrev} className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowLeft className="h-5 w-5 text-white" />
            </button>
            <button onClick={handleNext} className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Component() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div className="z-10">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}

export default Component;
