// src/components/Clients.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  { name: 'BMT', logo: '/BMT.jpg' },
  { name: 'Infosys', logo: '/infosys.png' },
  { name: 'Invoxia', logo: '/Invoxia.png' },
  { name: 'Emma', logo: '/Emma.png' },
  { name: 'Casio', logo: '/Casio.jpeg' },
  { name: 'Lofta', logo: '/Lofta.png' },
  { name: 'Reef Haven', logo: '/Reef Haven.png' },
  { name: 'Dell', logo: '/Dell.jpg' },
  { name: 'TriShack', logo: '/TriShack.png' },
  { name: 'Iyapa', logo: '/Iyapa.png' },
  { name: 'Asus', logo: '/Asus.jpg' },
  { name: 'TCS', logo: '/tcs.jpg' },
  { name: 'Google', logo: '/google.png' },
  { name: 'Microsoft', logo: '/microsoft.png' },
  { name: 'Amazon', logo: '/amazon.jpg' },
  { name: 'Netflix', logo: '/netflix.png' },
  { name: 'Samsung', logo: '/samsung.png' },
  { name: 'Nike', logo: '/nike.png' },
  { name: 'Starbucks', logo: '/starbucks.jpg' },
  { name: 'Intel', logo: '/intel.jpg' },
  { name: 'Meta', logo: '/meta.jpg' },
  { name: 'CocaCola', logo: '/cocacola.png' },
  { name: 'Pepsi', logo: '/pepsi.jpg' },
  { name: 'Sony', logo: '/sony.png' },
];

const row1 = clients.slice(0, 12);
const row2 = clients.slice(12, 24);

export default function Clients() {
  return (
    <section className="w-full py-12 flex flex-col items-center bg-white">
      <h2 className="text-3xl font-semibold text-black mb-10">Our Clients</h2>

      {/* Row 1 – Left → Right */}
      <div className="w-full overflow-hidden mb-6">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          className="flex gap-6 whitespace-nowrap"
        >
          {row1.concat(row1).map((client, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center min-w-[150px] p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 – Right → Left */}
      <div className="w-full overflow-hidden">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          className="flex gap-6 whitespace-nowrap"
        >
          {row2.concat(row2).map((client, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center min-w-[150px] p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
