import React from "react";

// Components
import { Loader } from "./Loader";

// Styles
import "../../css/LoadingScreen.css";

const phrases = [
  {
    text: "En política, la estupidez no es una desventaja.",
    autor: "Napoleón Bonaparte",
  },
  {
    text: "Divide y venceras",
    autor: "Desconocido",
  },
  {
    text: "Las espadas más fuertes en fuego se forjan",
    autor: "Desconocido",
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
