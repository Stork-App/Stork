import onPhone from '../images/OnPhoneGif.gif'
import selfAdvocacy from '../images/SelfAdvocacyGif.gif'
import forumImg from '../images/ForumGif.gif'

export default function HomeFeatures() {
  return (
    <>
      <section id="features-section">
        <section class="features-content">
          <h3 class="features-heading">What Features do we provide?</h3>
          <p class="features-description">
            By bridging the communication gap between patients and healthcare
            providers, Stork facilitates more informed and accurate symptom
            tracking while their pregnancy progresses.
          </p>
        </section>
        
        <section class="feature-items">
            <section class="feature-item">
                <img class="feature-image-label" src={onPhone}/>
                <h4 class="feature-title">Complete A Daily Log</h4>
                <p>We want you to have an organized and secure place to store all of your pregnancy symptoms. Complete your log form everyday for comprehensive symptom stats!With each entry, you are able to keep track of any changes for yourself, your healthcare provider, or even to get a second opinion.</p>
            </section>
            <section class="feature-item">
              <img class="feature-image-label" src={selfAdvocacy}/>
                <h4 class="feature-title">Statistics for Self-Advocacy</h4>
                <p>We understand how anxiety-inducing speaking up for yourself can be. That's why we created an easy-to-use data display model, your Stats page & Daily Log table. Studies show that self-advocacy can be more efficient when coupled with physical data.</p>
            </section>
            <section class="feature-item">
              <img class="feature-image-label" src={forumImg}/>
                <h4 class="feature-title">Forum - Build Community!</h4>
                <p>One of the most important aspects of growing your confidence for self advocacy is having a strong community behind you. Share your thoughts, referrals, struggles, reccomendations, or just general questions with other parents all around the world!</p>

            </section>
        </section>
      </section>
    </>
  );
}
