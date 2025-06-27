import React from 'react';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

interface TreeViewWidgetProps {
  id?: string;
  value?: string;
  onChange: (nodeId: string) => void;
}

export default function TreeViewWidget({ id, value, onChange }: TreeViewWidgetProps) {
  const handleSelect = (_event: React.SyntheticEvent, nodeId: string) => {
    onChange(nodeId); // sets selected nodeId into form data
  };

  return (
    <SimpleTreeView id={id} onItemClick={handleSelect} selectedItems={value}>
      <TreeItem itemId="1" label="Applications">
        <TreeItem itemId="2" label="Calendar" />
        <TreeItem itemId="3" label="Chrome" />
        <TreeItem itemId="4" label="WebStorm" />
      </TreeItem>
      <TreeItem itemId="5" label="Documents">
        <TreeItem itemId="6" label="MUI" />
        <TreeItem itemId="7" label="RJSF" />
      </TreeItem>
    </SimpleTreeView>
  );
}
