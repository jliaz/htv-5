import React, { useState, useRef, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
} from 'react-flow-renderer';

import StartNode from '../StartNode/StartNode';
import MiddleNode from '../MiddleNode/MiddleNode';
import EndNode from '../EndNode/EndNode';

// import AddNodeSidebar from '../AddNodeSidebar/AddNodeSidebar';
import PlotGraph from '../ScatterPlot/PlotGraph';
import FileUpload from '../FileUpload/FileUpload';
import "./Editor.css";

const initialElements = [
  {
    id: '1',
    type: 'startNode',
    data: { label: 'File',
            body: <FileUpload nodeId="1"/> },
    position: { x: 380, y: 100 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const Editor = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params) => {
    console.log(params);
    var index = -1;
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].id === params.target) {
        index = i;
        break;
      }
    }
    if (elements[index].type === 'endNode') {
      elements[index].data.body = <PlotGraph nodeId={params.source}/> ;
      console.log(elements[index]);
      setElements(addEdge(params, elements));
    } else {
      setElements((els) => addEdge(params, els));
    }
    
  }
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };


  useEffect(() => {
    console.log("elements have change", elements);
    localStorage.setItem("nodes", JSON.stringify(elements));
  }, [elements])

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
    const id = getId();
    if (type === 'fileUploadNode') {
      newNode = {
        id,
        type: 'startNode',
        position,
        data: { label: 'File',
                body: <FileUpload nodeId={id}/> },
      };
    } else if (type === 'middleNode') {
      newNode = {
        id,
        type,
        position,
        data: { label: 'Linear Regression Node',
                body: <p>Configure your linear regression model here</p> },
      };
    } else {
      newNode = {
        id,
        type,
        position,
        data: { label: 'Scatter Plot Node',
                body: <PlotGraph nodeId=""/> },
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
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            defaultZoom={1}
          >
            <Controls/>
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Editor;