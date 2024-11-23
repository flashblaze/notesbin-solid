import { createSignal } from "solid-js";

const [hasContent, setHasContent] = createSignal(false);
const [note, setNote] = createSignal("");

export { hasContent, setHasContent, note, setNote };
