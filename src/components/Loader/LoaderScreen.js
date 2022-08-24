import React from "react";

// Components
import { Loader } from "./Loader";

// Styles
import "../../css/LoadingScreen.css";

const phrases = [
  {
    text: "In politics, stupidity is not a handicap.",
    autor: "Napoleon Bonaparte",
  },
  {
    text: "Divide and Conquer",
    autor: "Unknown",
  },
];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const selectPhrase = () => {
  const randomNumber = getRandomInt(phrases.length - 1);
  return phrases[randomNumber];
};

const LoaderScreen = (props) => {
  const phrase = selectPhrase();
  return (
    <div className="LoaderScreen">
      <div className="phrases">
        "{phrase.text}"
        <div className="author">
          <small>-{phrase.autor}</small>
        </div>
      </div>
      <div className="loader">
        <Loader />
      </div>
    </div>
  );
};

export { LoaderScreen };
