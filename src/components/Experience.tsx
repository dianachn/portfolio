import { BriefcaseBusiness, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 0,
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
      id: 1,
      role: "Customer Relation",
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
    <motion.section
      id="experience"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <motion.div
            className="w-24 h-1 bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-4 h-full w-0.5 bg-gray-200"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          ></motion.div>

          {/* Experience items */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-4 transform -translate-x-2.5 w-5 h-5 rounded-full border-4 bg-white ${
                    index === 0 ? "border-primary" : "border-gray-400"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 * index }}
                ></motion.div>

                <div className="ml-12">
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.role}
                      </h3>
                      <motion.div
                        className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full"
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                      >
                        Past
                      </motion.div>
                    </div>

                    <div className="flex items-center mb-2 text-gray-600">
                      <BriefcaseBusiness size={16} className="mr-1" />
                      <span className="font-medium">
                        {exp.company} - {exp.location}
                      </span>
                    </div>

                    <div className="flex items-center mb-4 text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2 text-gray-600 list-disc pl-5">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
