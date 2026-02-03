const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Science For Life</h3>
          <p className="text-light mb-4">Pendidikan untuk Semua</p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Science For Life. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
