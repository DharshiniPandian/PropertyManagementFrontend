import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

function QuotationSummary() {
   const overAllTotal = useSelector((s) => s.quote.total)
   const quantity = useSelector((s) => s.quote.quoted_units.length)

   const units= useSelector((s) => s.quote.quoted_units)

   const unitTotal = units.reduce((currentTotal, item) => {
    return currentTotal+ parseFloat(item.price)  + parseFloat(item.addonPrice || 0) + parseFloat(item.componentPrice || 0) 
   },0)

  const rows = [
    { name: 'Total Amount', qty: quantity, amount: unitTotal },
    { name: 'Total Discount', qty: 0, amount: '0' },
    { name: 'Total Refundable', qty: 0, amount: '0' },
    { name: 'Total Tax', qty: "0%", amount: '0' },
  ];

  return (
    <Box sx={{ p: '17px', height: '87%' }}>
      <Typography sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#4E5A6B', mb: 2 }}>
        Quotation Summary
      </Typography>
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
              {rows.map((row, index) => (
                <TableRow
                  key={index}
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
                  <TableCell align="right" sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#091B29' }}>{row.qty}</TableCell>
                  <TableCell align="right" sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#091B29' }}>${row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Divider and Quote Amount Section */}
        <Box>
          <Divider
            flexItem
            sx={{
              borderColor: '#E4E8EE',
              borderWidth: '1px',
            }}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '17px' }}>
            <Typography sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#091B29' }}>Quote Amount</Typography>
            <Typography sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#091B29' }}>${overAllTotal}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default QuotationSummary;
