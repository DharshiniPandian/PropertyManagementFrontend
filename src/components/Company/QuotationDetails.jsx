import { Box, Typography } from '@mui/material'
import React from 'react'

function QuotationDetails() {
  return (
   <Box sx={{pl:'17px'}}>
    <Typography sx={{font: 'normal normal bold 14px/19px Nunito Sans', letterSpacing: '0px', color: '#4E5A6B', mb:'12px', height:'100%'}}>Quotation Details</Typography>
    <Box sx={{display: 'flex', justifyContent: 'space-between', width:'351px'}}>
        <Box>
            <Typography sx={{font: 'normal normal 600 8px/11px Nunito Sans', color: '#98A0AC'}}>LEASE START DATE</Typography>
            <Typography sx={{font: 'normal normal 600 12px/16px Nunito Sans', color: '#091B29', mt:'5px'}}>30 Jan 22</Typography>
        </Box>
        <Box>
            <Typography sx={{font: 'normal normal 600 8px/11px Nunito Sans', color: '#98A0AC'}}>LEASE END DATE</Typography>
            <Typography sx={{font: 'normal normal 600 12px/16px Nunito Sans', color: '#091B29', mt:'5px'}}>30 Jan 23</Typography>
        </Box>
        <Box>
            <Typography sx={{font: 'normal normal 600 8px/11px Nunito Sans', color: '#98A0AC'}}>RENT START DATE</Typography>
            <Typography sx={{font: 'normal normal 600 12px/16px Nunito Sans', color: '#091B29', mt:'5px'}}>30 Jan 23</Typography>
        </Box>
    </Box>
    <Box sx={{mt:'20px'}}>

            <Typography sx={{font: 'normal normal 600 8px/11px Nunito Sans', color: '#98A0AC'}}>RENT START DATE</Typography>
            <Typography sx={{font: 'normal normal 600 12px/16px Nunito Sans', color: '#091B29', mt:'5px', display:'flex', alignItems:'center'}}>30 Jan 23<Box sx={{color: '#98A0AC'}}>(Beginning)</Box></Typography>

    </Box>
   </Box>
  )
}

export default QuotationDetails