import React from 'react';
import MiddleNode from './MiddleNode';
import ReactFlow from 'react-flow-renderer';

export default {
  component: MiddleNode,
  title: 'Components/Node/Middle',
}

const elements = [
    {
        id: '2',
        data: {
            label: 'Source',
        },
        position: {x: 10, y: 50},
    },
    {
        id: '1',
        type: 'middleNode',
        targetPosition: 'left',
        data: {
            label: 'Graph',
            body: <p>Hello this is the body of the node</p>,
            deleteCallback: () => {console.log("hello")}
        },
        position: {x: 100, y: 100},
    }
]



const nodeTypes = {
    middleNode: MiddleNode,
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
