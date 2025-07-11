import { SiGithub } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
          <p className="mt-4 text-gray-600 text-center max-w-2xl">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div
            onClick={() => handleClick("tel:+6283121290491")}
            className="bg-white p-6 rounded-lg shadow-sm text-center cursor-pointer 
            transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary/5"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <FaPhoneVolume size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Phone</h3>
            <p className="text-gray-600">+62 831 2129 0491</p>
          </div>

          <div
            onClick={() => handleClick("mailto:mardianasiti853@gmail.com")}
            className="bg-white p-6 rounded-lg shadow-sm text-center cursor-pointer 
            transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary/5"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <MdAlternateEmail size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
            <p className="text-gray-600">mardianasiti853@gmail.com</p>
          </div>

          <div
            onClick={() =>
              handleClick(
                "https://www.linkedin.com/in/siti-mardiana-b38b55269/"
              )
            }
            className="bg-white p-6 rounded-lg shadow-sm text-center cursor-pointer 
            transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary/5"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <FaLinkedinIn size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              LinkedIn
            </h3>
            <p className="text-gray-600">Connect with me</p>
          </div>

          <div
            onClick={() => handleClick("https://github.com/dianachn")}
            className="bg-white p-6 rounded-lg shadow-sm text-center cursor-pointer 
            transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary/5"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <SiGithub size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">GitHub</h3>
            <p className="text-gray-600">@dianachn</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
