import React, { useEffect } from 'react';
import advocacyImg from '../images/AdvocacyImg.png';
import chestPainImg from '../images/ChestPainImg.png';
import disparitiesImg from '../images/DisparitiesImg.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HomeArticles() {
  const controlsAdvocacy = useAnimation();
  const controlsChestPain = useAnimation();
  const controlsDisparities = useAnimation();

  const [refAdvocacy, inViewAdvocacy] = useInView();
  const [refChestPain, inViewChestPain] = useInView();
  const [refDisparities, inViewDisparities] = useInView();

  const articleAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const downAnimation = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (inViewAdvocacy) {
      controlsAdvocacy.start('visible');
    } else {
      controlsAdvocacy.start('hidden');
    }
  }, [controlsAdvocacy, inViewAdvocacy]);

  useEffect(() => {
    if (inViewChestPain) {
      controlsChestPain.start('visible');
    } else {
      controlsChestPain.start('hidden');
    }
  }, [controlsChestPain, inViewChestPain]);

  useEffect(() => {
    if (inViewDisparities) {
      controlsDisparities.start('visible');
    } else {
      controlsDisparities.start('hidden');
    }
  }, [controlsDisparities, inViewDisparities]);

  return (
    <>
      <section id="research-articles-section">
        <h3 className="articles-heading">Relevant Studies</h3>
        <section className="article-list">
          <motion.section className="article-item" ref={refAdvocacy} initial="hidden" animate={controlsAdvocacy} variants={articleAnimation}>
            <motion.img className="article-image-label" src={advocacyImg} variants={articleAnimation} />
            <p><b>“A Pilot Exploring Self-Advocacy as a Factor in Maternal Mortality and Morbidity in Pregnant Black Women.”</b></p>
            <p className="article-metadata">D-Psychology at the University of Pittsburgh, 1 Jan. 1970</p>
            <a href="https://d-scholarship.pitt.edu/40428/" target="_blank" rel="noopener noreferrer" className="learn-more-btn">Read More</a>
          </motion.section>

          <motion.section className="article-item" ref={refChestPain} initial="hidden" animate={controlsChestPain} variants={downAnimation}>
            <motion.img className="article-image-label" src={chestPainImg} variants={downAnimation} />
            <p><b>“Is self-advocacy universally achievable for patients? the experiences of Australian women with cardiac disease in pregnancy and postpartum.”</b></p>
            <p className="article-metadata">International Journal of Qualitative Studies on Health and Well-Being, vol. 18, no. 1, 23 Feb. 2023</p>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9970247/" target="_blank" rel="noopener noreferrer" className="learn-more-btn">Read More</a>
          </motion.section>

          <motion.section className="article-item" ref={refDisparities} initial="hidden" animate={controlsDisparities} variants={articleAnimation}>
            <motion.img className="article-image-label" src={disparitiesImg} variants={articleAnimation} />
            <p><b>“Reducing Disparities in Severe Maternal Morbidity and Mortality.”</b></p>
            <p className="article-metadata">Clinical Obstetrics and Gynecology, U.S. National Library of Medicine, June 2018</p>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5915910/" target="_blank" rel="noopener noreferrer" className="learn-more-btn">Read More</a>
          </motion.section>
        </section>
      </section>
    </>
  );
}
