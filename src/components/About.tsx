import {
  User,
  MapPin,
  Mail,
  Globe,
  FileText,
  Book,
  Award,
  Sparkles,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Gradient borders */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F7DAE7] to-transparent opacity-60"></div>
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#F7DAE7] to-transparent opacity-60"></div>
        <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#F7DAE7] to-transparent opacity-60"></div>
        <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#F7DAE7] to-transparent opacity-60"></div>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(45deg, #F7DAE7 0%, #E2B4C1 50%, #D38C9D 100%)`,
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-6 h-6 text-[#F7DAE7]" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-slow">
        <Sparkles className="w-8 h-8 text-[#E2B4C1]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block px-6 py-2 rounded-full bg-[#F7DAE7] mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#A95166]">
              ABOUT ME
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info Card */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <div className="p-2 rounded-full bg-blue-200">
                  <User className="text-blue-600" size={20} />
                </div>
                <span className="ml-2">Personal Info</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="font-medium w-24 text-secondary-foreground">
                    Full Name:
                  </span>
                  <span className="text-muted-foreground">Siti Mardiana</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 text-secondary-foreground">
                    Location:
                  </span>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin size={16} className="mr-1" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 text-secondary-foreground">
                    Phone:
                  </span>
                  <div className="flex items-center text-muted-foreground">
                    <span>+62 831 2129 0491</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 text-secondary-foreground">
                    Email:
                  </span>
                  <div className="flex items-center text-muted-foreground">
                    <Mail size={16} className="mr-1" />
                    <a
                      href="mailto:mardianasiti853@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      mardianasiti853@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Education Card */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <div className="p-2 rounded-full bg-green-200">
                  <Book className="text-green-600" size={20} />
                </div>
                <span className="ml-2">Education</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-secondary-foreground">
                    SMK Tunas Harapan Pasarkemis
                  </h4>
                  <p className="text-muted-foreground">Office Administration</p>
                  <p className="text-sm text-muted-foreground/80">
                    2018 - 2021
                  </p>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <div className="p-2 rounded-full bg-purple-200">
                  <Globe className="text-purple-600" size={20} />
                </div>
                <span className="ml-2">Languages</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-secondary-foreground">
                    Indonesian:
                  </span>
                  <span className="ml-2 text-muted-foreground">Fluent</span>
                </div>
                <div>
                  <span className="font-medium text-secondary-foreground">
                    English:
                  </span>
                  <span className="ml-2 text-muted-foreground">
                    Upper Intermediate
                  </span>
                  <button
                    onClick={() =>
                      window.open(
                        "/certificates/english-certificate.pdf",
                        "_blank"
                      )
                    }
                    className="ml-2 inline-flex items-center text-primary hover:text-primary/80 active:text-primary/60 transition-all hover:scale-125"
                    title="View English Certificate"
                  >
                    <Award size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <div className="p-2 rounded-full bg-orange-200">
                  <FileText className="text-orange-600" size={20} />
                </div>
                <span className="ml-2">Profile Summary</span>
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A vocational graduate in Office Management with practical
                  experience in administration, procurement, and customer
                  service. Known for being responsive, organized, and proactive
                  in managing both internal tasks and external client needs.
                  Demonstrates strong communication skills, having interacted
                  with a wide range of customers in a fast-paced service
                  environment, resolving inquiries with patience and
                  professionalism.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Capable of handling document control, data entry, and
                  procurement procedures with attention to detail and a
                  solution-oriented mindset. Skilled in using Microsoft Office
                  tools and Google Workspace for daily operations and reporting.
                  Recently expanding into web design through self-initiated
                  learning, showing adaptability and a passion for continuous
                  growth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Enjoys dynamic roles, prefers practical work over routine desk
                  tasks, and thrives in environments that require multitasking,
                  initiative, and collaboration. Currently seeking opportunities
                  where administrative precision meets creativity and learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
