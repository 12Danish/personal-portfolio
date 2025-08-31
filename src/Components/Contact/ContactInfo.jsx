// ContactInfo.jsx
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
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
        <ContactInfoItem icon={FaMapMarkerAlt} text="Islamabad, Pakistan" />
        <ContactInfoItem icon={FaEnvelope} text="Email Me" />
      </div>
    </div>
  );
};

const ContactInfoItem = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-start gap-4 text-gray-300">
      <Icon className="text-green-400 text-lg mt-0.5 flex-shrink-0" />
      <span className="font-generalsans break-all text-sm sm:text-base leading-relaxed flex-1 min-w-0">
        {text}
      </span>
    </div>
  );
};

export default ContactInfo;