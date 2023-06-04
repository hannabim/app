import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import Weather from "./Weather";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export default function App() {
  root.render(
    <div className="App">
      <div className="container">
        <StrictMode>
          <Weather />
          <footer>
            <a
              href="https://github.com/hannabim/app"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced code{" "}
            </a>
          </footer>
        </StrictMode>
      </div>
    </div>
  );
}

