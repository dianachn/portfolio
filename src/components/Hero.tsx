
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-primary">John Doe</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">Professional Title</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              A passionate professional with experience in [your industry]. I specialize in [your key skills] and have a proven track record in [your achievements].
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#experience" 
                className="px-6 py-3 bg-transparent border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                View Experience
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              {/* Replace with your photo */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                Your Photo
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-gray-400 hover:text-primary">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
