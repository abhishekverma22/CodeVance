import { motion } from "framer-motion";

const CreatorsSection = () => {
  const creators = [
    {
      name: "Lakshman Kumar",
      role: "Founder & Backend Lead",
      description:
        "Lakshman, the visionary founder of CodeVance, leads the backend engineering team with a strong focus on performance, scalability, and reliability. His approach ensures that the foundation of CodeVance remains robust and future-ready.",
      accentColor: "text-[#626F47]",
      signature: "Lakshman kumar",
    },
    {
      name: "Abhishek Verma",
      role: "CTO & Design Lead",
      description:
        "Abhishek, the creative force behind the user experience at CodeVance, serves as the Chief Technology Officer. He heads the design and frontend team, shaping smooth, modern, and intuitive interfaces.",
      accentColor: "text-[#B4EBE6]",
      signature: "Abhishek verma",
    },
  ];

  const bubbles = [
    { size: 120, delay: 0.2, duration: 25, opacity: 0.15 },
    { size: 80, delay: 0.4, duration: 30, opacity: 0.1 },
    { size: 150, delay: 0.6, duration: 35, opacity: 0.2 },
    { size: 100, delay: 0.8, duration: 40, opacity: 0.12 },
    { size: 200, delay: 1.0, duration: 45, opacity: 0.18 },
  ];

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, #000000, #2f3743),
          repeating-linear-gradient(
            0deg,
            rgba(253, 172, 51, 0.171) 0px,
            rgba(185, 182, 177, 0.08) 1px,
            transparent 1px,
            transparent 90px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(236, 223, 204, 0.08) 0px,
            rgba(236, 223, 204, 0.08) 1px,
            transparent 1px,
            transparent 80px
          )`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}>
      {/* Floating bubbles */}
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: "100%", y: "100%", scale: 0.5 }}
          animate={{
            opacity: [0, bubble.opacity, bubble.opacity, 0],
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: bubble.delay,
          }}
          className="absolute rounded-full bg-[#626F47] filter blur-xl"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-ZenDots text-white mb-16 text-center tracking-widest">
          The <span className="text-[#626F47]">M</span>inds{" "}
          <span className="text-[#B4EBE6]">B</span>ehind
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#626F47]/50 transition-all duration-500 shadow-md">
              {/* Accent shape */}
              <div
                className={`absolute -top-8 -left-8 w-32 h-32 ${creator.accentColor.replace(
                  "text",
                  "bg"
                )} opacity-20 rounded-full filter blur-3xl -z-10`}></div>

              <div className="space-y-6">
                <div>
                  <h3 className={`text-3xl font-bold ${creator.accentColor}`}>
                    {creator.name}
                  </h3>
                  <p className="text-lg text-gray-300 font-medium">
                    {creator.role}
                  </p>
                </div>
                <p className="text-gray-400 font-poppins leading-relaxed">
                  {creator.description}
                </p>
                <div className="flex items-center gap-3 justify-end">
                  <div
                    className={`w-16 h-1 ${creator.accentColor.replace(
                      "text",
                      "bg"
                    )} rounded-full`}></div>
                  <p className="font-signature text-amber-50 text-3xl ">
                    {creator.signature}
                  </p>
                </div>
              </div>

              {/* Floating dots */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full ${creator.accentColor.replace(
                      "text",
                      "bg"
                    )}`}
                    style={{
                      left: `${Math.random() * 80}%`,
                      top: `${Math.random() * 80}%`,
                    }}></div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Creator Thought */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#626F47]/10 rounded-full filter blur-3xl"></div>
          <div className="relative bg-[#626F47]/10 backdrop-blur-sm border border-[#626F47]/30 rounded-3xl p-8">
            <h3 className="text-2xl font-ZenDots text-[#B4EBE6] mb-4">
              Creator's Thoughts
            </h3>
            <p className="text-gray-300 font-poppins italic">
              "Great collaboration tools should disappear into the workflow,
              becoming invisible yet essential."
            </p>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#626F47]/10 backdrop-blur-sm border-r border-b border-[#626F47]/30 rounded-br-3xl transform rotate-45"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorsSection;
