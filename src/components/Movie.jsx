import React from "react";

function Movie({ Title, Type, Poster }) {
  console.log(Title);
  return (
    <div className="grid grid-cols-card gap-2">
      {Poster === "N/A" ? (
        <img
          src={`https://via.placeholder.com/256x384?text=${Title}`}
          alt="Poster"
        />
      ) : (
        <img className="h-96 w-64" src={Poster} alt="Poster" />
      )}
      <div className="flex justify-between">
        <h3>{Title}</h3>
        <p>{Type}</p>
      </div>
    </div>
  );
}

export default Movie;
