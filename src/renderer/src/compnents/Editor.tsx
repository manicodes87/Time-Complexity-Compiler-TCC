import { createEditor } from "../utils/CodeEditor";
import { useEffect, useRef } from "react";

export default function Editor() {
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parentRef.current) return;

    const editor = createEditor(parentRef.current);

    return () => {
      editor.destroy();
    };
  }, []);

  return <div ref={parentRef} className="h-full w-full rounded-2xl"></div>;
}
