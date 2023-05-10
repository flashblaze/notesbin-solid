const Editor = () => {
  return (
    <textarea
      name="note"
      class="h-[calc(100vh-64px)] w-[calc(100vw-64px)] p-2 bg-background text-white resize-none border-0 shadow-none focus:outline-0"
      spellcheck={false}
      placeholder="Start typing..."
    />
  );
};

export default Editor;
