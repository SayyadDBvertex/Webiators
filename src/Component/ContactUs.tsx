// src/components/ContactUs.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-6 bg-white">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 max-w-2xl bg-gray-100 rounded-xl p-10 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
          Let’s talk about your project
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-base text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-base text-black"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-base text-black"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none h-40 text-base text-black"
          />
          <button
            type="submit"
            className="font-semibold py-4 px-6 rounded-lg bg-black text-white hover:brightness-90 cursor-pointer transition text-lg"
          >
            Send Message
          </button>

          {/* Rating Cards inside form */}
          <div className="mt-10 w-full overflow-hidden">
            <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap">
              {[
                { name: 'Clutch', rating: '5', img: '/Clutch.png' },
                { name: 'Glassdoor', rating: '4.5', img: '/Glassdoor.png' },
                { name: 'Google', rating: '4.7', img: '/Google.png' },
                { name: 'Trustpilot', rating: '4.8', img: '/Trustpilot.png' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 bg-gray-200 px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer flex-1 min-w-[130px]"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={35}
                    height={35}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-black font-bold text-lg">
                      {item.rating}
                    </span>
                    <span className="text-black/80 text-sm">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            y: [0, -20, 0], // smooth infinite floating
            scale: [1, 1.02, 1], // subtle zoom effect
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-80 h-80 md:w-[700px] md:h-[700px] rounded-xl overflow-hidden"
        >
          <Image
            src="/banner-image.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
