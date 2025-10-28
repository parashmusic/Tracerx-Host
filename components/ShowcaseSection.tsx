import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { 
  FolderKanban, 
  DollarSign, 
  BarChart3, 
  MessageSquare,
  Play,
  Pause
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseSection() {
  const sectionRef = useRef(null);
  const phonesRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Phones animation
      gsap.fromTo(phonesRef.current,
        { 
          y: 100, 
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: phonesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="use-cases" ref={sectionRef} className="py-0 md:py-0 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-2 md:px-4 py-1 md:py-1 bg-white/5 border border-white/10 rounded-full text-xs md:text-xs text-gray-400 mb-4 md:mb-5 backdrop-blur-xl"
          >
            Live Preview
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-2xl  font-light text-white mb-3 md:mb-4 leading-tight px-4"
          >
            TracerX in
            <br />
            <span className="font-bold bg-gradient-to-r  from-white via-gray-200 to-gray-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
              Action
            </span>
          </motion.h2>
          
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-lg text-gray-400 leading-relaxed font-light max-w-3xl mx-auto px-4"
          >
            Experience the complete workflow from project creation to payment tracking
          </motion.p> */}
        </div>

        <Tabs defaultValue="projects" className="w-full flex justify-center mx-auto px-4 sm:px-6">
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className='flex justify-center'
    >
    <TabsList className=" bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl mb-8 md:mb-12 lg:mb-16 backdrop-blur-xl gap-1 sm:gap-0">
      <TabsTrigger 
        value="projects" 
        className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-400 rounded-lg sm:rounded-xl font-light text-xs sm:text-sm px-2 sm:px-4 py-2"
      >
        <FolderKanban className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
        <span className="hidden sm:inline">Dashboard</span>
        <span className="sm:hidden">Dash</span>
      </TabsTrigger>
      <TabsTrigger 
        value="earnings" 
        className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-400 rounded-lg sm:rounded-xl font-light text-xs sm:text-sm px-2 sm:px-4 py-2"
      >
       <BarChart3 className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
        <span className="hidden sm:inline">Projects</span>
        <span className="sm:hidden">Project</span>
      </TabsTrigger>
      <TabsTrigger 
        value="analytics" 
        className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-400 rounded-lg sm:rounded-xl font-light text-xs sm:text-sm px-2 sm:px-4 py-2"
      >
        
        <MessageSquare className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
        <span className="hidden sm:inline">Task</span>
        <span className="sm:hidden">Task</span>
      </TabsTrigger>
      <TabsTrigger 
        value="collaboration" 
        className="data-[state=active]:bg-white data-[state=active]:text-black text-gray-400 rounded-lg sm:rounded-xl font-light text-xs sm:text-sm px-2 sm:px-4 py-2"
      >
         <DollarSign className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
        
        <span className="hidden sm:inline">Finance</span>
        <span className="sm:hidden">Finance</span>
      </TabsTrigger>
    </TabsList>
  </motion.div>

  <div ref={phonesRef}>
    <TabsContent value="projects" className="space-y-6 sm:space-y-8">
      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white">
            Effortless project organization
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Create projects, break them down into tasks, and track progress with beautiful visual indicators.
          </p>
          
          <div className="space-y-3 sm:space-y-4">
            {[
              { name: 'E-commerce Platform', progress: 85 },
              { name: 'Mobile App Design', progress: 62 },
              { name: 'Brand Identity', progress: 100 }
            ].map((project, index) => (
              <div key={index} className="space-y-1 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 font-light text-xs sm:text-sm md:text-base truncate max-w-[120px] sm:max-w-none">{project.name}</span>
                  <span className="text-white font-medium text-xs sm:text-sm md:text-base">{project.progress}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 sm:h-2">
                  <motion.div 
                    className="h-full rounded-full bg-white"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            <div className="w-[240px] sm:w-[280px] md:w-[320px] h-[510px] sm:h-[560px] md:h-[680px] bg-black rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-2 sm:p-3 shadow-[0_0_30px_rgba(255,255,255,0.05)] sm:shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-white/10">
              <div className="w-full h-full bg-black rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute top-1 sm:top-2 left-1/4 transform -translate-x-1/2 w-24 sm:w-28 md:w-32 h-3 sm:h-4 md:h-5 bg-[#0F0F12] rounded-full z-10"></div>
                
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/dashvideo.mp4" type="video/mp4" />
                </video>
                
                {/* <Button
                  onClick={toggleVideo}
                  size="icon"
                  className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 bg-black/70 hover:bg-black/90 text-white rounded-full backdrop-blur-xl border border-white/20 w-8 h-8 sm:w-10 sm:h-10"
                >
                  {isVideoPlaying ? 
                    <Pause className="w-3 sm:w-4 h-3 sm:h-4" /> : 
                    <Play className="w-3 sm:w-4 h-3 sm:h-4" />
                  }
                </Button> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </TabsContent>

    {/* Other tab contents with mobile responsive design */}
    <TabsContent value="earnings" className="space-y-6 sm:space-y-8">
      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white">
            Manage Your Projects
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Stay organized and keep your projects on track from start to finish.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            <div className="w-[240px] sm:w-[280px] md:w-[320px] h-[510px] sm:h-[560px] md:h-[680px] bg-black rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-2 sm:p-3 shadow-[0_0_30px_rgba(255,255,255,0.05)] sm:shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-white/10">
              <div className="w-full h-full bg-black rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute top-1 sm:top-2 left-1/4 transform -translate-x-1/2 w-24 sm:w-28 md:w-32 h-3 sm:h-4 md:h-5 bg-[#0F0F12] rounded-full z-10"></div>
                
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/projectvideo.mp4" type="video/mp4" />
                </video>
                
                {/* <Button
                  onClick={toggleVideo}
                  size="icon"
                  className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 bg-black/70 hover:bg-black/90 text-white rounded-full backdrop-blur-xl border border-white/20 w-8 h-8 sm:w-10 sm:h-10"
                >
                  {isVideoPlaying ? 
                    <Pause className="w-3 sm:w-4 h-3 sm:h-4" /> : 
                    <Play className="w-3 sm:w-4 h-3 sm:h-4" />
                  }
                </Button> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </TabsContent>

    <TabsContent value="analytics" className="space-y-6 sm:space-y-8">
      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white">
            Data-driven insights
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Understand your productivity patterns and optimize your workflow for maximum efficiency.
          </p>
          
          <div className="space-y-3 sm:space-y-4">
            {[
              { label: 'Productivity Score', value: '94%' },
              { label: 'Projects Completed', value: '23' },
              { label: 'Average Delivery', value: '2.3 days early' }
            ].map((stat, index) => (
              <div key={index} className="flex justify-between items-center py-1 sm:py-2 md:py-3 border-b border-white/10">
                <span className="text-gray-300 font-light text-xs sm:text-sm md:text-base truncate max-w-[120px] sm:max-w-none">{stat.label}</span>
                <span className="text-white font-medium text-xs sm:text-sm md:text-base">{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            <div className="w-[240px] sm:w-[280px] md:w-[320px] h-[510px] sm:h-[560px] md:h-[680px] bg-black rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-2 sm:p-3 shadow-[0_0_30px_rgba(255,255,255,0.05)] sm:shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-white/10">
              <div className="w-full h-full bg-black rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute top-1 sm:top-2 left-1/4 transform -translate-x-1/2 w-24 sm:w-28 md:w-32 h-3 sm:h-4 md:h-5 bg-[#0F0F12] rounded-full z-10"></div>
                
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/taskvideo.mp4" type="video/mp4" />
                </video>
                
                {/* <Button
                  onClick={toggleVideo}
                  size="icon"
                  className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 bg-black/70 hover:bg-black/90 text-white rounded-full backdrop-blur-xl border border-white/20 w-8 h-8 sm:w-10 sm:h-10"
                >
                  {isVideoPlaying ? 
                    <Pause className="w-3 sm:w-4 h-3 sm:h-4" /> : 
                    <Play className="w-3 sm:w-4 h-3 sm:h-4" />
                  }
                </Button> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </TabsContent>

    <TabsContent value="collaboration" className="space-y-6 sm:space-y-8">
      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white">
            Seamless collaboration
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Keep clients in the loop with task comments, project updates, and shared timelines.
          </p>
          
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {[
              { time: '2 hours ago', message: 'Homepage design approved by client' },
              { time: '1 day ago', message: 'Mobile responsive version completed' }
            ].map((update, index) => (
              <div key={index} className="p-2 sm:p-3 md:p-4 bg-white/5 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-xl">
                <div className="text-xs sm:text-sm text-gray-400 font-light mb-1 sm:mb-2">{update.time}</div>
                <div className="text-white font-light text-xs sm:text-sm md:text-base">{update.message}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 flex justify-center order-1 lg:order-2"
        >
         <div className="relative">
            <div className="w-[240px] sm:w-[280px] md:w-[320px] h-[510px] sm:h-[560px] md:h-[680px] bg-black rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-2 sm:p-3 shadow-[0_0_30px_rgba(255,255,255,0.05)] sm:shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-white/10">
              <div className="w-full h-full bg-black rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute top-1 sm:top-2 left-1/4 transform -translate-x-1/2 w-24 sm:w-28 md:w-32 h-3 sm:h-4 md:h-5 bg-[#0F0F12] rounded-full z-10"></div>
                
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/financevideo.mp4" type="video/mp4" />
                </video>
                
                {/* <Button
                  onClick={toggleVideo}
                  size="icon"
                  className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 bg-black/70 hover:bg-black/90 text-white rounded-full backdrop-blur-xl border border-white/20 w-8 h-8 sm:w-10 sm:h-10"
                >
                  {isVideoPlaying ? 
                    <Pause className="w-3 sm:w-4 h-3 sm:h-4" /> : 
                    <Play className="w-3 sm:w-4 h-3 sm:h-4" />
                  }
                </Button> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </TabsContent>
  </div>
</Tabs>
      </div>
    </section>
  );
}