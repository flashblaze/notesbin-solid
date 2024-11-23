import { useSubmission } from "@solidjs/router";
import { JSX } from "solid-js";
import { createNote } from "~/lib";
import Header from "./Header";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = (props: LayoutProps) => {
  const submission = useSubmission(createNote);

  return (
    <main class="w-full flex flex-col">
      <form action={createNote} method="post">
        <Header />
        <div class="flex">
          <Sidebar pending={submission.pending} />
          {props.children}
        </div>
      </form>
    </main>
  );
};

export default Layout;
