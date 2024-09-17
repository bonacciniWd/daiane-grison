import Headline from '../components/Headline';
import About from '../components/About'
import FAQAccordion from '../components/FAQAccordion';
import Details from '../components/Details';
import Testimonials from '../components/Testimonials';
import Spacebar from '../components/Spacebar';
import Element from '../components/Element';
import WhatsappButton from '../components/WhatsappButton';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-tantra-dark overflow-x-hidden">
      <Headline />
      <Spacebar />
      <Element />
      <Spacebar />
      <About />
      <Spacebar />
      <Details />
      <Spacebar />
      <Testimonials />
      <Spacebar />
      <FAQAccordion />
      <Spacebar />
      <Footer />
      <WhatsappButton />
    </div>
  );
}
