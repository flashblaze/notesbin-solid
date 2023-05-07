const Editor = () => {
  return (
    <section>
      <textarea
        name="note"
        class="w-[calc(100vw-64px)] h-[calc(100vh-65px)] focus:outline-none p-2 bg-background text-white"
        placeholder="Start typing..."
      />
    </section>
  );
};

export default Editor;
