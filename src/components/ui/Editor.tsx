const Editor = () => {
  return (
    <textarea
      name="note"
      class="h-[calc(100vh-64px)] w-[calc(100vw-64px)] p-2 bg-zinc-800 text-white resize-none border-0 shadow-none focus:outline-0 focus:ring-0 focus:border-0 font-mono !mt-0"
      spellcheck={false}
      placeholder="Start typing..."
    />
  );
};

export default Editor;
