import React from 'react';
import StartNode from './StartNode';
import ReactFlow from 'react-flow-renderer';
import FileUpload from '../FileUpload/FileUpload';

export default {
  component: StartNode,
  title: 'Components/Node/Start',
}
const defaultData = {
  deleteCallback: () => {console.log("hello")}
}


const elements = [
    {
        id: '1',
        type: 'startNode',
        data: {
            label: 'File',
            body: <FileUpload/>,
            deleteCallback: () => {console.log("hello")}
        },
        position: {x: 100, y: 100},
    }
]



const nodeTypes = {
    startNode: StartNode,
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
