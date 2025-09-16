import React from "react";
import { motion } from "framer-motion";
import { Search, Users, ShieldCheck } from "lucide-react";
import Footer from "./Footer";
import NewsFeed from "./NewsFeed";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate  = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
     

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Stop Fake News Before It Spreads
        </motion.h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Verify news credibility instantly using AI fact-checking + community power. 
          Protect yourself from misinformation in just one click.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex w-full max-w-lg bg-white rounded-full p-2 shadow-lg">
          <input
            type="text"
            placeholder="Paste news link or headline..."
            className="flex-1 px-4 py-2 text-gray-900 rounded-l-full outline-none"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 flex items-center">
            <Search className="w-5 h-5 mr-2" /> Check
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-16 bg-gray-900">
        <h3 className="text-3xl font-bold text-center">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-2xl shadow-lg text-center">
            <ShieldCheck className="w-12 h-12 mx-auto text-blue-400" />
            <h4 className="mt-4 text-xl font-semibold">AI Fact-Checking</h4>
            <p className="mt-2 text-gray-400">
              Cross-checks news with verified sources + ML models.
            </p>
          </motion.div>
          <motion.button whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-2xl shadow-lg text-center" onClick={()=>navigate('/community-voting')}>
            <Users className="w-12 h-12 mx-auto text-green-400" />
            <h4 className="mt-4 text-xl font-semibold" >Community Voting</h4>
            <p className="mt-2 text-gray-400">
              Users vote credibility, creating a trust score.
            </p>
          </motion.button>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 rounded-2xl shadow-lg text-center">
            <Search className="w-12 h-12 mx-auto text-purple-400" />
            <h4 className="mt-4 text-xl font-semibold">Instant Verification</h4>
            <p className="mt-2 text-gray-400">
              Get results in seconds with a simple search bar.
            </p>
          </motion.div>
        </div>
      </section>
      {/*News Section -- I will remove it later */}
      <NewsFeed />
      {/* Footer */}
      <Footer />

    </div>
  );
}
