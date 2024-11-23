import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "@fontsource/inter";
import "@fontsource-variable/jetbrains-mono";
import "./app.css";
import { MetaProvider } from "@solidjs/meta";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
