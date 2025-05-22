
import { Palette, Music, Utensils, Brush, PaintRoller, Music2 } from "lucide-react";

const Hobbies = () => {
  const hobbyItems = [
    {
      icon: <Brush className="h-10 w-10 text-pink-500" />,
      title: "Drawing",
      description: "Creating visual art with pencils, pens, and digital tools to express ideas and emotions."
    },
    {
      icon: <Palette className="h-10 w-10 text-purple-500" />,
      title: "Painting",
      description: "Exploring colors and textures on canvas to create beautiful landscapes and abstract pieces."
    },
    {
      icon: <PaintRoller className="h-10 w-10 text-blue-500" />,
      title: "Designing",
      description: "Crafting visual concepts and layouts for various personal and creative projects."
    },
    {
      icon: <Music className="h-10 w-10 text-yellow-500" />,
      title: "Singing",
      description: "Expressing myself through vocal performance and enjoying various music genres."
    },
    {
      icon: <Music2 className="h-10 w-10 text-green-500" />,
      title: "Dancing",
      description: "Moving to the rhythm and expressing emotions through choreography and free-style dance."
    },
    {
      icon: <Utensils className="h-10 w-10 text-red-500" />,
      title: "Cooking",
      description: "Experimenting with flavors and creating delicious meals inspired by various cuisines."
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Creative Passions</h2>
          <div className="w-24 h-1 bg-purple-400 rounded-full"></div>
          <p className="mt-6 text-center text-gray-600 max-w-2xl">
            Beyond my professional life, I nurture my creative side through various hobbies and artistic pursuits.
            These activities help me maintain balance and bring a fresh perspective to everything I do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbyItems.map((hobby, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-purple-50 rounded-full">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{hobby.title}</h3>
                <p className="text-gray-600">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
