import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors); // Show errors if validation fails
      return;
    }

    try {
      // Send email using EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, API_KEY);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccessMessage("Failed to send your message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" })); // Clear errors on input
  };

  const validateForm = (data: typeof formData) => {
    const newErrors: typeof errors = { name: "", email: "", message: "" };

    if (!data.name.trim()) newErrors.name = "Name is required.";
    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!data.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  return (
    <motion.section
      id="contact"
      className="h-screen-minus-navbar flex justify-center items-center bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 pt-16 transition-colors duration-300"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 dark:bg-gray-200 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-light text-teal-400 dark:text-orange-400 mb-6 text-center">
          Contact Me
        </h2>
        {successMessage && (
          <p className="text-green-500 text-sm mb-4 text-center">
            {successMessage}
          </p>
        )}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-400 dark:text-gray-600 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 rounded bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-800 ${
              errors.name ? "border-2 border-red-500" : ""
            }`}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-400 dark:text-gray-600 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-800 ${
              errors.email ? "border-2 border-red-500" : ""
            }`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-400 dark:text-gray-600 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full p-3 rounded bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-800 ${
              errors.message ? "border-2 border-red-500" : ""
            }`}
            required
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-teal-200 dark:bg-orange-300 text-gray-900 dark:text-gray-800 px-4 py-2 rounded hover:bg-teal-300 dark:hover:bg-orange-400 transition"
        >
          Send
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
