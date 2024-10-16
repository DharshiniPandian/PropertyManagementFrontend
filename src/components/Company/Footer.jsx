import { Box, Button } from '@mui/material'
import React from 'react'

function Footer() {
  return (
   <Box sx={{p:'17px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Box>
        <Button variant='outline' sx={{font: 'normal normal bold 14px/19px Nunito Sans', color: '#091B29', border: '1px solid #E4E8EE',borderRadius: '8px', textTransform:'none', height:'40px'}}>Previous</Button>
      </Box>
      <Box sx={{display:'flex', gap:'15px', alignItems:'center'}}>
      <Button variant='outline' sx={{font: 'normal normal bold 14px/19px Nunito Sans', color: '#091B29', border: '1px solid #E4E8EE',borderRadius: '8px', textTransform:'none', height:'40px'}}>Cancel</Button>
      <Button variant='contained' sx={{font: 'normal normal bold 14px/19px Nunito Sans',color: '#FFFFFF',background: '#5078E1 0% 0% no-repeat padding-box',borderRadius: '8px', textTransform:'none', height:'40px'}}>Create Quotation</Button>
      </Box>
   </Box>
  )
}

export default Footer