import { motion } from "framer-motion";
import { useRef } from "react";
import lakshman from "../assets/lakshman.png";
import abhishek from "../assets/abhishek.jpg";

const AboutSection = () => {
  const Star = ({ size = 1, left, top }) => {
    const scale = size * (0.5 + Math.random() * 1.5);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0.3, 1, 0],
          scale: [scale * 0.5, scale, scale * 1.2, scale],
        }}
        transition={{
          duration: 2 + Math.random() * 6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute rounded-full bg-white"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: `0 0 ${size * 4}px ${size}px rgba(255, 255, 255, 0.3)`,
        }}
      />
    );
  };

  const generateStars = (count) =>
    Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        size={0.5 + Math.random() * 1.8}
        left={Math.random() * 100}
        top={Math.random() * 100}
      />
    ));

  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hiddeg-950n flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ color: "white" }}>
      {/* Static background matching Hero Section */}
      <div
        className="absolute inset-0"
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
          `,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0">{generateStars(120)}</div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-ZenDots text-white mb-6 leading-tight text-center">
            Ab<span className="text-[#626F47]">o</span>ut C
            <span className="text-[#626F47]">o</span>deVance
          </h2>

          <motion.div
            className="grid md:grid-cols-2 gap-10 text-gray-300 font-poppins"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              className="space-y-5 text-base md:text-lg">
              <p>
                CodeVance is a modern platform crafted for developers, learners,
                and creators to collaborate, practice, and grow together.
                Whether you're building a project, mastering a language, or
                sharing ideas — CodeVance offers a clean, fast, and intuitive
                environment to bring your vision to life.
              </p>
              <p>
                It's more than just a tool — <br /> it's your creative space to
                think, code, speak, and share.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              className="space-y-6">
              <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-[#B4EBE6] mb-3">
                  Our Mission
                </h3>
                <p>
                  To simplify collaboration and empower developers to build
                  together — faster, smarter, and with purpose.
                </p>
              </div>

              <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-[#B4EBE6] mb-3">
                  The Future
                </h3>
                <p>
                  We're shaping an AIO (All IN ONE) - driven ecosystem where
                  code, ideas, and people connect seamlessly in real time.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Team Cards */}
          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}>
            <h3 className="text-2xl text-white font-ZenDots mb-6 text-center tracking-wider">
              Meet The Team
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
              {[
                { role: "Founder", name: "Lakshman Kumar", dp: lakshman },
                { role: "CTO", name: "Abhishek Verma", dp: abhishek },
                { role: "DevOps", name: "Lakshman Kumar", dp: lakshman },
                { role: "Lead Designer", name: "Abhishek Verma", dp: abhishek },
              ].map((member) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 rounded-lg p-4 text-center border border-white/10 hover:bg-white/10 hover:cursor-pointer  transition-colors duration-300  hover:scale-105">
                  <div className="w-30 h-30 mx-auto mb-6 rounded-full bg-white/10  border border-solid border-gray-500 ">
                    <img
                      src={member.dp}
                      alt=""
                      className="rounded-full w-full h-full object-fill hover:scale-115 transition duration-500"
                    />
                  </div>
                  <h4 className="font-medium text-white">{member.role}</h4>
                  <p className="font-mono text-[18px] text-gray-400 mt-1">{member.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
