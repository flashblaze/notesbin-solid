const Editor = () => {
  return (
    <section>
      <textarea
        name="note"
        class="w-[calc(100vw-64px)] h-[calc(100vh-64px)] p-2 bg-background text-white resize-none border-0 shadow-none"
        spellcheck={false}
        placeholder="Start typing..."
      />
    </section>
  );
};

export default Editor;
