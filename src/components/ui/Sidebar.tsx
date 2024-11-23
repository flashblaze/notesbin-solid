import { useLocation } from "@solidjs/router";
import { Button } from "./Button";
import { createEffect, createSignal } from "solid-js";
import { Icon } from "@iconify-icon/solid";
import { toast } from "solid-sonner";

type SidebarProps = {
  pending?: boolean;
};

const Sidebar = (props: SidebarProps) => {
  const location = useLocation();
  const [disableCopy, setDisableCopy] = createSignal(false);

  createEffect(() => {
    setDisableCopy(location.pathname == "/");
  });

  const copyUrl = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      toast.success("URL copied to clipboard");
    } catch (error) {
      toast.error("Error while copying URL");
      console.error(error);
    }
  };

  const copyText = () => {
    try {
      navigator.clipboard.writeText("Hello, world!");
      toast.success("Content copied to clipboard");
    } catch (error) {
      toast.error("Error while copying content");
      console.error(error);
    }
  };

  return (
    <aside class="w-16 h-[calc(100vh-64px)] flex flex-col items-center bg-zinc-950 text-white gap-4">
      <Button
        size="sm"
        disabled={props.pending || !disableCopy()}
        type="submit"
        variant="ghost"
      >
        <Icon icon="solar:file-broken" height={24} width={24} />
      </Button>
      <Button
        type="button"
        disabled={disableCopy()}
        onClick={copyUrl}
        variant="ghost"
      >
        <Icon icon="solar:link-minimalistic-2-broken" height={24} width={24} />
      </Button>
      <Button
        type="button"
        disabled={disableCopy()}
        onClick={copyText}
        variant="ghost"
      >
        <Icon icon="solar:copy-broken" height={24} width={24} />
      </Button>
    </aside>
  );
};

export default Sidebar;
