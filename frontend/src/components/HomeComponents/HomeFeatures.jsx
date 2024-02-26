import React, { useEffect } from 'react';
import onPhone from '../images/OnPhoneGif.gif';
import selfAdvocacy from '../images/SelfAdvocacyGif.gif';
import forumImg from '../images/ForumGif.gif';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HomeFeatures() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const downAnimation = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const leftAnimation = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const featureAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
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
      <section id="features-section" ref={ref}>
        <motion.section className="features-content" initial="hidden" animate={controls} variants={leftAnimation}>
          <h3 className="features-heading">What Features Do We Provide?</h3>
        </motion.section>

        <motion.section className="feature-items" initial="hidden" animate={controls} variants={downAnimation}>
          <motion.section className="feature-item" variants={featureAnimation}>
            <motion.img className="feature-image-label" src={onPhone} />
            <motion.h4 className="feature-title" variants={leftAnimation}>
              Complete A Daily Log
            </motion.h4>
            <motion.p variants={downAnimation}>
              We want you to have an organized and secure place to store all of your pregnancy symptoms. Complete your log form every day for comprehensive symptom stats! With each entry, you are able to keep track of any changes for yourself, your healthcare provider, or even to get a second opinion.
            </motion.p>
          </motion.section>

          <motion.section className="feature-item" variants={featureAnimation}>
            <motion.img className="feature-image-label" src={selfAdvocacy} />
            <motion.h4 className="feature-title" variants={leftAnimation}>
              Statistics for Self-Advocacy
            </motion.h4>
            <motion.p variants={downAnimation}>
              We understand how anxiety-inducing speaking up for yourself can be. That's why we created an easy-to-use data display model, your Stats page & Daily Log table. Studies show that self-advocacy can be more efficient when coupled with physical data.
            </motion.p>
          </motion.section>

          <motion.section className="feature-item" variants={featureAnimation}>
            <motion.img className="feature-image-label" src={forumImg} />
            <motion.h4 className="feature-title" variants={leftAnimation}>
              Forum - Build Community!
            </motion.h4>
            <motion.p variants={downAnimation}>
              One of the most important aspects of growing your confidence for self-advocacy is having a strong community behind you. Share your thoughts, referrals, struggles, recommendations, or just general questions with other parents all around the world!
            </motion.p>
          </motion.section>
        </motion.section>
      </section>
    </>
  );
}
