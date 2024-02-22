import consultationIcon from '../images/ConsultationIcon.png'
import backgroundImg from '../images/BackgroundImage1.png'; // Replace 'background.jpg' with the actual path to your background image


export default function HomeMission() {
  return (
    <>
      <section id="mission" >
        <section  className="mission-content">
          <h2 id="mission-text">Our Mission</h2>
          <p><b>
            Our mission is to provide users with a concise method of
            symptom-tracking by promoting medical self-advocacy to combat
            maternal mortality rates.</b>
          </p>
          <img id="mission-image" src={consultationIcon}/>
        </section>

        <section className="mission-details">
          <section className="mission-benefit">
            <b>Why Focus on Self Advocacy?</b>
            <p>
              The benefits of effective self-advocacy include improved
              person-centered care and quality of life, and reduced symptom
              burden and use of preventative health services. Meaning, once health care providers have a better understanding and they can see the "whole picture" throuhout the user's pregnancy, diagnoses can be made before becoming fatal complications.
            </p>
          </section>
          <section className="information-study">
            <p><b>Who Does Stork Benefit?</b></p>
            <p>
              Our app can be beneficial to any one who is expecting. However, according to a study conducted at the University of Pittsburgh, information suggested that Black women are less likely to share information with healthcare providers compared to other ethnic/racial groups. This is why Stork is targeting that specific demographic!
            </p>
          </section>
          <section className="under-researched-areas">
            <p><b>How Does This Apply to Healthcare?</b></p>
            <p>
              Not being heard or understood by doctors is a running theme amongst black expecting parents - often told they are exaggerating symptoms or clouded by "pregnancy brain". Healthcare professionals can deeply benefit from an improved understanding of patient perspectives and by providing an easy-to-use data display model. Our hope is that expecting parents can voice concerns and seek second opinions more easily.
            </p>
          </section>
          <section className="repeat-benefit">
            <p><b>What is Your Expected Outcome?</b></p>
            <p>
              We want our users to feel safe and confident that they are presenting the most accurate and representative information possible. Stork creates an element of control for expecting parents through our data models and . By having access to the progress of your pregnancy, you are able to advocate for yourself. We decrease the barrier of patient misrepresentation and inaccurate reporting by allowing users to generate reports of their own in a matter of seconds.
            </p>
          </section>
        </section>
      </section>
    </>
  );
}
