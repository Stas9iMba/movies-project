import React from "react";

function Footer() {
  return (
    <footer className="py-4 bg-gray-400">
      <div className="container mx-auto px-4 flex justify-center items-center text-white">
        <a href="#" className="text-base">
          © {new Date().getFullYear()} copyright
        </a>
      </div>
    </footer>
  );
}

export default Footer;
