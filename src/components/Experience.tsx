import { BriefcaseBusiness, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 0,
      role: "Junior Web Designer (Self-Initiated Project)",
      company: "Guided Learning",
      location: "",
      period: "May 2025 - Present",
      description: [
        "Currently learning web design through a hands-on project, building a website from scratch while receiving guidance from an experienced coworker.",
        "Developing skills in layout design, user interface, and responsive design using HTML, CSS, and basic web tools.",
        "Focused on applying best practices in visual structure, readability, and usability across devices.",
      ],
    },

    {
      id: 1,
      role: "Customer Relation (Handover)",
      company: "PT Delta Mega Persada",
      location: "Suvarna Sutera",
      period: "September 2023 - March 2025",
      description: [
        "Handled unit handovers and data entry.",
        "Managed customer complaints and work permit requests.",
        "Conducted area supervision and responded to incoming calls.",
      ],
    },
    {
      id: 2,
      role: "Purchasing / Procurement",
      company: "PT Delta Mega Persada",
      location: "Suvarna Sutera",
      period: "May 2022 - September 2023",
      description: [
        "Managed procurement of goods/services and prepared POs and contracts.",
        "Processed vendor invoices and recorded asset data.",
        "Sourced and maintained strong relationships with vendors.",
      ],
    },
    {
      id: 3,
      role: "Staff Administrasi",
      company: "PT Delta Mega Persada",
      location: "Suvarna Sutera",
      period: "August 2021 - April 2022",
      description: [
        "Calculated and recorded water usage data from field staff.",
        "Reported usage to the finance department for billing purposes.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-pattern-waves opacity-20"></div>
      <div className="absolute inset-0 bg-pattern-lines opacity-20 -rotate-45"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 animate-float">
        <Sparkles className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float-slow">
        <Sparkles className="w-8 h-8 text-secondary" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block px-6 py-2 rounded-full bg-accent mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground">
              WORK EXPERIENCE
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-secondary/30"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-full bg-accent/20">
                        <BriefcaseBusiness
                          className="text-accent-foreground"
                          size={20}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-secondary-foreground">
                        {experience.role}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-secondary-foreground">
                        {experience.company}
                      </p>
                      <p className="text-muted-foreground">
                        {experience.description.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
