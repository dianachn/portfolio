import { Button } from "@/components/ui/button";
import { Mail, Download, Sparkles } from "lucide-react";
import PhotoWithBackground from "./PhotoWithBackground";

const Hero = () => {
  return (
    <section
      className="py-20 md:py-28 bg-background relative overflow-hidden"
      id="hero"
    >
      {/* Bottom gradient separator */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F7DAE7] to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-[#A95166] to-[#A95166] opacity-50"></div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(45deg, #F7DAE7 0%, #E2B4C1 50%, #D38C9D 100%)`,
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 animate-float">
        <Sparkles className="w-8 h-8 text-[#F7DAE7]" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float-slow">
        <Sparkles className="w-6 h-6 text-[#E2B4C1]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6">
            {/* Name with decorative pink background shape */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7DAE7] to-[#E2B4C1] rounded-3xl transform rotate-2 shadow-lg"></div>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#A95166] p-2">
                Siti Mardiana Art Gallery
              </h1>
            </div>

            {/* Title with primary color */}
            <p className="text-xl md:text-2xl text-secondary-foreground font-medium">
              Office Support Professional (Admin | Procurement | Customer
              Service)
            </p>

            {/* Description with improved readability */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experienced in admin, procurement, and customer service. Skilled
              in handling invoices, vendor coordination, and data management.
              Proficient in Excel, Google Docs, Canva, and AI tools. Fast
              learner, reliable, and collaborative.
            </p>

            {/* Buttons with updated styling */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="bg-gradient-to-r from-[#F7DAE7] to-[#E2B4C1] hover:from-[#E2B4C1] hover:to-[#D38C9D] text-[#A95166] flex items-center gap-2 font-medium shadow-sm rounded-full px-6 border-0"
                onClick={() =>
                  (window.location.href = "mailto:mardianasitiid@gmail.com")
                }
              >
                <Mail size={18} />
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="border-2 border-secondary text-secondary-foreground hover:bg-secondary/10 flex items-center gap-2 shadow-sm rounded-full px-6"
                onClick={() => {
                  window.open(
                    "https://docs.google.com/document/d/1ma7r0D2e-2_tBWSXWhqCUY72swIZ7bBYeUuSUg-G_Lo/edit?usp=drive_link",
                    "_blank"
                  );
                }}
              >
                <Download size={18} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile image with abstract background shape */}
          <div className="w-full md:w-[40%] flex justify-center items-center">
            <PhotoWithBackground
              imageSrc="/lovable-uploads/foto-diana.jpg"
              imageAlt="Siti Mardiana"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
