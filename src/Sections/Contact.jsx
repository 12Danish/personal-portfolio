
import ContactHeader from "../Components/Contact/ContactHeader";
import ContactForm from "../Components/Contact/ContactForm";
import ContactInfo from "../Components/Contact/ContactInfo";
import SocialLinks from "../Components/Contact/SocialLinks";
import { socialLinks } from "../constants";
import {
  useContactForm,
  useVisibility,
} from "../Components/Contact/CustomHooks";

const Contact = () => {
  const isVisible = useVisibility(300);
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  return (
    <section id="contact" className="c-space min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <ContactHeader />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div
              className={`transform transition-all duration-700 delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <ContactForm
                formData={formData}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                submitStatus={submitStatus}
              />
            </div>

            {/* Contact Info & Social Links */}
            <div
              className={`transform transition-all duration-700 delay-400 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <ContactInfo />
              <SocialLinks socialLinks={socialLinks} isVisible={isVisible} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
