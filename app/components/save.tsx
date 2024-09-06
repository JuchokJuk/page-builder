import { useEditor } from "@craftjs/core";
import { Button } from "./ui/button";

export function Save() {
  const { query } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  function saveFile() {
    const json = query.serialize();
    console.log(json);
  }

  return <Button onClick={saveFile}>Save</Button>;
}
