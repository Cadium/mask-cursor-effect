'use client'
import styles from './page.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          A frontend engineer—building seamless digital experiences for over 4 years. Driven by the passion for user-focused web apps, delivering innovation where it counts.
          </p>
      </motion.div>

      <div className={styles.body}>
        <p><span>Product-focused</span> frontend engineer with 4+ years of experience creating intuitive, high-quality tools and scaling customer-facing products.</p>
      </div>

    </main>
  )
}