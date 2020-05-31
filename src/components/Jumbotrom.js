import React from "react";
import styles from "./jumbotrom.module.css";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";

function Jumbotrom({ moviePoster }) {
  return (
    <div
      style={{
        backgroundImage: moviePoster
          ? `url(${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${moviePoster.backdrop_path})`
          : null,
      }}
      className={`${styles.jumbt} jumbotron rounded-0`}
    >
      <div className="container">
        {moviePoster && (
          <>
            <h1 className="mb-3">{moviePoster.title}</h1>
            <p className="lead">{moviePoster.overview}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Jumbotrom;
