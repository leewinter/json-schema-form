interface TreeViewWidgetProps {
    id?: string;
    value?: string;
    onChange: (nodeId: string) => void;
}
export default function TreeViewWidget({ id, value, onChange }: TreeViewWidgetProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
