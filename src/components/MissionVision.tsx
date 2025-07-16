import React from 'react';
import { motion } from 'framer-motion';

const MissionVision: React.FC = () => {
    const visionPoints = [
        "We’re on a mission to reimagine the live entertainment space. Our vision is to build a seamless loop—a creative ecosystem—where talent connects effortlessly with opportunity, and audiences are swept into unforgettable experiences.",
        "We dream of a future where creativity knows no limits, where artists are heard, seen, and celebrated globally. A future where collaboration and innovation drive sustainable artistic success.",
    ];

    const missionPoints = [
        "Our mission is simple—to empower talent and craft unforgettable entertainment journeys. We’re not just another artist management agency—we’re a collective of creators, strategists, and storytellers who breathe life into ideas and ambition.",
        "We work like your backstage crew, business manager, hype team, and creative guide—all in one loop. Whether it’s planning a tour, building your brand, or getting your name out there through PR services or powerful experiential marketing, we’re your partners from the green room to the spotlight.",
    ];

    return (
        <section className="py-20 bg-[#0D0D0D] backdrop-blur-md relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-32 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 1200 120" fill="none">
                        <path d="M0,60 Q300,30 600,60 T1200,60" stroke="#60A5FA" strokeWidth="2" />
                        <path d="M0,80 Q300,50 600,80 T1200,80" stroke="#3B82F6" strokeWidth="1" />
                    </svg>
                </div>
                <div className="absolute top-20 right-20 w-32 h-32 border border-[#60A5FA]/10 rounded-full" />
                <div className="absolute bottom-20 left-20 w-24 h-24 border border-[#3B82F6]/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-[#06B6D4]/5 rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                        <span className="text-gray-300">Our</span>
                        <span className="block text-transparent bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text animate-shimmer bg-[length:400%_100%]">
                            Vision & Mission
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Guiding principles that drive our commitment to excellence and innovation in the entertainment industry.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {[{ title: "🎯 Our Vision", points: visionPoints, color: "#60A5FA" }, { title: "🚀 Our Mission", points: missionPoints, color: "#3B82F6" }].map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            whileHover={{
                                scale: 1.01,
                                boxShadow: "0 0 20px rgba(96, 165, 250, 0.2)"
                            }}
                            className="h-full"
                        >
                            <div className="h-full flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                {/* Title */}
                                <div className="text-center mb-6">
                                    <h3 className="text-3xl font-light text-white mb-2">{section.title}</h3>
                                    <div
                                        className="w-16 h-0.5 mx-auto"
                                        style={{
                                            background: `linear-gradient(to right, ${section.color}, #06B6D4)`
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-6 flex-1">
                                    {section.points.map((text, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                                            className="flex items-start space-x-4"
                                        >
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: section.color }} />
                                            </div>
                                            <p className="text-gray-300 leading-relaxed text-lg">{text}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
