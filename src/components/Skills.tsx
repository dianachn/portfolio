
const Skills = () => {
  // Define your skill categories and skills
  const skillCategories = [
    {
      id: 1,
      name: "Professional Skills",
      skills: [
        { name: "Microsoft Word", level: 90 },
        { name: "Microsoft Excel", level: 85 },
        { name: "Google Sheets", level: 80 },
        { name: "Communication & Team Coordination", level: 85 },
        { name: "Problem Solving", level: 80 }
      ]
    },
    {
      id: 2,
      name: "Technical Skills",
      skills: [
        { name: "Data Processing", level: 85 },
        { name: "Document Archiving", level: 90 },
        { name: "Customer Handling", level: 90 },
        { name: "Procurement Processes", level: 85 },
        { name: "Data Entry", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-500 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
