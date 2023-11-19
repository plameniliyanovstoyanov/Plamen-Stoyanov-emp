import React from 'react'
import { useSelector } from 'react-redux'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import LoadingSpinner from './LoadingSpinner'

const CsvTableViewer = () => {
  const { data, error, loading } = useSelector(state => state.csvData)

  if (error) {
    return <div>Error: {error}</div>
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (data) {
    return (
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#1976d2' }}>
              <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Employee #ID</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Employee #ID</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Project ID</TableCell>
              <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Days Worked</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                <TableCell component="th" scope="row">
                  {item.EmpID_1}
                </TableCell>
                <TableCell>{item.EmpID_2}</TableCell>
                <TableCell>{item.ProjectID}</TableCell>
                <TableCell>{item.DaysWorked}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};

export default CsvTableViewer
