import { useEditor } from "@craftjs/core";
import { Redo, Undo } from "lucide-react";
import React from "react";
import { Save } from "./save";

export const ControlPanel = () => {
  const { active, related } = useEditor((state, query) => {
    // TODO: handle multiple selected elements
    const currentlySelectedNodeId = query.getEvent("selected").first();
    return {
      active: currentlySelectedNodeId,
      related: currentlySelectedNodeId && state.nodes[currentlySelectedNodeId].related,
    };
  });

  const { actions } = useEditor((_state, query) => ({
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  return (
    <div className="w-80 border-l h-auto">
      <div className="py-2 px-4 border-b flex items-center justify-between">
        <Save />
        <div className="flex gap-1">
          <div className="w-8">
            <Undo
              size={24}
              strokeWidth={1.75}
              className="text-gray-500 hover:text-primary transition duration-300"
              onClick={(event) => {
                actions.history.undo();
              }}
            />
          </div>
          <div className="w-8">
            <Redo
              size={24}
              strokeWidth={1.75}
              className="text-gray-500 hover:text-primary transition duration-300"
              onClick={(event) => {
                actions.history.redo();
              }}
            />
          </div>
        </div>
      </div>
      {active && related.toolbar && React.createElement(related.toolbar)}
    </div>
  );
};
