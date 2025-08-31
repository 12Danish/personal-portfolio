
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = ({
  formData,
  onInputChange,
  onSubmit,
  isSubmitting,
  submitStatus,
}) => {
  return (
    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30 shadow-2xl">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
          <FaPaperPlane className="text-white text-xl" />
        </div>
        <h3 className="text-2xl font-bold text-white font-generalsans">
          Send Message
        </h3>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <FormInput
            label="Full Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={onInputChange}
            placeholder="Your full name"
            required
          />
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={onInputChange}
            placeholder="your.email@gmail.com"
            required
          />
        </div>

        <FormInput
          label="Subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={onInputChange}
          placeholder="What's this about?"
          required
        />

        <FormTextarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={onInputChange}
          placeholder="Tell me about your project or just say hello!"
          rows={5}
          required
        />

        <SubmitButton isSubmitting={isSubmitting} />
        <StatusMessage status={submitStatus} />
      </form>
    </div>
  );
};

const FormInput = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div>
      <label className="block text-gray-300 text-sm font-generalsans mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-black-600/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 font-generalsans"
        placeholder={placeholder}
      />
    </div>
  );
};

const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
}) => {
  return (
    <div>
      <label className="block text-gray-300 text-sm font-generalsans mb-2">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="w-full px-4 py-3 bg-black-600/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none font-generalsans"
        placeholder={placeholder}
      />
    </div>
  );
};

const SubmitButton = ({ isSubmitting }) => {
  return (
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
  );
};

// StatusMessage.jsx
const StatusMessage = ({ status }) => {
  if (!status) return null;

  const statusConfig = {
    success: {
      bgColor: "bg-green-600/20",
      borderColor: "border-green-500/30",
      textColor: "text-green-300",
      message: "✅ Message sent successfully! I'll get back to you soon.",
    },
    error: {
      bgColor: "bg-red-600/20",
      borderColor: "border-red-500/30",
      textColor: "text-red-300",
      message:
        "❌ Something went wrong. Please try again or email me directly.",
    },
  };

  const config = statusConfig[status];
  if (!config) return null;

  return (
    <div
      className={`${config.bgColor} border ${config.borderColor} ${config.textColor} px-4 py-3 rounded-xl font-generalsans`}
    >
      {config.message}
    </div>
  );
};

export default ContactForm;
