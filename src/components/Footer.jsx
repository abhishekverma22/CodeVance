import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaRocket,
  FaBook,
  FaLightbulb,
  FaCode,
  FaUsers,
  FaFileAlt,
} from "react-icons/fa";

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const year = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const backgroundVariants = {
    hidden: { backgroundPosition: "0% 0%" },
    visible: {
      backgroundPosition: "100% 100%",
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  };

  const socialLinks = [
    { icon: <FaTwitter />, url: "https://twitter.com/codevance" },
    { icon: <FaGithub />, url: "https://github.com/codevance" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/company/codevance" },
    { icon: <FaFacebook />, url: "https://facebook.com/codevance" },
  ];

  const quickLinks = [
    { icon: <FaRocket />, text: "Features", url: "#features" },
    { icon: <FaBook />, text: "Documentation", url: "/docs" },
    { icon: <FaUsers />, text: "Community", url: "/community" },
    { icon: <FaFileAlt />, text: "Blog", url: "/blog" },
  ];

  return (
    <motion.footer
      ref={ref}
      className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        variants={backgroundVariants}
        style={{
          background:
            "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0zMCA2MEMxMy40MzEgNjAgMCA0Ni41NjkgMCAzMEMwIDEzLjQzMSAxMy40MzEgMCAzMCAwczMwIDEzLjQzMSAzMCAzMGMwIDE2LjU2OS0xMy40MzEgMzAtMzAgMzB6bTAtNTguODU3QzE0LjU0MSAxLjE0MyAxLjE0MyAxNC41NDEgMS4xNDMgMzBjMCAxNS40NTkgMTMuMzk4IDI4Ljg1NyAyOC44NTcgMjguODU3IDE1LjQ1OSAwIDI4Ljg1Ny0xMy4zOTggMjguODU3LTI4Ljg1NyAwLTE1LjQ1OS0xMy4zOTgtMjguODU3LTI4Ljg1Ny0yOC44NTd6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuMDgiLz48L2c+PC9zdmc+')]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}>
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h1 className="text-[#F4E7E1] text-3xl  font-semibold mb-5 flex items-center " >
              <span className="font-ZenDots tracking-widest">
                C<span className="text-[#626F47]">o</span>deVance
              </span>
            </h1>
            <div className="space-y-2">
              <div className="flex items-center text-slate-400 my-4">
                <FaMapMarkerAlt className="mr-3" />
                <span>Ranchi, Jharkhand, India</span>
              </div>
              <div className="flex items-center text-slate-400 my-4">
                <FaEnvelope className="mr-3" />
                <a
                  href="mailto:contact@codevance.com"
                  className="hover:text-white transition-colors ">
                  contact@codevance.com
                </a>
              </div>
              <div className="flex items-center text-slate-400 ">
                <FaPhone className="mr-3" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors ">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-xl"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <FaRocket className="mr-2" /> Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.url}
                    className="text-slate-400 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">{link.icon}</span>
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Documentation */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <FaBook className="mr-2" /> Documentation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Getting Started", url: "/docs" },
                { name: "Tutorials", url: "/docs/tutorials" },
                { name: "Examples", url: "/docs/examples" },
                { name: "FAQ", url: "/docs/faq" },
              ].map((doc, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={doc.url}
                    className="text-slate-400 hover:text-white transition-colors">
                    {doc.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Creator's Thoughts */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <FaLightbulb className="mr-2" /> Our Vision
            </h3>
            <blockquote className="text-slate-300 italic mb-4">
              "At CodeVance, we believe in building technology that empowers
              people and transforms businesses through innovative digital
              solutions."
            </blockquote>
            <p className="text-slate-400">
              Join us in our journey to create meaningful digital experiences
              that make a difference.
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-slate-700/50 my-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
          }}>
          <motion.p
            className="text-slate-400 mb-4 md:mb-0"
            variants={itemVariants}>
            © {year} CodeVance Technologies. All rights reserved.
          </motion.p>

          <motion.div className="flex space-x-6" variants={itemVariants}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}>
                  {item}
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/20 blur-xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan-500/20 blur-xl"
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </motion.footer>
  );
};

export default Footer;
