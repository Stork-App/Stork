import React, { useEffect } from 'react';
import phoneCallIcon from '../images/PhoneCallIcon.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HomeHeader() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const textAnimation = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const imageAnimation = {
    hidden: { y: 0 },
    visible: { y: -20, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <>
      <section id="home-section1" className="home-section1-left" ref={ref}>
        <motion.section
          className="home-content"
          initial="hidden"
          animate={controls}
          variants={textAnimation}
        >
          <motion.h1
            className="main-heading"
            style={{ fontSize: 80 }}
            variants={textAnimation}
          >
            Stork
          </motion.h1>
          <motion.p className="sub-text" variants={textAnimation}>
            A comprehensive self-advocacy tool created to bridge racial gaps in maternal childbirth mortality rates.
          </motion.p>
          <a
            href="https://projects.apnews.com/features/2023/from-birth-to-death/black-women-maternal-mortality-rate.html#:~:text=Black%20women%20have%20the%20highest,for%20Disease%20Control%20and%20Prevention."
            target="_blank"
            rel="noopener noreferrer"
            className="learn-more-btn"
          >
            Learn More
          </a>
        </motion.section>

        <motion.section
          id="home-header-image"
          className="fade-in"
          initial="hidden"
          animate={controls}
          variants={imageAnimation}
        >
          <img src={phoneCallIcon} alt="" />
        </motion.section>
      </section>
    </>
  );
}
