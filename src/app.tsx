import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";

import "@fontsource/inter";
import "@fontsource-variable/jetbrains-mono";
import "./app.css";
import Layout from "./components/ui/Layout";

const App = () => (
  <Router
    root={(props) => (
      <MetaProvider>
        <Suspense>
          <Layout>{props.children}</Layout>
        </Suspense>
      </MetaProvider>
    )}
  >
    <FileRoutes />
  </Router>
);

export default App;
