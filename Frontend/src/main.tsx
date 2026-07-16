import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./common/theme/index.css";
import { SidebarProvider } from "./common/context/SidebarContext";
import App from "./App";
import RoutePath from "./routes/routepath";

createRoot(document.getElementById("root")!).render(
    <StrictMode>

    <SidebarProvider>

        <BrowserRouter>

            <RoutePath/>

        </BrowserRouter>

    </SidebarProvider>

</StrictMode>
);