import Banner from "../components/Banner";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutSection from "../components/AboutSection";
import SuccessSection from "../components/SuccessSection";
import FAQSection from "../components/FAQSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,   
        });
      }, []);
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <SuccessSection></SuccessSection>
            <FAQSection></FAQSection>
            <TestimonialsSection></TestimonialsSection>
        </div>
    );
};

export default Home;