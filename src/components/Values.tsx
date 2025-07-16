import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Palette, Users, Globe, Award } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We prioritize transparency, trust, and professionalism in every relationship—with our artists, our clients, and our audiences. Our goal is to create a space where artists feel free and empowered to express their true creative identities.",
  },
  {
    icon: Palette,
    title: "Creativity",
    description:
      "Innovation drives everything we do. We embrace bold ideas and push the boundaries of what’s possible in entertainment. We aspire to be today's “out of the box idea” and tomorrow's “core memory unlocked on a night I’ll never forget.”",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We know and believe success is never a solo act. We believe in meaningful partnerships that empower talent and foster collective growth. We dream of global collaborations that bring together culture, stories, innovation, and shared purpose across borders.",
  },
  {
    icon: Globe,
    title: "Diversity & Inclusion",
    description:
      "We represent talent from all walks of life and champion stories that reflect the richness of global culture. We seek out voices that are often unheard and celebrate stories that challenge norms, spark dialogue, and honor the complexity of global experiences.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Excellence is our standard—from the first conversation to the final curtain call. Whether it’s booking the right talent, crafting compelling narratives, or executing immersive events, we deliver results that exceed expectations and leave a lasting legacy.",
  },
];

const Values = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] overflow-hidden">
      {/* Glows */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-[#60A5FA]/5 rounded-full blur-3xl top-0 left-1/4" />
        <div className="absolute w-[500px] h-[500px] bg-[#3B82F6]/4 rounded-full blur-3xl bottom-0 right-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            <span className="text-gray-300">Our Core</span>{' '}
            <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
              Values
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The principles that guide everything we do, from artist relationships to audience experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative min-h-[440x] bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-500 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#60A5FA]/10 to-[#3B82F6]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#60A5FA]/20 group-hover:to-[#3B82F6]/20 transition-colors duration-300">
                  <value.icon className="w-10 h-10 text-[#60A5FA] group-hover:text-[#3B82F6] transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#60A5FA] transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed">
                  {value.description}
                </p>

                {/* Border on Hover */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#60A5FA]/20 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer tag */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="inline-flex items-center gap-6 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <div className="w-1.5 h-1.5 bg-[#60A5FA] rounded-full" />
            <span className="text-gray-400 text-sm font-light">Guiding every decision we make</span>
            <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Values;
