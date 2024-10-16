import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';

function QuotationSummary() {
  function createData(name, calories, fat) {
    return { name, calories, fat };
  }

  const rows = [
    createData('Total Amount', 159, 6.0),
    createData('Total Discount', 237, 9.0),
    createData('Total Refundable', 262, 16.0),
    createData('Total Tax', 356, 16.0),
  ];

  return (
    <Box sx={{ p: '17px', height: '88%' }}>
      <Typography sx={{font: 'normal normal bold 14px/19px Nunito Sans',color: '#4E5A6B', mb:2}}>Quotation Summary</Typography>
      <Box sx={{ p: '7px', backgroundColor: '#F5F7FA', height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '4px' }}>
        <TableContainer component={Paper} sx={{ flexGrow: 1, backgroundColor: '#F5F7FA', border: 'none', boxShadow: 'none' }}>
          <Table sx={{ minWidth: 410, border: 'none' }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{
                '&:nth-last-child(-n+1) td, &:nth-last-child(-n+1) th': {
                  borderBottom: '1px solid #e6eaef',
                },
              }}>
                <TableCell sx={{ font: 'normal normal bold 10px/14px Nunito Sans', color: '#98A0AC' }}>DESCRIPTION</TableCell>
                <TableCell align="right" sx={{ font: 'normal normal bold 10px/14px Nunito Sans', color: '#98A0AC' }}>QTY</TableCell>
                <TableCell align="right" sx={{ font: 'normal normal bold 10px/14px Nunito Sans', color: '#98A0AC' }}>AMOUNT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ p: '10px' }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    '&:not(:nth-last-child(-n+2)) td, &:not(:nth-last-child(-n+2)) th': {
                      borderBottom: 0,
                    },
                    '&:nth-last-child(-n+4) td, &:nth-last-child(-n+4) th': {
                      borderBottom: '1px solid #e6eaef',
                    },
                    '& td, & th': {
                      borderTop: 0,
                      borderLeft: 0,
                      borderRight: 0,
                    },
                  }}
                >
                  <TableCell component="th" scope="row" sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#4E5A6B' }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#4E5A6B' }}>{row.calories}</TableCell>
                  <TableCell align="right" sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#4E5A6B' }}>{row.fat}</TableCell>
                </TableRow>
              ))}

              
              <TableRow
                sx={{
                  '& td, & th': {
                    borderBottom: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    paddingTop: '23%',
                  },
                  '& td': {
                    borderTop: '1px solid #e6eaef', // Optional styling for the last row
                  },
                  mt:3
                }}
              >
                <TableCell component="th" scope="row" sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#091B29' }}>
                  Final Total
                </TableCell>
                <TableCell align="right" sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#091B29' }}></TableCell>
                <TableCell align="right" sx={{ font: 'normal normal bold 14px/19px Nunito Sans',color: '#091B29' }}>50.0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default QuotationSummary;
