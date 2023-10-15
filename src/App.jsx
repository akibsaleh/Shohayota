import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Terms from './Components/Terms/Terms';
import Contact from './Components/Contact/Contact';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  return (
    <>
    <div className={isBn ?  'font-nsb' : 'font-archivo'}>
      <Header />
      <Home />
      <About />
      <Terms />
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default App;
