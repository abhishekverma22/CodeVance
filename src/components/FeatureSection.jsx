import { motion } from "framer-motion";
import {
  FiCode,
  FiUsers,
  FiZap,
  FiLock,
  FiLayers,
  FiGlobe,
} from "react-icons/fi";
import featureImg from "../assets/featureImg.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiCode className="text-3xl text-[#B4EBE6]" />,
      title: "Real-Time Collaboration",
      description:
        "Code together simultaneously with live updates and multi-cursor support.",
    },
    {
      icon: <FiUsers className="text-3xl text-[#626F47]" />,
      title: "Team Management",
      description:
        "Organize your team with roles, permissions, and project spaces.",
    },
    {
      icon: <FiZap className="text-3xl text-[#B4EBE6]" />,
      title: "Instant Deployment",
      description:
        "One-click deployments to test and share your work immediately.",
    },
    {
      icon: <FiLock className="text-3xl text-[#626F47]" />,
      title: "Secure Environment",
      description: "Enterprise-grade security with end-to-end encryption.",
    },
    {
      icon: <FiLayers className="text-3xl text-[#B4EBE6]" />,
      title: "Version Control",
      description: "Built-in Git integration with visual diff tools.",
    },
    {
      icon: <FiGlobe className="text-3xl text-[#626F47]" />,
      title: "Global Access",
      description: "Low-latency performance from anywhere in the world.",
    },
  ];

  return (
    <section
      className="relative py-50 px-4 sm:px-6 lg:px-8 "
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
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-ZenDots text-white mb-4 tracking-wide">
            Feat<span className="text-[#626F47] mx-0.5">u</span>res & Benef
            <span className="text-[#626F47] mx-0.5">i</span>ts
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-poppins">
            Everything you need to collaborate effectively
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#626F47]/50 transition-all duration-300">
              <div className="flex items-start space-x-5">
                <div className="p-3 rounded-lg bg-white/10 border border-white/10">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 font-poppins">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Split layout example */}
        <motion.div
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          <div className="order-1 lg:order-none">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              {/* Replace with your actual image */}
              <div className="aspect-video bg-gradient-to-r from-[#626F47] to-[#B4EBE6] flex items-center justify-center">
                <img
                  src={featureImg}
                  alt="featureImg"
                  className="scale-100 hover:scale-130 transition-transform duration-500 w-full h-full"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-ZenDots text-white mb-4">
              Visual <span className="text-[#626F47]">D</span>ebugging
            </h3>
            <p className="text-gray-400 font-poppins mb-6">
              Our visual debugging tools help you identify and fix issues faster
              than ever. See real-time data flows and execution paths in an
              intuitive interface.
            </p>
            <ul className="space-y-3">
              {[
                "Interactive data inspection",
                "Execution timeline visualization",
                "Collaborative debugging sessions",
                "Performance heatmaps",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-gray-300 font-poppins">
                  <span className="text-[#626F47] mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
