// create a animated navigator with a list of links
//
// Path: components/Navigator.tsx

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const item = {
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 },
};

const Navigator = () => {
  const router = useRouter();

  return (
    <motion.ul variants={variants}>
      {links.map(({ href, label }) => {
        const isActive = router.pathname === href;

        return (
          <motion.li key={href} variants={item}>
            <Link href={href}>
              <a
                className={`block px-4 py-2 text-sm font-medium text-gray-700 rounded-md ${
                  isActive ? 'bg-gray-100' : ''
                }`}
              >
                {label}
              </a>
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default Navigator;
