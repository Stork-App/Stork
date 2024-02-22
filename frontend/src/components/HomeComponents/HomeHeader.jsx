import phoneCallIcon from '../images/PhoneCallIcon.png'
import consultationIcon from '../images/ConsultationIcon.png'
import ultrasoundIcon from '../images/UltrasoundIcon.png'
import webPageIcon from '../images/WebpageIcon.png'

export default function HomeHeader() {
  return (
    <>
      <section id="home-section1" className="home-section1-left">
        <section className="home-content">
          <h1 class="fade-in" className="main-heading" style={{fontSize: 80}}>
            Stork
          </h1>
          <p className="sub-text">
            A comprehensive self advocacy tool created to bridge racial gaps in maternal childbirth mortality rates.
          </p>
          <a href="https://projects.apnews.com/features/2023/from-birth-to-death/black-women-maternal-mortality-rate.html#:~:text=Black%20women%20have%20the%20highest,for%20Disease%20Control%20and%20Prevention." target="_blank" rel="noopener noreferrer" className="learn-more-btn">Learn More</a>
        </section>

        <section class="fade-in" id="home-header-image">
          <img src={phoneCallIcon} alt="" />

        </section>
      </section>
    </>
  );
}
