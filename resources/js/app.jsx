import "./bootstrap";
import "../css/app.css";

import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("app")).render(
    <RecoilRoot>
        <Home />
    </RecoilRoot>
);
