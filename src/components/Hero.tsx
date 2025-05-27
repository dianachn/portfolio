import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 text-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800 drop-shadow-sm">
              Siti Mardiana
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Office Management Professional & Creative Enthusiast
            </p>
            <p className="text-lg text-gray-700">
              A vocational graduate in Office Management with hands-on
              experience in administration, procurement, and customer service.
              Driven by creativity and passion for the arts.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="bg-purple-400 hover:bg-purple-500 text-white flex items-center gap-2 font-medium shadow-sm"
                onClick={() =>
                  (window.location.href = "mailto:mardianasiti853@gmail.com")
                }
              >
                <Mail size={18} />
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="border-purple-400 text-purple-700 hover:bg-purple-100 flex items-center gap-2 shadow-sm"
                onClick={() => {
                  window.open(
                    "/lovable-uploads/CV Siti Mardiana (English).pdf",
                    "_blank"
                  );
                }}
              >
                <Download size={18} />
                Download CV
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="/lovable-uploads/38f8685c-e17d-4136-9cee-6dc552c51946.png"
                alt="Siti Mardiana"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
