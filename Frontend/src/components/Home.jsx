import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import hero from "../images/hero.png";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#fff8f5] flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left py-20 px-8 lg:px-16 bg-gradient-to-b from-[#fff6f0] to-[#ffece2]">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-[#c53d0e] leading-tight mb-4">
            Find Your Ideal <span className="text-orange-500">Roommate</span>{" "}
            Today 🏠
          </h1>
          <p className="text-gray-700 mb-6 text-lg">
            Whether you’re a student or a young professional, <b>MateMatch</b>{" "}
            helps you find reliable, compatible roommates based on lifestyle,
            habits, and preferences — so you can live comfortably and
            stress-free!
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button
              className="btn btn-outline border-[#c53d0e] text-[#c53d0e] hover:bg-[#c53d0e] hover:text-white"
              onClick={() => navigate("/login")}
            >
              Start Matching
            </button>
          </div>
        </motion.div>

        <motion.img
          src={hero}
          alt="Roommates illustration"
          className="w-150 mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-[#fff8f5]">
        <h2 className="text-3xl font-bold text-center text-[#c53d0e] mb-12">
          🧩 Why Choose MateMatch?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "🎯 Smart Compatibility",
              desc: "We use preference matching to connect you with roommates who share your habits and lifestyle.",
            },
            {
              title: "🛏️ Verified Listings",
              desc: "Every user and property is verified to ensure a safe and trustworthy experience.",
            },
            {
              title: "💬 Easy Communication",
              desc: "Chat directly with potential roommates and set up meetings right from the platform.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="card shadow-lg hover:shadow-2xl transition-all duration-300 p-6 rounded-2xl bg-white border border-orange-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
            >
              <h3 className="font-bold text-xl mb-2 text-[#c53d0e]">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="text-center bg-gradient-to-r from-[#c53d0e] to-[#e85b25] text-white py-16 px-8 mt-10 rounded-t-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">
          🏡 Ready to Find Your Perfect Roommate?
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Join thousands of students and professionals who’ve already found
          their ideal roommates through <b>MateMatch</b>. Start your journey
          toward stress-free living!
        </p>
        <button
          className="btn bg-white text-[#c53d0e] hover:bg-yellow-100 font-bold shadow-md"
          onClick={() => navigate("/login")}
        >
          Sign Up Now
        </button>
      </motion.section>
    </div>
  );
}
