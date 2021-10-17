import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Papa from 'papaparse';
import { DataGrid } from '@mui/x-data-grid';
// import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import "./FileUpload.css";

const ACCEPTED_FILE_FORMATS = ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
const MAX_ROWS = 5;


function FileUpload(props) {
    const [ fileData, setFileData ] = useState();
    const [ gridRows, setGridRows ] = useState([]);
    const [ gridColumns, setGridColumns ] = useState([]);
    const inputRef = useRef();

    const readFile = (newFile) => {
      Papa.parse(newFile, {
        complete: (result) => {setFileData(result)},
        header: true
      })
    }

    useEffect(() => {
      if (fileData !== undefined) {
        const numRows = fileData.data.length > MAX_ROWS ? MAX_ROWS : fileData.data.length;
        const newCols = [];
        for (var i = 0; i < fileData.meta.fields.length; i++) {
          newCols.push({field: fileData.meta.fields[i], headerName: fileData.meta.fields[i]});
        }
        const newRows = [];
        for (var j = 1; j < numRows; j++) {
          const newRow = fileData.data[j];
          newRows.push({...newRow,id: j});
        }
        setGridColumns(newCols);
        setGridRows(newRows);
      }
      localStorage.setItem(`${props.nodeId}_data`, JSON.stringify(fileData));
    }, [fileData])

    return (
      <Grid>
          { fileData === undefined ? 
          <>
          <div style={{}}>
            <Box style={{marginBottom:'10px'}}>
              Please upload a CSV file.
            </Box>
            <input
            style={{ display: "none" }}
            id="contained-button-file"
            type="file"
            accept={ACCEPTED_FILE_FORMATS}
            ref={inputRef}
            onChange={() => {readFile(inputRef.current.files[0])}} />
            <label htmlFor="contained-button-file" style={{top:'50%'}}>
              <Button variant="contained" style={{backgroundColor: '#6FEF8D', display: 'flex', alignSelf:'center', borderRadius:"5px"}} component="span">
                Upload
              </Button>
            </label> 
          </div>
            
          </> : 
          <>
            <Box>
              Uploaded successful.
            </Box>
            <Button onClick={()=>{}}>View File</Button>
            <div style={{ 
                height: 300, 
                width: '100%', 
                backgroundColor: '#21415E', 
                borderRadius:"3px",
                }}>
              <DataGrid rows={gridRows} columns={gridColumns}/>
            </div>
          </>
          }
          
      </Grid>
    );
  }
  
  export default FileUpload;
  