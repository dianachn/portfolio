import {
  BriefcaseBusiness,
  Calendar as CalendarIcon,
  Sparkles,
  Map as LocationIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 0,
      role: "Content Editor",
      company: "Zentala Agency",
      location: "Remote",
      period: "April 2025 - July 2025",
      logo: "/images/companies/zentala-agency.png.jpeg",
      description: [
        "Supported the content team by reviewing written materials for grammar accuracy and clarity in English.",
        "Provided suggestions to writers and used AI tools to assist in editing and refining content.",
        "Sourced appropriate images for blog posts and thumbnails using free resources and AI-generated visuals.",
        "Assisted with light design tasks, including creating business cards using Canva.",
        "Learning basic web development using GenAI tools to build personal portfolios.",
        "Utilized tools like GitHub and Cursor to help review and manage content files during development.",
      ],
    },

    {
      id: 1,
      role: "Customer Relation",
      company: "PT Delta Mega Persada",
      location: "Suvarna Sutera",
      period: "September 2023 - March 2025",
      logo: "/images/companies/delta-mega-persada.png.webp",
      description: [
        "Handled 15–25+ customer calls per day regarding complaints, payment inquiries, and technical support.",
        "Created 5–10 handover invitations per batch, confirmed appointments via email/WhatsApp, and met customers daily to explain estate regulations.",
        "Served front-office customers by processing renovation deposit refunds, verifying site conditions, and coordinating with finance and operations teams.",
        "Drafted and distributed customer notifications (e.g., service interruptions, office closures) via email and print.",
        "Registered 200–300+ free tax (PPN) units annually into the government portal (SiKumbang) by compiling Handover data and unit documentation.",
        "Managed daily stock tracking and document archiving for unit handover preparation.",
        "Oversaw 1–12 unit handovers per day depending on project stage, providing full explanation of house condition and warranty.",
      ],
    },
    {
      id: 2,
      role: "Purchasing / Procurement",
      company: "PT Delta Mega Persada",
      location: "Suvarna Sutera",
      period: "May 2022 - September 2023",
      logo: "/images/companies/delta-mega-persada.png.webp",
      description: [
        "Processed 10–20 Purchase Requests and POs monthly across departments using an internal procurement system.",
        "Coordinated with 20–50+ vendors for product sourcing, quotations, and delivery matching required specs.",
        "Searched vendors via internal database, referrals, or internet, and arranged meetings for negotiation and technical alignment.",
        "Prepared 150–250 annual Work Contracts for outsourcing vendors (security, cleaning, receptionist).",
        "Processed up to 200 invoices monthly, submitted to finance with complete documentation for payment.",
        "Maintained procurement records, asset registration logs, and purchase reports for audit and tracking.",
      ],
    },
    {
      id: 3,
      role: "Staff Administrasi",
      company: "PT Delta Mega Persada",
      location: "Suvarna Sutera",
      period: "August 2021 - April 2022",
      logo: "/images/companies/delta-mega-persada.png.webp",
      description: [
        "Inputted and calculated monthly water usage data for 5,000+ housing units from 20 clusters using Excel.",
        "Prepared billing reports and submitted them to the finance team for invoice generation.",
        "Supported the operational team by sourcing tools and materials online, aligned with technical requirements for approval.",
        "Coordinated with the field team for issue resolution, document follow-up, and real-time updates.",
        "Conducted stock opname and submitted item requests to procurement for restocking.",
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
                    <div className="flex items-center gap-3 mb-4">
                      {experience.logo && (
                        <div className="w-12 h-12 rounded-lg bg-white p-2 shadow-sm border">
                          <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              // Fallback to icon if logo fails to load
                              const target =
                                e.currentTarget as HTMLImageElement;
                              target.style.display = "none";
                              const fallback =
                                target.nextElementSibling as HTMLElement;
                              if (fallback) {
                                fallback.style.display = "flex";
                              }
                            }}
                          />
                          <div className="hidden p-2 rounded-full bg-accent/20">
                            <BriefcaseBusiness
                              className="text-accent-foreground"
                              size={20}
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-secondary-foreground">
                          {experience.role}
                          <span className="text-sm font-medium text-muted-foreground">
                            &nbsp;at {experience.company}
                          </span>
                        </h3>

                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <CalendarIcon size={16} />
                            <span>{experience.period}</span>
                          </div>
                          {experience.location && (
                            <div className="flex items-center gap-1">
                              <LocationIcon size={16} />
                              {experience.location}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 pl-16 pt-3">
                      {experience.description.map((desc, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-600 mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      ))}
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
