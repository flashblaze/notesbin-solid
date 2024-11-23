import { A } from "solid-start";

const Header = () => {
  return (
    <header class="bg-header w-full text-white pl-4 items-center h-16 flex">
      <A href="/">
        <span class="ml-12 text-xl">notesbin</span>
      </A>
    </header>
  );
};

export default Header;
