
import { User, MapPin, Mail, Globe } from 'lucide-react';

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
                  <span className="text-gray-600">John Doe</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium w-24">Age:</span>
                  <span className="text-gray-600">30 Years</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Location:</span>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-1" />
                    <span>New York, USA</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Email:</span>
                  <div className="flex items-center text-gray-600">
                    <Mail size={16} className="mr-1" />
                    <span>john.doe@example.com</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Website:</span>
                  <div className="flex items-center text-gray-600">
                    <Globe size={16} className="mr-1" />
                    <span>johndoe.com</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-4">
                I am a dedicated [your profession] with over [X] years of experience in the [your industry] industry. 
                Throughout my career, I have developed a strong foundation in [key skill areas] and have consistently 
                delivered results in challenging environments.
              </p>
              <p className="text-gray-600">
                My professional journey has equipped me with valuable insights into [specific aspects of your work], 
                allowing me to [your unique value proposition]. I am passionate about [what you care about professionally] 
                and continuously strive to enhance my skills in [areas of improvement or interest].
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
              <p className="text-gray-600">
                I believe in [your professional philosophy or approach]. My work is guided by [your principles or values], 
                and I take pride in [what you're proud of professionally]. I enjoy collaborating with teams to [what you 
                do well in team settings] and am always eager to take on new challenges that allow me to [what you want 
                to do more of].
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
