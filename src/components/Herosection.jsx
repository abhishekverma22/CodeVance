import { motion } from "framer-motion";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen w-full overflow-x-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        color: "white",
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
      {/* Content container */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto py-20 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-5xl text-white mb-4 sm:mb-6 leading-[1.1] md:leading-[1.2] tracking-wide hover:text-transparent hover:[-webkit-text-stroke:2px_grey] hover:[text-stroke:2px_grey] transition-colors duration-300 hover:cursor-none font-ZenDots"
          style={{
            textWrap: "balance",
          }}>
          Efficient C<span className="mx-0.5 text-[#626F47]">o</span>llab
          <span className="mx-0.5 text-[#626F47]">o</span>rati
          <span className="mx-0.5 text-[#626F47]">o</span>n f
          <span className="mx-0.5 text-[#626F47]">o</span>r M
          <span className="mx-0.5 text-[#626F47]">o</span>dern{" "}
          <br className="hidden md:block" />
          Devel<span className="mx-0.5 text-[#626F47]">o</span>pers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-base sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-2xl md:max-w-3xl mx-auto mt-4 sm:mt-8 font-poppins px-2 sm:px-0">
          C<span className="mx-0.5 text-[#626F47] font-ZenDots">o</span>de •
          Think • Share • Speak • Debug — T
          <span className="mx-0.5 text-[#626F47] font-ZenDots">o</span>gether.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button className="px-6 sm:px-8 py-2.5 sm:py-3.5 bg-white/50 text-black hover:bg-gray-100 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto max-w-xs sm:max-w-none">
            Get Started
          </button>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3.5 text-white bg-white/10 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 active:scale-95 border border-white/20 cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto max-w-xs sm:max-w-none">
            Read More <MdOutlineArrowRightAlt className="text-lg" />
          </button>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 sm:border-3 border-white/40 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 6, 8],
              opacity: [1, 0.6, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="w-1 h-2 sm:h-3 bg-white/100 mt-1 sm:mt-2 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
