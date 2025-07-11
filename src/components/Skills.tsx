import {
  FileText,
  FileSpreadsheet,
  Users,
  BrainCircuit,
  Database,
  FolderArchive,
  UserRound,
  ShoppingCart,
  KeyboardIcon,
} from "lucide-react";

const Skills = () => {
  // Define your skill categories and skills
  const skillCategories = [
    {
      id: 1,
      name: "Professional Skills",
      color: "bg-[#E5D4F0]", // Pastel purple like in the inspiration
      textColor: "text-[#4A3B5C]",
      skills: [
        {
          name: "Microsoft Word",
          desc: "Experienced in using Word to create service reports, formal letters, and customer communication materials with clear formatting and a professional tone.",
          level: 90,
          icon: <FileText className="h-5 w-5" />,
        },
        {
          name: "Microsoft Excel",
          desc: "Used Excel to log and analyze customer data, track daily service activities, and monitor performance targets using formulas and conditional formatting.",
          level: 85,
          icon: <FileSpreadsheet className="h-5 w-5" />,
        },
        {
          name: "Google Sheets",
          desc: "Managed shared spreadsheets for team schedules, customer feedback, and task progress, enabling smooth real-time collaboration and coordination.",
          level: 80,
          icon: <FileSpreadsheet className="h-5 w-5" />,
        },
        {
          name: "Communication & Team Coordination",
          desc: "Strong communication skills developed through direct client interactions; able to convey messages clearly, maintain good teamwork, and support daily operations effectively.",
          level: 85,
          icon: <Users className="h-5 w-5" />,
        },
        {
          name: "Problem Solving",
          desc: "Handled customer complaints with a calm and solution-oriented approach; skilled at identifying root causes and offering practical, timely resolutions.",
          level: 80,
          icon: <BrainCircuit className="h-5 w-5" />,
        },
      ],
    },
    {
      id: 2,
      name: "Technical Skills",
      color: "bg-[#DFFCD9]", // Pastel green
      textColor: "text-[#3B5C3E]",
      skills: [
        {
          name: "Data Processing",
          desc: "Experience in handling and processing large datasets with accuracy and efficiency.",
          level: 85,
          icon: <Database className="h-5 w-5" />,
        },
        {
          name: "Document Archiving",
          desc: "Systematic approach to organizing and maintaining digital and physical documents.",
          level: 90,
          icon: <FolderArchive className="h-5 w-5" />,
        },
        {
          name: "Customer Handling",
          desc: "Professional approach to customer service and relationship management.",
          level: 90,
          icon: <UserRound className="h-5 w-5" />,
        },
        {
          name: "Procurement Processes",
          desc: "Experience in managing procurement cycles and vendor relationships.",
          level: 85,
          icon: <ShoppingCart className="h-5 w-5" />,
        },
        {
          name: "Data Entry",
          desc: "Fast and accurate data entry with attention to detail and quality control.",
          level: 95,
          icon: <KeyboardIcon className="h-5 w-5" />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#FFF9F5]">
      {" "}
      {/* Light cream background */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block px-6 py-2 rounded-full bg-[#FFD4E5] mb-4">
            {" "}
            {/* Pastel pink pill */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#4A3B5C]">
              SKILLS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="overflow-hidden">
              <h3
                className={`inline-block px-6 py-2 rounded-full ${category.color} ${category.textColor} text-xl font-semibold mb-6`}
              >
                {category.name}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${category.color}`}>
                          {skill.icon}
                        </div>
                        <span
                          className={`${category.textColor} font-medium text-lg`}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`${category.textColor} text-sm font-medium`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${category.color} rounded-full transition-all duration-500 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                        }}
                      ></div>
                    </div>
                    {skill.desc && (
                      <div className="mt-3 text-gray-600 text-sm">
                        {skill.desc}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
