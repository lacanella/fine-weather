import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://fantastic-raindrop-075015.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Karina Agakhanova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/lacanella/fine-weather"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
