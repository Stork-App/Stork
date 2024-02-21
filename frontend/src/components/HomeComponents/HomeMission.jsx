import consultationIcon from '../images/ConsultationIcon.png'
import backgroundImg from '../images/BackgroundImage1.png'; // Replace 'background.jpg' with the actual path to your background image


export default function HomeMission() {
  return (
    <>
      <section id="mission" >
        <section  className="mission-content">
          <h2 id="mission-text">Our Mission</h2>
          <img id="mission-image" src={consultationIcon}/>
          <p><b>
            Our mission is to provide users with a concise method of
            symptom-tracking by promoting medical self-advocacy to combat
            maternal mortality rates.</b>
          </p>
        </section>

        <section className="mission-details">
          <section className="mission-benefit">
            <p>
              The benefits of effective self-advocacy include improved
              person-centered care and quality of life, and reduced symptom
              burden and use of preventative health services (Thomas et al.,
              Citation2021)
            </p>
          </section>
          <section className="information-study">
            <p>
              According to a study conducted at the University of Pittsburgh,
              information suggested that Black women are less likely to share
              information with healthcare providers compared to other
              ethnic/racial groups.
            </p>
          </section>
          <section className="under-researched-areas">
            <p>
              In currently under-researched areas, healthcare professionals
              (HCPs) and other patients stand to benefit from an improved
              understanding of patient perspectives.
            </p>
          </section>
          <section className="repeat-benefit">
            <p>
              The benefits of effective self-advocacy include improved
              person-centered care and quality of life, and reduced symptom
              burden and use of preventative health services (Thomas et al.,
              Citation2021)
            </p>
          </section>
        </section>
      </section>
    </>
  );
}
