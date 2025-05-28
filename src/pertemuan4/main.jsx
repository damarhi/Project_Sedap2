import { createRoot } from "react-dom/client";
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import FrameworkListSearchFilterLatihan from "./FrameworkListSearchFilterLatihan";
import ResponsiveDesign from "./ResponsiveDesign";
import './tailwind.css';

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            <FrameworkListSearchFilterLatihan/>
            {/* <ResponsiveDesign/> */}

        </div>
    )