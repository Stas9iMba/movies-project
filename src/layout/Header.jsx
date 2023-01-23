import React from "react";

function Header() {
  return (
    <header className="py-4 bg-green-700 ">
      <div className="container mx-auto px-4 flex justify-between items-center text-white">
        <a href="#" className="text-3xl">
          React Movies
        </a>
        <a href="!#">Repo</a>
      </div>
    </header>
  );
}

export default Header;
