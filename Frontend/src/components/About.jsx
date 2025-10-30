import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../images/hero.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff8f5] via-[#fff2eb] to-[#ffe9e0] text-[#c53d0e] overflow-hidden">
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-[#b1350a]">MateMatch</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
          The smarter, kinder way to find your perfect roommate — because a good match
          makes a great home 🏡💞
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-10"
        >
          <Link
            to="/feed"
            className="px-8 py-3 rounded-full text-lg font-semibold bg-[#c53d0e] text-white hover:bg-[#b1350a] transition-all shadow-md"
          >
            Find Your Match ✨
          </Link>
        </motion.div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={Hero}
            alt="Roommates illustration"
            className="rounded-3xl shadow-lg"
          />
          <div>
            <h2 className="text-4xl font-semibold mb-4 text-[#b1350a]">
              🧩 Our Story
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              MateMatch was born from a simple idea — finding a roommate should feel exciting,
              not exhausting. We wanted to build a space where connection feels natural, safe,
              and human again.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              So we built a platform that goes beyond rent and rooms — a place that
              helps you find someone who shares your rhythm, your vibe, and maybe even
              your playlist. 🎶
            </p>
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-[#fff3ee] border-y border-[#f5e0d6] py-20 px-6 text-center"
      >
        <h2 className="text-4xl font-semibold mb-6 text-[#b1350a]">🌈 Our Vision</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
          We dream of cities filled with harmony — where people find not just a place to
          stay, but a place to belong. Every match we make is a step toward happier homes,
          meaningful friendships, and stronger communities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
          {[
            {
              emoji: "🤝",
              title: "Real Connection",
              text: "Our platform connects you based on lifestyle and values, not just profiles.",
            },
            {
              emoji: "🔒",
              title: "Trust & Safety",
              text: "Privacy-first, transparent matching, and respectful communication.",
            },
            {
              emoji: "🌍",
              title: "Community",
              text: "We’re building more than matches — we’re building a home-sharing culture that cares.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#fff8f5] border border-[#f5e0d6] rounded-3xl p-8 shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{card.emoji}</div>
              <h3 className="text-2xl font-semibold text-[#b1350a] mb-2">{card.title}</h3>
              <p className="text-gray-700 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="py-20 px-6 text-center max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-semibold mb-6 text-[#b1350a]">
          💬 What We Believe
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
          Life feels lighter when you live with people who understand you.  
          MateMatch is not just a product — it’s a philosophy built on empathy,
          trust, and belonging.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Every roommate deserves respect 🤍",
            "A good match makes every day better ☀️",
            "Home is not a place — it’s a feeling 🏡",
          ].map((quote, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#fff8f5] border border-[#f5e0d6] rounded-2xl p-6 shadow-md text-gray-700 italic text-lg"
            >
              “{quote}”
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="bg-[#fff3ee] border-t border-[#f5e0d6] py-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#b1350a] mb-6">
          Ready to find your perfect match?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Join MateMatch today and discover how amazing it feels when your roommate truly fits your lifestyle.  
          Because every great home starts with a great match 💞
        </p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/feed"
            className="px-10 py-4 bg-[#c53d0e] text-white text-lg rounded-full shadow-lg hover:bg-[#b1350a] transition-all"
          >
            Start Matching Now 🚀
          </Link>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 text-sm bg-[#fff8f5] border-t border-[#f5e0d6]">
        Made with ❤️ by <span className="text-[#b1350a] font-semibold">Aditya</span> — © {new Date().getFullYear()} MateMatch
      </footer>
    </div>
  );
};

export default About;
