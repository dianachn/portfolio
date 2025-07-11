import { Button } from "@/components/ui/button";
import { Mail, Download, Sparkles } from "lucide-react";

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
            {/* Name with decorative background */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary rounded-2xl transform rotate-1"></div>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground p-2">
                Siti Mardiana
              </h1>
            </div>

            {/* Title with primary color */}
            <p className="text-xl md:text-2xl text-secondary-foreground font-medium">
              Office Management Professional & Creative Enthusiast
            </p>

            {/* Description with improved readability */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              A vocational graduate in Office Management with hands-on
              experience in administration, procurement, and customer service.
              Driven by creativity and passion for the arts.
            </p>

            {/* Buttons with updated styling */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 font-medium shadow-sm rounded-full px-6"
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

          {/* Profile image with decorative elements */}
          <div className="w-full md:w-1/3 aspect-square flex justify-center items-center relative">
            {/* Decorative background shapes */}
            <div
              className="absolute inset-0 bg-secondary/60 rounded-[70%_30%_70%_30%] transform rotate-[3deg] scale-110 z-0 
                          before:absolute before:inset-4 before:border-2 before:border-secondary/30 before:rounded-[70%_30%_70%_30%] before:rotate-6
                          after:absolute after:inset-2 after:border-dashed after:border-secondary/20 after:rounded-[65%_35%_75%_25%] after:-rotate-3"
            ></div>

            <div
              className="absolute inset-0 bg-primary/40 rounded-[30%_70%_40%_60%] transform -rotate-12 scale-95 z-10
                          before:absolute before:inset-6 before:border-2 before:border-primary/30 before:rounded-[35%_65%_45%_55%] before:-rotate-6
                          after:absolute after:inset-3 after:border-dotted after:border-primary/20 after:rounded-[25%_75%_35%_65%] after:rotate-3"
            ></div>

            <div
              className="absolute inset-0 bg-accent/30 rounded-[60%_40%_30%_70%] transform rotate-45 scale-90 z-20
                          before:absolute before:inset-5 before:border-2 before:border-accent/30 before:rounded-[55%_45%_35%_65%] before:rotate-12
                          after:absolute after:inset-4 after:border-dashed after:border-accent/20 after:rounded-[65%_35%_25%_75%] after:-rotate-6"
            ></div>

            {/* Profile image (on top) */}
            <div
              className="absolute top-2/3 left-1/3 w-1/2 h-1/2 rounded-full overflow-hidden border-4 border-background/90 shadow-lg hover:scale-105 transition-transform duration-300 z-30 transform -translate-x-1/2 -translate-y-1/2
                          before:absolute before:inset-0 before:-m-2 before:rounded-full before:border before:border-background/40 before:scale-110"
            >
              <img
                src="/lovable-uploads/foto diana.jpg"
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
