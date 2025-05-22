
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Siti Mardiana
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Office Management Professional
            </p>
            <p className="text-lg text-gray-600">
              A vocational graduate in Office Management with hands-on experience in administration,
              procurement, and customer service.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download size={18} />
                Download CV
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
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
