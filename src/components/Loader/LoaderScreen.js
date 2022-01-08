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

const LoaderScreen = (props) => {
  return (
    <div className="LoaderScreen">
      <Loader />
    </div>
  );
};

export { LoaderScreen };
