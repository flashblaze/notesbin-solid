import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import { ColorModeProvider } from "@kobalte/core";

import Layout from "./components/ui/Layout";
import { Toaster } from "./components/ui/Sonner";

import "@fontsource/inter";
import "@fontsource-variable/jetbrains-mono";
import "./app.css";

const App = () => (
  <Router
    root={(props) => (
      <MetaProvider>
        <ColorModeProvider initialColorMode="dark">
          <Suspense>
            <Layout>{props.children}</Layout>
            <Toaster />
          </Suspense>
        </ColorModeProvider>
      </MetaProvider>
    )}
  >
    <FileRoutes />
  </Router>
);

export default App;
