import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import Portfolio from "@/components/SimplePortfolio/Portfolio";
import Portfolio from "@/components/AdvPortfolio/Portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
