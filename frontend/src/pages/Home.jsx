
import Header from '../components/HomeComponents/HomeHeader';
import Mission from '../components/HomeComponents/HomeMission';
import Features from '../components/HomeComponents/HomeFeatures';
import Articles from '../components/HomeComponents/HomeArticles';
import '../Home.css';

export default function HomePage() {
  return (
    
    <>
      <Header sx={{mt: 10}}/>
      <Mission />
      <Features />
      <Articles />
    </>
  );
}
