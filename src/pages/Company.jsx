import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import TopBar from '../components/Company/TopBar';
import Img from '../assets/prospect.png'

function Company() {
  return (
    <Box>
      <TopBar />
      <Box sx={{
        width: '1408px',
        height: '586px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 0px 16px #00000014',
        borderRadius: '12px',
        m: '25px'
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', p: 3 }}>
          <Typography sx={{
            textAlign: 'left',
            font: 'normal normal bold 14px/19px Nunito Sans',
            color: '#4E5A6B',
            mb: 3
          }}>Lead Details
          </Typography>
          <Box
            sx={{
              background: '#FFFFFF',
              border: '1px solid #E4E8EE',
              borderRadius: '4px',
              width: '351px',
              height: '60px',
              display: 'flex',
              p: 0, m: 0
            }}
          >
            <Box sx={{ p: 0, m: 0 }}>
              <img src={Img} alt="profile" style={{ padding: '0px', margin: '0px' }} />
            </Box>
            <Box>
              <Typography sx={{
                font: 'normal normal bold 14px/19px Nunito Sans',
                letterSpacing: '-0.11px',
                color: '#091B29',
                display: 'flex',
                alignItems: 'center'
              }}>Tom Cruise <Box sx={{
                background: '#5078E11E 0% 0% no-repeat padding-box',
                borderRadius: '4px', p: 1, ml: 1
              }}><Typography sx={{
                font: 'normal normal bold 10px/14px Nunito Sans',
                letterSpacing: '-0.08px',
                color: '#091B29'
              }}>Prospect</Typography></Box></Typography>
            </Box>

          </Box>
        </Box>

      </Box>

    </Box>
  )
}

export default Company