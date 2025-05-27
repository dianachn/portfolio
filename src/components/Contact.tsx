import { Mail, Phone } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';
import { Button } from '@/components/ui/button';

const Contact = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+62 831 2129 0491</p>
            <Button variant="outline" className="mt-4">
              Call Now
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">mardianasiti853@gmail.com</p>
            <Button variant="outline" className="mt-4">
              Send Email
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <SiLinkedin size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-600">Connect with me</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/siti-mardiana-b38b55269/',
                  '_blank'
                )
              }
            >
              Visit Profile
            </Button>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Send Me a Message
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <Button className="px-8">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
