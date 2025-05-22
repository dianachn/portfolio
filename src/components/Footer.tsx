
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300">Siti Mardiana</h2>
            <p className="text-purple-200 mt-2">Professional Portfolio</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-purple-200 text-sm">
              © {currentYear} Siti Mardiana. All rights reserved.
            </p>
            <p className="text-purple-300 text-xs mt-1">
              Office Management Professional
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
