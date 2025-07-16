import React, { useEffect, useState } from 'react';
import { Users, CalendarCheck2, LayoutGrid, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "A Curated Network of Top-Tier Talent",
      description:
        "We handpick and represent some of the most dynamic and diverse talent in the entertainment industry, from chart-topping musicians and electrifying emcees to skilled dancers and high-energy DJs. Our artist roster is carefully curated for originality, professionalism, and impact. Whether it's a corporate event, wedding, or brand activation, our artist management agency is there to match the right artist with the right platform for unforgettable experiences.",
    },
    {
      icon: CalendarCheck2,
      title: "Hands-On Experience Across Diverse Event Types",
      description:
        "Our team brings years of real-world experience in organizing and managing a wide spectrum of events. From intimate gatherings and private parties to large-scale corporate events and public concerts, we understand the nuances that make each event unique. We plan every detail with precision timelines, vendor coordination, venue setup, and talent management, ensuring flawless execution from start to finish.",
    },
    {
      icon: LayoutGrid,
      title: "One-Stop Destination for Artist, Event & Production Needs",
      description:
        "Closed Loop offers a complete ecosystem for entertainment and event services under one roof. You don’t need to juggle multiple vendors. We handle everything from artist sourcing and event concept planning to production logistics like stage, sound, lighting, and branding. This integrated approach ensures smooth communication, faster turnaround, and a unified creative vision for your event.",
    },
    {
      icon: Sparkles,
      title: "A Passionate Team That Brings Your Vision to Life",
      description:
        "We’re not just planners, we're creators. Our team is made up of passionate individuals who thrive on creativity, collaboration, and delivering extraordinary experiences. We take time to understand your vision, personalize every element, and go the extra mile to exceed expectations. At Closed Loop, your goals become our mission.",
    },
  ];

  const [rotationIndex, setRotationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationIndex((prev) => (prev + 1) % reasons.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Updated positions to push cards down more and adjust orbit container
  const radius = 320;
  const centerX = 360;
  const centerY = 430; // moved down for spacing
  const cardWidth = 360;
  const cardHeight = 360;

  const getRotatedPosition = (index: number) => {
    const angle = ((index + rotationIndex) % reasons.length) * (Math.PI / 2);
    return {
      left: `${centerX + radius * Math.cos(angle) - cardWidth / 2}px`,
      top: `${centerY + radius * Math.sin(angle) - cardHeight / 2}px`,
    };
  };

  return (
    <section className="relative bg-[#0D0D0D] py-28 overflow-visible z-20">
      {/* Background Pulses */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-[#60A5FA]/20 rounded-full blur-3xl top-16 left-1/3 animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-[#3B82F6]/20 rounded-full blur-3xl bottom-16 right-1/4 animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-4">
          <span className="text-gray-300">Why Choose</span>{' '}
          <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
            Closed Loop?
          </span>
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-400 max-w-3xl text-center mb-20 leading-relaxed">
          Where passion meets precision—bringing entertainment visions to life with style, skill, and soul.
        </p>

        {/* Orbit Container */}
        <div
          className="relative w-[720px] h-[740px] mb-28"
          style={{ overflow: 'visible' }}
        >
          {/* Infinity Spinner */}
          <div className="absolute left-1/2 top-[58%] transform -translate-x-1/2 -translate-y-1/2 z-10 perspective">
            <div className="flip-card-inner">
              <div className="flip-card-face">
                <svg
                  className="w-[120px] h-[120px]"
                  viewBox="0 0 200 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60,50 C45,10 0,10 0,50 C0,90 45,90 60,50 C75,10 120,10 120,50 C120,90 75,90 60,50"
                    stroke="url(#glassGradient)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <defs>
                    <linearGradient
                      id="glassGradient"
                      x1="0"
                      y1="0"
                      x2="120"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="rgba(255, 255, 255, 0.6)" />
                      <stop offset="1" stopColor="rgba(255, 255, 255, 0.15)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flip-card-face flip-card-back">
                <svg
                  className="w-[120px] h-[120px]"
                  viewBox="0 0 200 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60,50 C45,10 0,10 0,50 C0,90 45,90 60,50 C75,10 120,10 120,50 C120,90 75,90 60,50"
                    stroke="url(#glassGradient)"
                    strokeWidth="6"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Orbiting Cards */}
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const pos = getRotatedPosition(index);
            return (
              <div
                key={index}
                className="absolute p-6 bg-[#1A1A1A] rounded-2xl border border-gray-800 shadow-md text-center transition-all duration-1000 ease-in-out z-20"
                style={{
                  ...pos,
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                }}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-snug overflow-hidden">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coin Flip Animation */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }

        .flip-card-inner {
          width: 120px;
          height: 120px;
          position: relative;
          transform-style: preserve-3d;
          animation: coin-flip 4s linear infinite;
        }

        .flip-card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        @keyframes coin-flip {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(720deg);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
