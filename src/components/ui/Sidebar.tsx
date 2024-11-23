import { Button } from "./Button";

type SidebarProps = {
  pending?: boolean;
};

const Sidebar = (props: SidebarProps) => {
  return (
    <aside class="w-16 h-[calc(100vh-64px)] flex flex-col items-center bg-zinc-950 text-white">
      <Button size="sm" disabled={props.pending} type="submit">
        {props.pending ? "Saving..." : "Save"}
      </Button>
    </aside>
  );
};

export default Sidebar;
