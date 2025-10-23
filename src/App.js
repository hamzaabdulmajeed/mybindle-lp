import './App.css';
import Header from './components/header';
import Cardsection from "./components/cardSection"
import Herosection from "./components/heroSection"
import Stepper from './components/stepper';
import Reviewsection from './components/reviewSection';
import Banner from './components/banner';
import Footer from './components/footer';
import { CARD_SECTION_DATA } from './constant/cardSection';
import { HERO_SECTION_DATA } from './constant/heroSection';
import { STEPPER_SECTION_DATA } from './constant/stepper';
import { REVIEW_SECTION_DATA } from './constant/reviewSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Cardsection {...CARD_SECTION_DATA}/>
      <Herosection {...HERO_SECTION_DATA}/>
      <Stepper {...STEPPER_SECTION_DATA}/>
      <Banner />
      <Reviewsection {...REVIEW_SECTION_DATA} />
      <Footer />
    </div>
  );
}

export default App;
