const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 text-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-purple-600">
              Siti Mardiana
            </h2>
            <p className="text-gray-600 mt-2">Professional Portfolio</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-600 text-sm">
              © {currentYear} Siti Mardiana. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Office Management Professional & Creative Enthusiast
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
