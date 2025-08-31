
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // EmailJS configuration - Replace with your actual values
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'YOUR_SERVICE_ID',      // e.g., 'service_abc123'
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',    // e.g., 'template_xyz789'
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',      // e.g., 'user_ABC123XYZ'
  };

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

    try {
      // EmailJS send email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'danishabbas2004@gmail.com', // Your email
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  };
};


export const useVisibility = (delay = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
};
