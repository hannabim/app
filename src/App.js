import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchEngine from "./SearchEngine";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export default function App() {
  root.render(
    <StrictMode>
      <SearchEngine />
    <footer>
      <a href="https://github.com/hannabim/app" target="_blank" rel="noreferrer">Open-sourced code </a>
    </footer>
    </StrictMode>
  );
}
