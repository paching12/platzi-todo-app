import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import reportWebVitals from './reportWebVitals';

function App(props) {
  return (
    <h1>
      {props.saludo}, {props.nombre}!
    </h1>
  );
}

function withSaludo(saludo) {
  return function WrappedComponent(WrappedComponent) {
    return function ComponenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </React.Fragment>
      );
    };
  };
}

const apiSaludo = withSaludo("Wenitas")(App);

ReactDOM.render(
  <React.StrictMode>
    <apiSaludo nombre="Juanito" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
