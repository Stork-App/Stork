import advocacyImg from '../images/AdvocacyImg.png';
import chestPainImg from '../images/ChestPainImg.png'
import disparitiesImg from '../images/DisparitiesImg.png';

export default function HomeArticles() {
  return (
    <>
      <section id="research-articles-section">
        <h3 class="articles-heading">Relevant Studies</h3>
        <section class="article-list">
          <section class="article-item">
            <img class="article-image-label" src={advocacyImg}/>
            <p><b>
              “A Pilot Exploring Self-Advocacy as a Factor in Maternal Mortality and Morbidity in Pregnant Black Women.”
              </b></p>
            <p class="article-metadata">D-Psychology at University of Pittsburgh, 1 Jan. 1970</p>
            <a href="https://d-scholarship.pitt.edu/40428/" target="_blank" rel="noopener noreferrer" className="learn-more-btn">Read More</a>
          </section>

          <section class="article-item">
          <img class="article-image-label" src={chestPainImg}/>
            <p><b>
              “Is self-advocacy universally achievable for patients? the experiences of Australian women with cardiac disease in pregnancy and postpartum.”
            </b></p>
            <p class="article-metadata">International Journal of Qualitative Studies on Health and Well-Being, vol. 18, no. 1, 23 Feb. 2023</p>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9970247/" target="_blank" rel="noopener noreferrer" className="learn-more-btn">Read More</a>
          </section>

          <section class="article-item">
          <img class="article-image-label" src={disparitiesImg}/>
            <p><b>
              “Reducing Disparities in Severe Maternal Morbidity and Mortality.”
              </b></p>
            <p class="article-metadata">Clinical Obstetrics and Gynecology, U.S. National Library of Medicine, June 2018</p>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5915910/" target="_blank" rel="noopener noreferrer" className="learn-more-btn">Read More</a>
          </section>
        </section>
      </section>
    </>
  );
}
