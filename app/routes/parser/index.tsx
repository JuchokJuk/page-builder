import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { document } from "../../assets/document";
import { Button } from "~/components/ui/button";

const handlers = {
  Card: ({ children, ...props }) => <Card {...props}>{children}</Card>,
  CardHeader: ({ children, ...props }) => <CardHeader {...props}>{children}</CardHeader>,
  CardTitle: ({ children, ...props }) => <CardTitle {...props}>{children}</CardTitle>,
  CardDescription: ({ children, ...props }) => <CardDescription {...props}>{children}</CardDescription>,
  CardContent: ({ children, ...props }) => <CardContent {...props}>{children}</CardContent>,
  CardFooter: ({ children, ...props }) => <CardFooter {...props}>{children}</CardFooter>,
  Button: ({ children, ...props }) => <Button {...props}>{children}</Button>,
  div: ({ children, ...props }) => <div {...props}>{children}</div>,
};

function RenderNode({ node }: { node: any }) {
  const Handler = handlers[node.displayName];

  const { children, ...props } = node.props;

  return (
    <div>
      <Handler {...props}>
        {children}
        {node.nodes.map((id: string) => (
          <RenderNode key={id} node={document[id]} />
        ))}

        {Object.keys(node.linkedNodes).map((id: string) => (
          <RenderNode key={id} node={document[node.linkedNodes[id]]} />
        ))}
      </Handler>
    </div>
  );
}

export default function Index() {
  return (
    <>
      {document.ROOT.nodes.map((id: string) => (
        <RenderNode key={id} node={document[id]} />
      ))}
    </>
  );
}
