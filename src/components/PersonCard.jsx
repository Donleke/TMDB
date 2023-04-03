import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export default function PersonCard({ id, name, profile_path }) {
  return (
    <div className="mediaCard">
      <div className="cast">
        <Link to={`/person/${id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            className="img-fluid"
            alt={name}
            title={name}
            loading="lazy"
          />
        </Link>
        <Link to={`/person/${id}`}>
          <p className="text-white small fw-bold mt-2 px-1">{name}</p>
        </Link>
      </div>
    </div>
  );
}
