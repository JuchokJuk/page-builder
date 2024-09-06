import { Editor, Frame, Element } from "@craftjs/core";
import { SideMenu } from "~/components/side-menu";
import { Canvas } from "~/components/canvas";
import { NodeButton } from "~/components/node/button";
import { NodeCardHeader, NodeCard, NodeCardContent, NodeCardDescription, NodeCardTitle, NodeCardFooter } from "~/components/node/card";
import { ReactIframe } from "~/components/react-iframe";
import { ControlPanel } from "~/components/control-panel";
import { RenderNode } from "~/components/render-node";
import { componentsMap } from "~/components/node/components-map";
import { NodeOneBlock, NodeTwoBlocks } from "~/components/node/layout";

export default function Index() {
  return (
    <section className="w-full h-full flex flex-col">
      <Editor
        resolver={{
          NodeButton,
          Canvas,
          NodeCardHeader,
          NodeCard,
          NodeCardContent,
          NodeCardDescription,
          NodeCardTitle,
          NodeCardFooter,
          NodeOneBlock,
          NodeTwoBlocks,
        }}
        onRender={RenderNode}
      >
        <div className="flex flex-1 relative overflow-hidden">
          <SideMenu componentsMap={componentsMap} />

          <ReactIframe title="editor iframe" className="w-full h-full">
            <Frame>
              <Element is={Canvas} id="ROOT" canvas>
                <NodeButton>Button 1</NodeButton>
                <NodeButton>Button 2</NodeButton>
                <NodeButton>Button 3</NodeButton>
                <NodeButton>Button 4</NodeButton>
              </Element>
            </Frame>
          </ReactIframe>

          <ControlPanel />
        </div>
      </Editor>
    </section>
  );
}
