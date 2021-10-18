import React from 'react';
import EndNode from './EndNode';
import ReactFlow from 'react-flow-renderer';

export default {
  component: EndNode,
  title: 'Components/Node/End',
}
const defaultData = {
  deleteCallback: () => {console.log("hello")}
}


const elements = [
    {
        id: '1',
        type: 'endNode',
        data: {
            label: 'Result',
            body: <p>Hello this is the body of the node</p>,
            deleteCallback: () => {console.log("hello")}
        },
        position: {x: 100, y: 100},
    }
]



const nodeTypes = {
    endNode: EndNode,
  };

export const Default = () => 
<div style={{height: 900}}>
    <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        snapToGrid={true}
        defaultZoom={1.5}
    >
    </ReactFlow>
</div>
