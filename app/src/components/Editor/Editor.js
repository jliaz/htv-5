import React, { useState, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
} from 'react-flow-renderer';

import StartNode from '../StartNode/StartNode';
import MiddleNode from '../MiddleNode/MiddleNode';
import EndNode from '../EndNode/EndNode';

import AddNodeSidebar from '../AddNodeSidebar/AddNodeSidebar';
import PlotGraph from '../ScatterPlot/PlotGraph';
import FileUpload from '../FileUpload/FileUpload';

const initialElements = [
  {
    id: '1',
    type: 'startNode',
    data: { label: 'File',
            body: <FileUpload/> },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const Editor = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    // const newNode = {
    //   id: getId(),
    //   type,
    //   position,
    //   data: { label: `${type} node` },
    // };
    let newNode = null
    if (type === 'fileUploadNode') {
      newNode = {
        id: getId(),
        type: 'startNode',
        position,
        data: { label: 'File',
                body: <FileUpload/> },
      };
    } else if (type === 'middleNode') {
      newNode = {
        id: getId(),
        type,
        position,
        data: { label: 'Linear Regression Node',
                body: <p>Configure your linear regression model here</p> },
      };
    } else {
      newNode = {
        id: getId(),
        type,
        position,
        data: { label: 'Scatter Plot Node',
                body: <PlotGraph /> },
      };
    }

    setElements((es) => es.concat(newNode));
  };

  const nodeTypes = {
    startNode: StartNode,
    middleNode: MiddleNode,
    endNode: EndNode,
  };

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <AddNodeSidebar />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
          >
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Editor;