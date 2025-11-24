import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative w-full bg-primary/95 overflow-hidden py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12"
        >
          {/* Left section - Icons grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-shrink-0 w-full lg:w-auto"
          >
            <div className="grid grid-cols-4 gap-2 md:gap-3 w-fit mx-auto lg:mx-0">
              {[
                { emoji: "🔗", label: "Hubbub" },
                { emoji: "📦", label: "Notion" },
                { emoji: "🔔", label: "Slack" },
                { emoji: "→", label: "Get" },
                { emoji: "▲", label: "Aptly" },
                { emoji: "📊", label: "Rep3" },
                { emoji: "🎵", label: "Figma" },
                { emoji: "👤", label: "Clay" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-lg flex items-center justify-center text-base sm:text-lg md:text-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  {item.emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center section - Main text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1 text-center lg:text-left px-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight mb-2">
              THE RIGHT PROCESS TO GET
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
              MEETINGS BOOKED!
            </h2>
          </motion.div>

          {/* Right section - Logo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-1">GTM</div>
                <div className="text-[0.55rem] sm:text-xs md:text-sm font-semibold text-slate-700 leading-tight">
                  OUTBOUND<br />SERVICES
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default Banner;
