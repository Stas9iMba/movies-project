import React from "react";

function Search({ searchMovies }) {
  const [searchValue, setSearchValue] = React.useState("");
  const [filterType, setFilterType] = React.useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchValue, filterType);
    }
  };

  const handleFilterType = (event) => {
    setFilterType(event.target.dataset.type);
  };

  return (
    <>
      <div className="group w-72 md:w-80 lg:w-96 mx-auto">
        <div className="relative flex items-center">
          <input
            value={searchValue}
            placeholder="Search"
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            className=" text-black peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
            onKeyDown={handleKey}
          />
          <button
            onClick={() => searchMovies(searchValue, filterType)}
            className="absolute right-0 h-10 w-16 rounded-r-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex w-72 md:w-80 lg:w-96 mx-auto pt-3 justify-between">
        <div className="flex items-center mr-4">
          <input
            id="all-radio"
            type="radio"
            value=""
            name="colored-radio"
            data-type="all"
            onChange={handleFilterType}
            checked={filterType === "all"}
          />
          <label htmlFor="all-radio" className="ml-1">
            All
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="movies-radio"
            type="radio"
            value=""
            name="colored-radio"
            data-type="movie"
            onChange={handleFilterType}
            checked={filterType === "movie"}
          />
          <label htmlFor="movies-radio" className="ml-1">
            Movies
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="series-radio"
            type="radio"
            value=""
            name="colored-radio"
            data-type="series"
            onChange={handleFilterType}
            checked={filterType === "series"}
          />
          <label htmlFor="series-radio" className="ml-1">
            Series
          </label>
        </div>
      </div>
    </>
  );
}

export default Search;
