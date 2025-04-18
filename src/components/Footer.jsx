const Footer = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    return (
      <footer
        onClick={scrollToTop}
        className="bg-pink-500 text-white text-center py-4 cursor-pointer hover:bg-pink-600 transition-colors"
      >
        © 2025  Bindu Srivalli Nagineni
      </footer>
    );
  };
  
  export default Footer;
  