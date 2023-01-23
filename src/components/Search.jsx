import React from "react";

function Search({ searchValue, setSearchValue }) {
  return (
    <div className="group w-72 md:w-80 lg:w-96 mx-auto">
      <div className="relative flex items-center">
        <input
          value={searchValue}
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          className=" text-black peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
        />
        <button className="absolute right-0 h-10 w-16 rounded-r-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
}

export default Search;
