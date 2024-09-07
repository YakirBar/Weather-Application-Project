import { Core } from "./core";

import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(<Core />);