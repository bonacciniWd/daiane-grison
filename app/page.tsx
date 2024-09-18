// page.tsx
import Head from 'next/head';
import Headline from '../components/Headline';
import About from '../components/About';
import FAQAccordion from '../components/FAQAccordion';
import Details from '../components/Details';
import Testimonials from '../components/Testimonials';
import Spacebar from '../components/Spacebar';
import Element from '../components/Element';
import WhatsappButton from '../components/WhatsappButton';
import Footer from '@/components/Footer';
import ExperienceDetails from '@/components/ExperienceDetails';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-tantra-dark overflow-x-hidden">
      <Head>
        <title>Home | Experiência Tantrica</title>
        <meta name="description" content="A melhor experiência tantrica para seu crescimento pessoal e espiritual" />
        <meta name="keywords" content="experiência tântrica, tantra, meditação, crescimento pessoal, sexualidade, ejaculação precoce, orgasmo, despertar sexual," />
        <meta property="og:title" content="Experiência Tantrica" />
        <meta property="og:description" content="A melhor experiência tantrica para seu crescimento pessoal e espiritual" />
        <meta property="og:image" content="https://i.ibb.co/2nwWRsJ/Capa-Icone-Landing-Page.png" />
        <meta property="og:url" content="https://daiane-grison.vercel.app" />
      </Head>
      <Headline />
      <Spacebar />
      <ExperienceDetails />
      <Spacebar />
      <About />
      <Spacebar />
      <Element />
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
