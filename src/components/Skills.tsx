
const Skills = () => {
  // Define your skill categories and skills
  const skillCategories = [
    {
      id: 1,
      name: "Professional Skills",
      skills: [
        { name: "Project Management", level: 90 },
        { name: "Team Leadership", level: 85 },
        { name: "Strategic Planning", level: 80 },
        { name: "Client Relations", level: 95 },
        { name: "Problem Solving", level: 85 }
      ]
    },
    {
      id: 2,
      name: "Technical Skills",
      skills: [
        { name: "Microsoft Office", level: 95 },
        { name: "Data Analysis", level: 75 },
        { name: "CRM Systems", level: 80 },
        { name: "Digital Marketing", level: 70 },
        { name: "Research", level: 85 }
      ]
    },
    {
      id: 3,
      name: "Soft Skills",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Teamwork", level: 90 },
        { name: "Adaptability", level: 85 },
        { name: "Time Management", level: 80 },
        { name: "Critical Thinking", level: 90 }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Additional skills or certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Additional Qualifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Certification 1", 
              "Certification 2", 
              "Language 1", 
              "Language 2",
              "Special Skill 1",
              "Special Skill 2",
              "Achievement 1",
              "Achievement 2"
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 px-4 py-3 rounded-md text-center text-gray-700 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
