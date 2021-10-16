import React from 'react';
import './AddNodeSidebar.css'

const onDragStart = (event, nodeType) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
};

const AddNodeSidebar = () => {
  return (
    <aside>
      <h1>Node Pocket</h1>
      <div className="description">You can drag these nodes to the pane on the left.</div>
      <h4 style={{textAlign:"center"}}>---Input Nodes---</h4>
      <div className="flowboat-node start-node" onDragStart={(event) => onDragStart(event, 'startNode')} draggable>
        <div className="pocket-node-text">File Upload</div>
      </div>
      <h4 style={{textAlign:"center"}}>---Intermediate Nodes---</h4>
      <div className="flowboat-node middle-node" onDragStart={(event) => onDragStart(event, 'middleNode')} draggable>
        <div className="pocket-node-text">Linear Regression</div>
      </div>
      <h4 style={{textAlign:"center"}}>---Result Nodes---</h4>
      <div className="flowboat-node end-node" onDragStart={(event) => onDragStart(event, 'endNode')} draggable>
        <div className="pocket-node-text">Scatter Plot</div>
      </div>
    </aside>
  );
};

export default AddNodeSidebar