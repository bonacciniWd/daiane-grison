import Headline from '../components/Headline';
import About from '../components/About'
import FAQAccordion from '../components/FAQAccordion';
import Details from '../components/Details';
import Spacebar from '../components/Spacebar';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-tantra-dark">
      <Headline />
      <Spacebar />
      <About />
      <Spacebar />
      <Details />
      <Spacebar />
      <FAQAccordion />
      <Spacebar />
      <Footer />
    </div>
  );
}
