import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaPaperPlane,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/yourprofile", // Replace with your LinkedIn
      color: "#0A66C2",
      description: "Connect with me professionally",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/yourusername", // Replace with your GitHub
      color: "#181717",
      description: "Check out my code repositories",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:your.email@gmail.com", // Replace with your email
      color: "#EA4335",
      description: "Send me a direct email",
    },
    {
      name: "Download CV",
      icon: FaDownload,
      url: "/path-to-your-cv.pdf", // Replace with your CV path
      color: "#4CAF50",
      description: "Download my resume",
      isDownload: true,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - Replace with actual form handling
    try {
      // You can integrate with EmailJS, Formspree, or your own backend here
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="c-space min-h-screen py-16">
      <div className="w-full max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold font-generalsans mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg font-generalsans max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create
              something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div
              className={`transform transition-all duration-700 delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <FaPaperPlane className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-generalsans">
                    Send Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-generalsans mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black-600/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 font-generalsans"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-generalsans mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black-600/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 font-generalsans"
                        placeholder="your.email@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-generalsans mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black-600/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 font-generalsans"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-generalsans mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black-600/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none font-generalsans"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl font-generalsans font-semibold transition-all duration-300 hover:scale-105 disabled:scale-100 shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="bg-green-600/20 border border-green-500/30 text-green-300 px-4 py-3 rounded-xl font-generalsans">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-600/20 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl font-generalsans">
                      ❌ Something went wrong. Please try again or email me
                      directly.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info & Social Links */}
            <div
              className={`transform transition-all duration-700 delay-400 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30 shadow-2xl mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <FaUser className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-generalsans">
                    Contact Info
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-300">
                    <FaMapMarkerAlt className="text-green-400 text-lg" />
                    <span className="font-generalsans">
                      Rawalpindi, Punjab, Pakistan
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <FaEnvelope className="text-green-400 text-lg" />
                    <span className="font-generalsans">
                      your.email@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <FaPhone className="text-green-400 text-lg" />
                    <span className="font-generalsans">
                      Available for calls
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">🌐</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-generalsans">
                    Connect With Me
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target={social.isDownload ? "_self" : "_blank"}
                        rel={
                          social.isDownload ? undefined : "noopener noreferrer"
                        }
                        download={social.isDownload}
                        className={`group relative bg-black-600/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl transform ${
                          isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }`}
                        style={{ transitionDelay: `${600 + index * 100}ms` }}
                      >
                        <div className="flex flex-col items-center space-y-3">
                          <div className="relative">
                            <IconComponent
                              size={32}
                              className="group-hover:scale-110 transition-transform duration-300"
                              style={{ color: social.color }}
                            />

                            {/* Glow effect */}
                            <div
                              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg"
                              style={{ backgroundColor: social.color }}
                            />
                          </div>

                          <span className="text-white text-sm font-generalsans text-center font-semibold">
                            {social.name}
                          </span>

                          <span className="text-gray-400 text-xs font-generalsans text-center">
                            {social.description}
                          </span>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-blue-500/20">
                  <p className="text-gray-300 text-sm font-generalsans text-center">
                    💡 <strong>Open to opportunities!</strong> Always excited to
                    discuss new projects, collaborations, and innovative ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
