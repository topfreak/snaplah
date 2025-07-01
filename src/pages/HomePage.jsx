import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import InspirationGallery from '../components/InspirationGallery';
import ForWhom from '../components/ForWhom';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <>
        <Hero />
        <HowItWorks />
        <Features />
        <InspirationGallery />
        <ForWhom />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
    </>
  );
};

export default HomePage;