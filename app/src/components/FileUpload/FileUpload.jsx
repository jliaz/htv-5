import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Papa from 'papaparse';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const ACCEPTED_FILE_FORMATS = ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
const MAX_ROWS = 5;

function FileUpload() {
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
      console.log("fileDAATA", fileData);
      if (fileData !== undefined) {
        const numRows = fileData.data.length > MAX_ROWS ? MAX_ROWS : fileData.data.length;
        const newCols = [];
        for (var i = 0; i < fileData.meta.fields.length; i++) {
          newCols.push({field: fileData.meta.fields[i], headerName: fileData.meta.fields[i]});
        }
        const newRows = [];
        for (var i = 1; i < numRows; i++) {
          const newRow = fileData.data[i];
          newRows.push({...newRow,id: i});
        }
        setGridColumns(newCols);
        setGridRows(newRows);
      }
    }, [fileData])

    return (
      <Grid>
          { fileData === undefined ? 
          <>
          <div style={{height: 300}}>
            <Box>
              Please upload a CSV file.
            </Box>
            <input
            style={{ display: "none" }}
            id="contained-button-file"
            type="file"
            accept={ACCEPTED_FILE_FORMATS}
            ref={inputRef}
            onChange={() => {readFile(inputRef.current.files[0])}} />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
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
                backgroundColor: '#6FEF8D', 
                borderLeft: '6px solid #6FEF8D', 
                borderRadius:"3px",
                
                }}>
              <DataGrid rows={gridRows} columns={gridColumns} sx={{color:'white'}}/>
            </div>
          </>
          }
          
      </Grid>
    );
  }
  
  export default FileUpload;
  