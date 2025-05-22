
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
              Siti Mardiana
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Office Management Professional
            </p>
            <p className="text-lg text-white/80">
              A vocational graduate in Office Management with hands-on experience in administration,
              procurement, and customer service.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-white text-purple-700 hover:bg-white/90 flex items-center gap-2 font-medium">
                <Mail size={18} />
                Contact Me
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 flex items-center gap-2">
                <Download size={18} />
                Download CV
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/lovable-uploads/93b8c919-d943-49f6-bef4-894b2633d08a.png"
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
