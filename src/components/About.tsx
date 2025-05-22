
import { User, MapPin, Mail, Globe, FileText, Book } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <User className="mr-2 text-primary" size={20} />
                Personal Info
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="font-medium w-24">Full Name:</span>
                  <span className="text-gray-600">Siti Mardiana</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Location:</span>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-1" />
                    <span>Indonesia</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Phone:</span>
                  <div className="flex items-center text-gray-600">
                    <span>+62 831 2129 0491</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Email:</span>
                  <div className="flex items-center text-gray-600">
                    <Mail size={16} className="mr-1" />
                    <span>mardianasiti853@gmail.com</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Book className="mr-2 text-primary" size={20} />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">SMK Tunas Harapan Pasarkemis</h4>
                  <p className="text-gray-600">Office Administration</p>
                  <p className="text-sm text-gray-500">2018 - 2021</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Globe className="mr-2 text-primary" size={20} />
                Languages
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Indonesian:</span>
                  <span className="ml-2 text-gray-600">Fluent</span>
                </div>
                <div>
                  <span className="font-medium">English:</span>
                  <span className="ml-2 text-gray-600">Upper Intermediate</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FileText className="mr-2 text-primary" size={24} />
                Profile Summary
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">
                  A vocational graduate in Office Management with hands-on experience in administration, 
                  procurement, and customer service. Skilled in handling documents, data entry, procurement 
                  processes, and client interaction.
                </p>
                <p className="text-gray-600">
                  Detail-oriented, responsive, and able to perform well under pressure.
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
