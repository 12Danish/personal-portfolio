// SocialLinks.jsx
const SocialLinks = ({ socialLinks, isVisible }) => {
  return (
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
        {socialLinks.map((social, index) => (
          <SocialLinkCard
            key={social.name}
            social={social}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>

      <OpportunityBanner />
    </div>
  );
};

// SocialLinkCard.jsx
const SocialLinkCard = ({ social, index, isVisible }) => {
  const IconComponent = social.icon;

  return (
    <a
      href={social.url}
      target={social.isDownload ? "_self" : "_blank"}
      rel={social.isDownload ? undefined : "noopener noreferrer"}
      download={social.isDownload}
      className={`group relative bg-black-600/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
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

      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </a>
  );
};

// OpportunityBanner.jsx
const OpportunityBanner = () => {
  return (
    <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-blue-500/20">
      <p className="text-gray-300 text-sm font-generalsans text-center">
        💡 <strong>Open to opportunities!</strong> Always excited to discuss new
        projects, collaborations, and innovative ideas.
      </p>
    </div>
  );
};

export default SocialLinks;
