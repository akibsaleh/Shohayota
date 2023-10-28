import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Terms from './Components/Terms/Terms';
import Contact from './Components/Contact/Contact';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useRef, useState } from 'react';

const App = () => {
  const { i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';

  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const termsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutIsInViewport = useIsInViewport(aboutRef);
  const homeIsInViewport = useIsInViewport(homeRef);
  const termsIsInViewport = useIsInViewport(termsRef);
  const contactIsInViewport = useIsInViewport(contactRef);

  const elementsInViewport = { aboutIsInViewport, homeIsInViewport, termsIsInViewport, contactIsInViewport };
  return (
    <>
      <div className={`bg-snow ${isBn ? 'font-nsb' : 'font-archivo'}`}>
        <Header elementsInViewport={elementsInViewport} />
        <Home homeRef={homeRef} />
        <About aboutRef={aboutRef} />
        <Terms termsRef={termsRef} />
        <Contact contactRef={contactRef} />
        <Footer />
      </div>
    </>
  );
};

export default App;

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useMemo(() => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)), []);

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
