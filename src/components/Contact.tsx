import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isEmailValid(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
  const serviceId = "service_t0kzt2w";
const templateId = "template_jn5md0l";
const publicKey = "mFP23VlY-qjDoxFr1";

if (!serviceId || !templateId || !publicKey) {
  throw new Error("Missing EmailJS environment variables.");
}

    emailjs.send(serviceId, templateId, formData, publicKey)
  .then(
    (res: any) => {
      console.log("✅ Email sent:", res);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", title: "", message: "" })
    },
    (err: any) => {
      console.error("❌ EmailJS error:", err);
      setStatus("❌ Failed to send message. Please try again.");
    }
  );
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-4">
        <h2 className="text-3xl font-bold text-pink-400 mb-8 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-pink-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-pink-500"
          />
          <input
            type="text"
            name="title"
            placeholder="Subject"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-pink-500"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-pink-500"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded"
          >
            Send Message
          </button>
          {status && <p className="mt-2 text-center text-pink-300">{status}</p>}
        </form>
      
    </section>
  );
};

export default Contact;