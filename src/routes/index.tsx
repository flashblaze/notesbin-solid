import { Title } from "@solidjs/meta";

import Editor from "~/components/ui/Editor";
import Header from "~/components/ui/Header";
import Sidebar from "~/components/ui/Sidebar";

const Home = () => {
  return (
    <>
      <Title>notesbin</Title>
      <main class="w-full space-y-2">
        <section class="w-full flex flex-col">
          <Header />
          <div class="flex">
            <Sidebar />
            <Editor />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
