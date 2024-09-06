import { useNode } from "@craftjs/core";

import React from "react";

type CanvasProps = {
  children: React.ReactNode;
};

export const Canvas = ({ children }: CanvasProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div className="w-full h-full flex justify-center">
      <div className={`w-full flex flex-col h-full border rounded-sm`}>
        <div
          className="w-full overflow-auto max-h-full flex-1 bg-white rounded-b-lg"
          ref={(ref) => {
            if (ref) {
              connect(drag(ref));
            }
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Canvas.craft = {
  displayName: "div",
  props: {
    className: "w-full h-full",
  },
};
