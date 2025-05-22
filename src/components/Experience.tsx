
import { BriefcaseBusiness, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Customer Relation",
      company: "PT Delta Mega Persada",
      location: "Suvarna Sutera",
      period: "September 2023 - March 2025",
      description: [
        "Handled unit handovers and data entry.",
        "Managed customer complaints and work permit requests.",
        "Conducted area supervision and responded to incoming calls."
      ]
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
        "Sourced and maintained strong relationships with vendors."
      ]
    },
    {
      id: 3,
      role: "Staff Administrasi",
      company: "PT Delta Mega Persada",
      location: "Suvarna Sutera",
      period: "August 2021 - April 2022",
      description: [
        "Calculated and recorded water usage data from field staff.",
        "Reported usage to the finance department for billing purposes."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform -translate-x-2.5 md:-translate-x-3.5 w-5 h-5 rounded-full border-4 bg-white ${index === 0 ? 'border-primary' : 'border-gray-400'}`}></div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                      <div className={`bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full ${index % 2 === 0 ? 'md:order-first' : ''}`}>
                        {index === 0 ? 'Current' : 'Past'}
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-2 text-gray-600">
                      <BriefcaseBusiness size={16} className="mr-1" />
                      <span className="font-medium">{exp.company} - {exp.location}</span>
                    </div>
                    
                    <div className="flex items-center mb-4 text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <ul className="space-y-2 text-gray-600 list-disc pl-5">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
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
