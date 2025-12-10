'use client';

import { motion } from 'framer-motion';
import {
  SiShopify,
  SiMagento,
  SiWordpress,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiPhp,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from 'react-icons/si';
import {
  FaPaintBrush,
  FaChartLine,
  FaEnvelope,
  FaPencilRuler,
} from 'react-icons/fa';

// ---------------- TYPE DEFINITIONS ----------------
interface TechItem {
  name: string;
  icon: React.ReactNode;
}

// ---------------- TECHNOLOGIES LIST ----------------
const techList: TechItem[] = [
  { name: 'Shopify', icon: <SiShopify className="w-6 h-6 text-[#00A4DC]" /> },
  { name: 'Magento', icon: <SiMagento className="w-6 h-6 text-[#FF6F00]" /> },
  {
    name: 'Wordpress',
    icon: <SiWordpress className="w-6 h-6 text-[#21759B]" />,
  },
  { name: 'Mern Stack', icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
  { name: 'React JS', icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
  { name: 'UI/UX', icon: <FaPaintBrush className="w-6 h-6 text-[#F97316]" /> },
  {
    name: 'Graphic Design',
    icon: <FaPencilRuler className="w-6 h-6 text-[#A855F7]" />,
  },
  {
    name: 'Digital Marketing',
    icon: <FaChartLine className="w-6 h-6 text-[#10B981]" />,
  },
  { name: 'SEO', icon: <FaChartLine className="w-6 h-6 text-[#3B82F6]" /> },
  { name: 'PPC', icon: <FaChartLine className="w-6 h-6 text-[#F59E0B]" /> },
  { name: 'SMO', icon: <FaChartLine className="w-6 h-6 text-[#EF4444]" /> },
  { name: 'SMM', icon: <FaChartLine className="w-6 h-6 text-[#8B5CF6]" /> },
  {
    name: 'Email Marketing',
    icon: <FaEnvelope className="w-6 h-6 text-[#F43F5E]" />,
  },
  { name: 'HTML', icon: <SiHtml5 className="w-6 h-6 text-[#E44D26]" /> },
  { name: 'CSS', icon: <SiCss3 className="w-6 h-6 text-[#1572B6]" /> },
  {
    name: 'Javascript',
    icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />,
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap className="w-6 h-6 text-[#7952B3]" />,
  },
  { name: 'Node JS', icon: <SiNodedotjs className="w-6 h-6 text-[#68A063]" /> },
  { name: 'PHP', icon: <SiPhp className="w-6 h-6 text-[#777BB4]" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
  { name: 'Express', icon: <SiExpress className="w-6 h-6 text-[#000000]" /> },
];

// ---------------- SPLIT INTO ROWS ----------------
const rowCount = 3;
const rows: TechItem[][] = Array.from({ length: rowCount }, (_, i) =>
  techList.filter((_, idx) => idx % rowCount === i)
);

// ---------------- COMPONENT ----------------
export default function TechnologiesCard() {
  return (
    <section className="w-full px-6 md:px-20 py-16 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
        Technologies We Excel In
      </h2>

      <div className="flex flex-col gap-6 overflow-hidden">
        {rows.map((row, rowIndex) => {
          const direction = rowIndex % 2 === 0 ? 1 : -1; // Alternate row directions
          return (
            <motion.div
              key={rowIndex}
              className="flex justify-between gap-8 whitespace-nowrap"
              animate={{ x: [0, direction * 200, 0] }}
              transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
            >
              {row.map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-md px-6 py-3 text-base cursor-pointer hover:bg-gray-200"
                >
                  {tech.icon}
                  <span className="text-black font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
