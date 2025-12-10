'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useRef } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhone,
  FaPhoneSquare,
  FaGlobeAmericas,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Footer: FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      ref={footerRef}
      className="bg-gradient-to-t from-gray-100 to-white text-black pt-12 pb-10 px-6 md:px-10 lg:px-12"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto pl-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            className="md:col-span-3 lg:col-span-3 flex flex-col"
            variants={itemVariants}
          >
            {/* Logo */}
            <motion.div className="self-start mb-6" variants={itemVariants}>
              <Image
                src="/Logo.png"
                alt="DBWebiators Logo"
                width={300}
                height={120}
                className="object-contain w-auto h-28 md:h-32"
                priority
              />
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-5 text-2xl mb-6"
              variants={itemVariants}
            >
              {[
                { Icon: FaFacebookF, color: '#1877F2' }, // Facebook Blue
                { Icon: FaInstagram, color: '#E1306C' }, // Instagram Pink
                { Icon: FaLinkedinIn, color: '#0A66C2' }, // LinkedIn Blue
                { Icon: FaWhatsapp, color: '#25D366' }, // WhatsApp Green
              ].map(({ Icon, color }, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="cursor-pointer"
                >
                  <Link href="#">
                    <Icon style={{ color }} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Glassdoor */}
            <motion.div className="mt-auto" variants={itemVariants}>
              <p className="text-black font-bold text-xl md:text-2xl mb-2">
                ‘GLASSDOOR’
              </p>

              <div className="flex items-center gap-3">
                <span className="text-black text-xl font-semibold">4.5</span>

                {/* GOLD RATING STARS */}
                <div className="flex text-2xl">
                  {/* FULL GOLD STARS */}
                  <span className="text-[#FFD700]">★</span>
                  <span className="text-[#FFD700]">★</span>
                  <span className="text-[#FFD700]">★</span>

                  {/* HALF GOLD STAR */}
                  <span className="relative w-6 inline-block">
                    <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-[#FFD700]">
                      ★
                    </span>
                    <span className="text-gray-400">★</span>
                  </span>

                  {/* EMPTY STAR */}
                  <span className="text-gray-400">★</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* E-COMMERCE */}
          <motion.div
            className="md:col-span-3 lg:col-span-3"
            variants={itemVariants}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-5 text-blue-500">
              E-commerce
            </h3>

            <ul className="space-y-3">
              {[
                'Shopify Development Services',
                'Magento Development Services',
                'Adobe Commerce Development Services',
                'Woocommerce Development Services',
                'Wix Website Development Services',
                'Reactjs Development Services',
                'NodeJS Development Services',
                'Mern Stack Development Services',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex items-center gap-1 text-gray-800  hover:text-blue-500"
                >
                  <HiOutlineArrowNarrowRight className="text-gray-800 w-4 h-4 mt-0.5" />
                  <Link href="#">{item}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* MARKETING SERVICES */}
          <motion.div
            className="md:col-span-3 lg:col-span-3"
            variants={itemVariants}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-5 text-blue-500">
              Marketing Services
            </h3>
            <ul className="space-y-3 text-gray-800">
              {[
                'Search Engine Optimization Service',
                'Social Media Optimization Services',
                'PPC Management Services',
                'Facebook ads management services',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex items-center gap-2 text-gray-800  hover:text-blue-500"
                >
                  <HiOutlineArrowNarrowRight className="text-gray-800 w-4 h-4 mt-0.5" />
                  <Link href="#">{item}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ABOUT */}
          <motion.div
            className="md:col-span-3 lg:col-span-3"
            variants={itemVariants}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-5 text-blue-500">
              About
            </h3>
            <ul className="space-y-3 text-gray-800">
              {[
                'About Us',
                'Career',
                'Contact Information',
                'Our Team',
                'Blog',
                'Partners',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex items-center gap-2 text-gray-800 hover:text-blue-500"
                >
                  <HiOutlineArrowNarrowRight className="text-gray-800 w-4 h-4 mt-0.5" />
                  <Link href="#">{item}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CONTACT SECTION */}
        <motion.div
          className="mt-12 border-t border-gray-300 pt-6 flex flex-wrap justify-between items-start gap-6 text-gray-800 text-sm md:text-base"
          variants={itemVariants}
        >
          <div className="flex flex-wrap gap-6 items-start">
            {[
              {
                Icon: FaPhoneSquare,
                t1: '+91 7314345184',
                t2: 'Mon-Fri 10am-7:30pm (IST)',
              },
              {
                Icon: FaGlobeAmericas,
                t1: '302 Western Business Center',
                t2: 'Indore (M.P)',
              },
              {
                Icon: FaPhone,
                t1: '+1 646 401-0290',
                t2: 'Mon-Fri 4am-6pm (UTC)',
              },
              { Icon: FaMapMarkerAlt, t1: '3 Gwydir Street', t2: 'Sydney, AU' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-start gap-2"
              >
                <item.Icon className="text-2xl text-blue-600 mt-1" />{' '}
                {/* COLOR UPDATED */}
                <div className="flex flex-col">
                  <span>{item.t1}</span>
                  <span>{item.t2}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* COPYRIGHT */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-left text-gray-700 mt-4 md:mt-10"
          variants={itemVariants}
        >
          © Copyright 2025, WEBIATORS TECHNOLOGIES PRIVATE LIMITED.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
