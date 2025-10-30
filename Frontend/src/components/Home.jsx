import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import hero from "../images/hero.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fff8f5] min-h-screen overflow-hidden">
      {/* 🌅 Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-20 px-8 lg:px-16 bg-gradient-to-b from-[#fff6f0] to-[#ffe4d9] relative overflow-hidden">
        <motion.div
          className="max-w-xl z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#c53d0e] leading-tight mb-6">
            Find Your Perfect{" "}
            <span className="text-orange-500">Roommate</span> 🧡
          </h1>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            <b>MateMatch</b> connects you with people who share your vibe,
            values, and lifestyle. Whether you’re a student, a professional, or
            moving to a new city — we help you find a roommate who truly fits.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#c53d0e] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#e85b25] transition"
              onClick={() => navigate("/login")}
            >
              Get Started 🚀
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-[#c53d0e] text-[#c53d0e] px-6 py-3 rounded-full font-medium hover:bg-[#fff0e9]"
              onClick={() => navigate("/about")}
            >
              Learn More ℹ️
            </motion.button>
          </div>
        </motion.div>

        {/* Floating hero image */}
        <motion.img
          src={hero}
          alt="Roommates illustration"
          className="w-[380px] md:w-[460px] lg:w-[520px] mt-12 lg:mt-0 drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Decorative background bubbles */}
        <div className="absolute top-10 left-20 w-20 h-20 bg-orange-200 rounded-full blur-2xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-200 rounded-full blur-2xl opacity-40 animate-pulse" />
      </section>

      {/* 🌟 Feature Highlights */}
      <section className="py-20 px-8 bg-[#fff8f5]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#c53d0e] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why You’ll ❤️ MateMatch
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "🎯",
              title: "Smart Compatibility",
              desc: "Our algorithm connects you with roommates who match your lifestyle and preferences.",
            },
            {
              icon: "🛡️",
              title: "Safe & Verified",
              desc: "All users are verified for authenticity, ensuring a trustworthy roommate experience.",
            },
            {
              icon: "💬",
              title: "Instant Messaging",
              desc: "Chat directly within the platform and get to know your potential roommate easily.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white rounded-3xl border border-orange-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-xl mb-3 text-[#c53d0e]">
                {f.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💡 How It Works Section */}
      <section className="bg-gradient-to-b from-[#fff0e8] to-[#ffe5d7] py-20 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#c53d0e] mb-12">
          How It Works 🔍
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "1️⃣",
              title: "Create Your Profile",
              desc: "Tell us about your preferences, habits, and location.",
            },
            {
              step: "2️⃣",
              title: "Match & Connect",
              desc: "Our smart algorithm finds the most compatible roommates for you.",
            },
            {
              step: "3️⃣",
              title: "Move In & Relax",
              desc: "Chat, connect, and start your shared-living journey easily.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="text-4xl mb-3">{item.step}</div>
              <h3 className="font-semibold text-xl text-[#c53d0e] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✨ Final CTA Section — glassmorphic style */}
      <motion.section
        className="text-center py-24 px-8 relative overflow-hidden bg-[#fff8f5]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated soft gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#ffe0d2_0%,transparent_70%),radial-gradient(circle_at_80%_70%,#ffc6aa_0%,transparent_60%)] opacity-60 animate-pulse" />

        {/* Centered glass card */}
        <div className="relative z-10 max-w-3xl mx-auto backdrop-blur-lg bg-white/60 border border-orange-100 rounded-3xl shadow-xl p-10">
          <h2 className="text-4xl font-extrabold mb-4 text-[#c53d0e]">
            Ready to Start Your MateMatch Journey? ✨
          </h2>
          <p className="mb-10 text-lg text-gray-700 leading-relaxed">
            Join our growing community of happy, compatible roommates and make
            shared living easy, comfortable, and full of great memories.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#c53d0e] text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#e85b25]"
            onClick={() => navigate("/login")}
          >
            Join Now 💫
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
