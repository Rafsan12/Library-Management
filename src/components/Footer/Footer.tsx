const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Library Management System. All
          rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="link link-hover">
            Privacy Policy
          </a>
          <a href="#" className="link link-hover">
            Terms of Service
          </a>
          <a href="#" className="link link-hover">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
