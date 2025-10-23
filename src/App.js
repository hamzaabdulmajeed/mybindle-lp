import './App.css';
import Header from './components/header';
import Cardsection from "./components/cardSection"
import Herosection from "./components/heroSection"
import Stepper from './components/stepper';
import Reviewsection from './components/reviewSection';
import Banner from './components/banner';
import Footer from './components/footer';
import { CARD_SECTION_DATA } from './constant/cardSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Cardsection {...CARD_SECTION_DATA}/>
      <Herosection />
      <Stepper />
      <Banner />
      <Reviewsection />
      <Footer />
    </div>
  );
}

export default App;
