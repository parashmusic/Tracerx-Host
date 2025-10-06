import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video reveal animation
      gsap.fromTo(videoRef.current,
        { 
          scale: 1.1,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Overlay fade animation
      gsap.to(overlayRef.current, {
        opacity: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      });

      // Parallax effect for video
      gsap.to(videoRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Video Background */}
      <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="absolute  inset-0 w-full h-full object-cover"
    >
      <source 
        src="/promotracer.mp4" 
        type="video/mp4" 
      />
      Your browser does not support the video tag.
    </video>

      {/* Gradient Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div 
              className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/10 border border-white/20 rounded-full text-xs md:text-sm text-white backdrop-blur-xl"
            >
              <div className="w-2 h-2 bg-white rounded-full mr-2 md:mr-3 animate-pulse"></div>
              Experience the Future
            </motion.div>

            {/* <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Built for the
              <br />
              <span className="font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                modern freelancer
              </span>
            </motion.h2> */}

            {/* <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Every detail crafted to perfection. Every feature designed to elevate your workflow.
            </motion.p> */}
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-30" />
    </section>
  );
}