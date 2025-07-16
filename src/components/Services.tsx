import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Music,
  Calendar,
  Megaphone,
  Camera,
  Settings,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Artist Management",
      tagline: "Careers don't just happen—they're built. And we build them right.",
      paragraph: `We offer comprehensive artist management services designed around each artist’s creative vision, career goals, and unique identity. Our expert team partners closely with artists to map their growth journey through strategic planning, brand development, talent coaching, and end-to-end support.`,
      nextLine: "Our artist management services include:",
      points: [
        "Strategic career planning & long-term development",
        "Booking & contract negotiations",
        "Tour management & logistics",
        "Personal branding & image consulting",
        "Rights management & financial advisory",
        "Mental wellness and career sustainability support"
      ],
      conclusion: "As a leading entertainment talent management company, we cultivate not just careers—but legacies."
    },
    {
      icon: Music,
      title: "Talent Booking",
      tagline: "The right talent. The right crowd. Every time.",
      paragraph: `Closed Loop connects event organizers, brands, and venues with a diverse roster of high-caliber performers and influencers. Whether it's a high-energy festival, an exclusive corporate event, or a curated showcase, we ensure that talent and audience align seamlessly.`,
      nextLine: "Talent booking offerings:",
      points: [
        "Customised artist curation for events and campaigns",
        "Domestic and international talent sourcing",
        "Corporate, festival, nightlife, and private event bookings",
        "Technical and hospitality rider coordination",
        "Real-time artist availability and response management"
      ],
      conclusion: "We bring talent to stages, screens, and spaces where their impact resonates."
    },
    {
      icon: Calendar,
      title: "Event Production",
      tagline: "From concept to curtain call, we create unforgettable moments.",
      paragraph: `As a leading event production company, our production team handles events with precision, flair, and creative direction that leaves a lasting impression. We specialize in immersive, culturally relevant experiences that blend entertainment, storytelling, and seamless execution.`,
      nextLine: "Production services include:",
      points: [
        "Full-service event conceptualization and planning",
        "Stage and lighting design, AV, and technical coordination",
        "Artist and guest logistics",
        "Creative direction and programming",
        "Staffing, vendor management, and onsite execution",
        "Post-event analytics and impact reporting"
      ],
      conclusion: "From intimate showcases to large-scale productions, we turn events into experiences."
    },
    {
      icon: Megaphone,
      title: "Brand Partnerships",
      tagline: "Authentic collaborations that amplify both artist and brand.",
      paragraph: `We pair artists with bold, forward-thinking brands to create campaigns, experiences, and content that resonate deeply with audiences. Every partnership is built on creative alignment and mutual value, with storytelling at the core.`,
      nextLine: "We specialize in:",
      points: [
        "Brand-artist matchmaking and creative integration",
        "Endorsements, campaigns, and experiential marketing",
        "Social media and digital activations",
        "Collaborative content production",
        "Long-term brand ambassadorship development",
        "Negotiations, contracts, and brand protection"
      ],
      conclusion: "We build partnerships that last—because they’re real."
    },
    {
      icon: Camera,
      title: "Media & PR",
      tagline: "Great stories deserve to be heard. Our PR services ensure your voice rises above the noise.",
      paragraph: `In a fast-moving digital world, strategic publicity and media presence are vital. Our team elevates your voice through targeted media campaigns, press coverage, and reputation management that amplifies your personal brand and artistic identity.`,
      nextLine: "Our PR services include:",
      points: [
        "Media relations and press outreach",
        "Social media strategy and growth campaigns",
        "Content creation, storytelling, and branding",
        "Influencer collaborations",
        "Crisis communication & reputation management",
        "Interview coaching and media training"
      ],
      conclusion: "We don’t just get you seen—we get you remembered."
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl top-20 left-10" />
        <div className="absolute w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-3xl bottom-20 right-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            <span className="text-gray-300">What</span>{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text animate-shimmer bg-[length:400%_100%]">
              We Offer
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            At Closed Loop, we provide a fully integrated suite of services designed to support artists, brands, and event organizers at every stage of their journey. Whether you're an emerging name or a global brand, we create a continuous loop of creative growth, visibility, and opportunity.
          </p>
        </motion.div>

        <div className="relative space-y-20">
          <svg className="absolute left-0 top-0 h-full w-full z-0" viewBox="0 0 1000 1400" preserveAspectRatio="none">
            <path
              d={services.map((_, i) => {
                const x = i % 2 === 0 ? 150 : 850;
                const y = i * 240 + 90;
                return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
              }).join(' ') + ` L 500,${services.length * 240 + 180}`}
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {services.map((svc, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div key={idx} initial={{ opacity: 0, x: isLeft ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className={`relative group flex ${isLeft ? 'justify-start' : 'justify-end'} z-10`}>
                <div className={`flex flex-col items-start max-w-md px-6 py-4 bg-[#1A1A1A] rounded-2xl shadow-lg shadow-black/10 border border-gray-800 ${isLeft ? 'ml-6 text-left' : 'mr-6 text-left'}`}>
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                    <svc.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{svc.title}</h3>
                  <p className="text-blue-300 font-medium mb-2">{svc.tagline}</p>
                  <p className="text-blue-200 mb-2 whitespace-pre-line">{svc.paragraph}</p>
                  <p className="text-blue-200 mb-2 whitespace-pre-line">{svc.nextLine}</p>
                  <ul className="text-gray-400 list-disc pl-5 mb-2">
                    {svc.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                  <p className="text-blue-100 italic">{svc.conclusion}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-40 z-10 relative">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center gap-3">
            Explore Our Services
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
