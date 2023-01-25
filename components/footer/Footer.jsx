const Footer = () => {
  return (
    <footer className="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black">
      <div className="container">
        <p className="text-center py-6 text-gray-lite  dark:text-color-910 ">
          &copy; {new Date().getFullYear()}{" "}
          <a
            className="hover:text-data-blue duration-300 transition"
            href="https://justin.brenner.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Justin Brenner, Forge Solutions LLC
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
