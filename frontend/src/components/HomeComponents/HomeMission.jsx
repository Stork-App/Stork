import React, { useEffect } from 'react';
import consultationIcon from '../images/ConsultationIcon.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HomeMission() {
  const headerControls = useAnimation();
  const detailsControls = useAnimation();
  const [headerRef, headerInView] = useInView();
  const [detailsRef, detailsInView] = useInView();

  const downAnimation = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const upAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const leftAnimation = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const rightAnimation = {
    hidden: { x: +20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (headerInView) {
      headerControls.start('visible');
    } else {
      headerControls.start('hidden');
    }
  }, [headerControls, headerInView]);

  useEffect(() => {
    if (detailsInView) {
      detailsControls.start('visible');
    } else {
      detailsControls.start('hidden');
    }
  }, [detailsControls, detailsInView]);

  return (
    <>
      <section id="mission" ref={headerRef}>
        <section className="mission-content">
          <motion.h2 id="mission-text" variants={leftAnimation} initial="hidden" animate={detailsControls}>
            Our Mission
          </motion.h2>
          <motion.p variants={rightAnimation} initial="hidden" animate={detailsControls}>
            <b>
              Our mission is to provide users with a concise method of
              symptom-tracking by promoting medical self-advocacy to combat
              maternal mortality rates.
            </b>
          </motion.p>
          {/* <motion.img id="mission-image" src={consultationIcon} variants={imageAnimation} initial="hidden" animate={headerControls} /> */}
        </section>
      </section>

      <section className="mission-details" ref={detailsRef}>
        <motion.p className="mission-benefit" variants={downAnimation} initial="hidden" animate={detailsControls}>
          <b>Why Focus on Self Advocacy?</b>
          <p>
            The benefits of effective self-advocacy include improved
            person-centered care and quality of life, and reduced symptom
            burden and use of preventative health services. Meaning, once health care providers have a better understanding and they can see the "whole picture" throughout the user's pregnancy, diagnoses can be made before becoming fatal complications.
          </p>
        </motion.p>
        <motion.p className="information-study" variants={upAnimation} initial="hidden" animate={detailsControls}>
          <p><b>Who Does Stork Benefit?</b></p>
          <p>
            Our app can be beneficial to anyone who is expecting. However, according to a study conducted at the University of Pittsburgh, information suggested that Black women are less likely to share information with healthcare providers compared to other ethnic/racial groups. This is why Stork is targeting that specific demographic!
          </p>
        </motion.p>
        <motion.p className="under-researched-areas" variants={downAnimation} initial="hidden" animate={detailsControls}>
          <p><b>How Does This Apply to Healthcare?</b></p>
          <p>
            Not being heard or understood by doctors is a running theme amongst black expecting parents - often told they are exaggerating symptoms or clouded by "pregnancy brain". Healthcare professionals can deeply benefit from an improved understanding of patient perspectives and by providing an easy-to-use data display model. Our hope is that expecting parents can voice concerns and seek second opinions more easily.
          </p>
        </motion.p>
        <motion.p className="repeat-benefit" variants={upAnimation} initial="hidden" animate={detailsControls}>
          <p><b>What is Your Expected Outcome?</b></p>
          <p>
            We want our users to feel safe and confident that they are presenting the most accurate and representative information possible. Stork creates an element of control for expecting parents through our data models and. By having access to the progress of your pregnancy, you are able to advocate for yourself. We decrease the barrier of patient misrepresentation and inaccurate reporting by allowing users to generate reports of their own in a matter of seconds.
          </p>
        </motion.p>
      </section>
    </>
  );
}
