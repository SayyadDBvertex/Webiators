'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ReactElement, useEffect, useState } from 'react';
import CardSlider from '@/Component/CardSlider';
import { Typewriter } from 'react-simple-typewriter';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import OurClient from '@/Component/OurClient';
import {
  SiJavascript,
  SiShopify,
  SiMagento,
  SiWoo,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMysql,
  SiPython,
  SiGithub,
  SiDocker,
} from 'react-icons/si';
import {
  FaTshirt,
  FaFootballBall,
  FaHome,
  FaShieldAlt,
  FaGem,
  FaUserTie,
  FaUtensils,
  FaCar,
} from 'react-icons/fa';

// ICON ARRAY
const icons: ReactElement[] = [
  <SiShopify key="shopify" className="text-[#00A4DC] w-8 h-8" />,
  <SiMagento key="magento" className="text-[#FF6F00] w-8 h-8" />,
  <SiWoo key="woocommerce" className="text-[#9146FF] w-8 h-8" />,
  <SiJavascript key="js" className="text-[#F7DF1E] w-8 h-8" />,
  <FaNodeJs key="node" className="text-[#68A063] w-8 h-8" />,
  <FaReact key="react" className="text-[#61DAFB] w-8 h-8" />,
  <SiNextdotjs key="next" className="text-black w-8 h-8" />,
  <SiTailwindcss key="tailwind" className="text-[#38BDF8] w-8 h-8" />,
  <SiTypescript key="ts" className="text-[#3178C6] w-8 h-8" />,
  <SiHtml5 key="html" className="text-[#E44D26] w-8 h-8" />,
  <SiCss3 key="css" className="text-[#1572B6] w-8 h-8" />,
  <SiPhp key="php" className="text-[#777BB4] w-8 h-8" />,
  <SiMysql key="mysql" className="text-[#00758F] w-8 h-8" />,
  <SiPython key="python" className="text-[#3776AB] w-8 h-8" />,
  <SiGithub key="github" className="text-black w-8 h-8" />,
  <SiDocker key="docker" className="text-[#0db7ed] w-8 h-8" />,
];

// TYPE-SAFE COUNTER
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState<number>(from);

  useEffect(() => {
    let start = from;
    const end = to;
    if (start === end) return;

    const incrementTime = (duration * 5000) / (end - start);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  return <span>{count}</span>;
};

export default function Banner() {
  const [positions, setPositions] = useState<
    | {
        x: number;
        y: number;
        rotate: number;
        scale: number;
        duration: number;
      }[]
    | null
  >(null);

  useEffect(() => {
    const newPositions = icons.map(() => ({
      x: Math.random() * 1200 - 600,
      y: Math.random() * 600 - 300,
      rotate: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.4,
      duration: 5 + Math.random() * 5,
    }));
    setPositions(newPositions);
  }, []);

  return (
    <>
      {/* TOP BANNER */}
      <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 overflow-hidden bg-white">
        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 text-black z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Empower <br />
            Brands Innovatively, <br />
            And Tailor Outstanding
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 text-transparent bg-clip-text">
            <Typewriter
              words={['Results Strategically']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="text-lg md:text-xl mb-6">
            Transform your{' '}
            <span className="font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              B2B
            </span>
            ,{' '}
            <span className="font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
              B2C
            </span>
            , and{' '}
            <span className="font-semibold bg-gradient-to-r from-green-500 to-lime-500 text-transparent bg-clip-text">
              D2C
            </span>{' '}
            <span>eCommerce into a revenue powerhouse.</span>
          </p>

          <button className="cursor-pointer bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300">
            Get in Touch
          </button>
        </div>

        {/* ICONS + LOGO */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          {/* Desktop Icons */}
          <div className="hidden md:flex relative w-full justify-center items-center">
            {positions &&
              positions.map((pos, idx) => (
                <motion.div
                  key={idx}
                  className="absolute z-0"
                  initial={{
                    x: pos.x,
                    y: pos.y,
                    rotate: pos.rotate,
                    scale: pos.scale,
                  }}
                  animate={{
                    x: [pos.x, pos.x + Math.random() * 200 - 100, pos.x],
                    y: [pos.y, pos.y + Math.random() * 200 - 100, pos.y],
                    rotate: [pos.rotate, pos.rotate + 360],
                    scale: [pos.scale, pos.scale + 0.3, pos.scale],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: pos.duration,
                    ease: 'easeInOut',
                  }}
                >
                  {icons[idx]}
                </motion.div>
              ))}

            <motion.div
              className="w-32 h-32 relative z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/Logo.png"
                alt="DB Logo"
                width={128}
                height={128}
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Mobile Icons - Orbiting Logo */}
          <div
            className="md:hidden relative w-full mt-10 flex justify-center items-center"
            style={{ height: 200 }}
          >
            {/* Logo fixed center */}
            <div
              className="absolute top-1/2 left-1/2"
              style={{ transform: 'translate(-50%, -50%)', zIndex: 10 }}
            >
              <Image
                src="/Logo.png"
                alt="DB Logo"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>

            {/* Orbiting Icons */}
            {icons.slice(0, 6).map((icon, idx) => {
              const radius = 80; // orbit radius
              const initialAngle = (idx / 6) * 360;

              return (
                <motion.div
                  key={idx}
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    rotate: [0, 360], // rotate around center
                    x: [
                      radius * Math.cos((initialAngle * Math.PI) / 180),
                      radius * Math.cos(((initialAngle + 360) * Math.PI) / 180),
                    ],
                    y: [
                      radius * Math.sin((initialAngle * Math.PI) / 180),
                      radius * Math.sin(((initialAngle + 360) * Math.PI) / 180),
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: 'linear',
                  }}
                >
                  {icon}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE + CONTENT */}
      <section className="w-full px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-10 bg-gray-50">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <Image
            src="/image1.jpg"
            alt="E-commerce"
            width={350}
            height={350}
            className="object-contain rounded-xl"
          />
        </motion.div>

        <div className="w-full md:w-2/3 text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ‘Webiators’ Creating Digital Ways for E-commerce Business Globally
          </h2>

          <p className="text-lg mb-4">
            We Think E-commerce | We Speak E-commerce | We Live E-commerce
          </p>

          <p className="leading-relaxed text-md">
            Webiators Technologies Pvt. Ltd. is the best eCommerce website
            development company and marketing agency in the US. Since 2018, we
            have proudly created amazing e-commerce development stories by
            helping our global clients. We have added over <b>$150,000,000</b>{' '}
            in revenue, served more than <b>247</b> global clients, and
            successfully completed <b>600+</b> combined projects.
            <br />
            <br />
            We are proud partners of leading industry players like Shopify,
            Google, and Adobe Solutions. Join our expert team to take your
            e-commerce business to the right audience by intensifying its sales.
          </p>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="w-full px-6 md:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-black bg-white">
        {[...Array(8)].map((_, index) => {
          const items = [
            {
              icon: <FaTshirt className="w-14 h-14 text-white" />,
              title: 'Fashion',
              desc: 'We help online fashion brands grow faster with influencer marketing strategies.',
              color: 'from-pink-500 to-pink-300',
            },
            {
              icon: <FaFootballBall className="w-14 h-14 text-white" />,
              title: 'Sports',
              desc: 'A top sports marketing agency in the USA with performance-driven strategies.',
              color: 'from-green-500 to-green-300',
            },
            {
              icon: <FaHome className="w-14 h-14 text-white" />,
              title: 'Home Decor',
              desc: 'Helping home decor brands reach the right audience with custom strategies.',
              color: 'from-yellow-500 to-yellow-300',
            },
            {
              icon: <FaShieldAlt className="w-14 h-14 text-white" />,
              title: 'Security',
              desc: 'We secure your business growth with proven digital strategies.',
              color: 'from-blue-500 to-blue-300',
            },
            {
              icon: <FaGem className="w-14 h-14 text-white" />,
              title: 'Jewelry',
              desc: 'Helping jewelry brands shine online with strong digital marketing.',
              color: 'from-purple-500 to-purple-300',
            },
            {
              icon: <FaUserTie className="w-14 h-14 text-white" />,
              title: 'Lifestyle',
              desc: 'Professional marketing for lifestyle brands to rank & grow on Google.',
              color: 'from-orange-500 to-orange-300',
            },
            {
              icon: <FaUtensils className="w-14 h-14 text-white" />,
              title: 'Food & Beverage',
              desc: 'Target the right food lovers with industry-specific marketing.',
              color: 'from-red-500 to-red-300',
            },
            {
              icon: <FaCar className="w-14 h-14 text-white" />,
              title: 'Automobile',
              desc: 'Grow your automobile brand globally with our expertise.',
              color: 'from-teal-500 to-teal-300',
            },
          ];
          const item = items[index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`bg-gradient-to-r ${item.color} p-6 rounded-xl shadow-lg hover:scale-105 transition-all cursor-pointer text-center`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-sm text-white/90">{item.desc}</p>
            </motion.div>
          );
        })}
      </section>

      {/* SUCCESS NUMBERS */}
      <section className="w-full px-6 md:px-20 py-20 text-black bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Webiators’s Success Journey at a Glance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              title: 'Years of Combined Experience',
              value: 40,
              color: 'from-purple-500 to-pink-400',
            },
            {
              title: 'Client Retention Rate',
              value: 90,
              color: 'from-blue-500 to-cyan-400',
            },
            {
              title: 'Successful Projects',
              value: 600,
              color: 'from-green-500 to-lime-400',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`bg-gradient-to-r ${item.color} p-8 rounded-xl shadow-lg`}
            >
              <h3 className="text-5xl font-bold text-white">
                <Counter to={item.value} />
                {item.title === 'Client Retention Rate' ? '%' : '+'}
              </h3>
              <p className="opacity-80 mt-2 text-white">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CardSlider />

      {/* WHY WEBIATORS */}
      <section className="w-full px-6 md:px-20 py-20 text-black bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Why Do Webiators Stand Out?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Great Support and Service',
              desc: 'Complete support and maintenance of every business.',
              color: 'from-purple-500 to-pink-400',
            },
            {
              title: 'On-Time Work Delivery',
              desc: 'Complete work delivery with full client satisfaction.',
              color: 'from-blue-500 to-cyan-400',
            },
            {
              title: 'Future-proof Solutions',
              desc: 'Creative and future-proof solutions using latest techs.',
              color: 'from-green-500 to-lime-400',
            },
            {
              title: 'Expert Consultation',
              desc: 'Experienced team ready to provide expert guidance.',
              color: 'from-yellow-500 to-orange-400',
            },
            {
              title: 'Return on Investments',
              desc: 'Earn more than you invest with our strategies.',
              color: 'from-pink-500 to-red-400',
            },
            {
              title: 'Trusted by 200+ Businesses',
              desc: 'We have worked with 200+ businesses globally.',
              color: 'from-teal-500 to-cyan-400',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-r ${item.color} p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-all cursor-pointer`}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                {item.title}
              </h3>
              <p className="opacity-90 text-white">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* E-COMMERCE SERVICES */}
      <section className="w-full px-6 md:px-20 py-20 text-black bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Explore Our E-commerce Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'B2B E-commerce Services',
              subtitle: 'b2b ecommerce',
              desc: 'Optimizing online transactions between businesses.',
              color: 'from-purple-500 to-pink-400',
            },
            {
              title: 'B2C E-commerce Services',
              subtitle: 'b2c ecommerce',
              desc: 'Seamless shopping experience for consumers.',
              color: 'from-blue-500 to-cyan-400',
            },
            {
              title: 'D2C E-commerce Services',
              subtitle: 'd2c ecommerce',
              desc: 'Direct bridge between manufacturers and consumers.',
              color: 'from-green-500 to-lime-400',
            },
            {
              title: 'E-Commerce Website Design & Development',
              subtitle: '',
              desc: 'Websites visually stunning and highly functional.',
              color: 'from-yellow-500 to-orange-400',
            },
            {
              title: 'E-commerce Marketing Services',
              subtitle: '',
              desc: 'Attracting and retaining customers through SEO, content & ads.',
              color: 'from-pink-500 to-red-400',
            },
            {
              title: 'E-commerce Consulting Services',
              subtitle: '',
              desc: 'Identify challenges, optimize conversion, expand marketing.',
              color: 'from-teal-500 to-cyan-400',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-r ${item.color} p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-all cursor-pointer`}
            >
              {item.subtitle && (
                <p className="uppercase text-sm text-white mb-2">
                  {item.subtitle}
                </p>
              )}
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                {item.title}
              </h3>
              <p className="opacity-90 mb-4 text-white">{item.desc}</p>
              <button className="cursor-pointer bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <OurClient />
    </>
  );
}
