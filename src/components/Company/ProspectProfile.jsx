import React from 'react'
import { Box, Typography } from '@mui/material'
import Img from '../../assets/prospect.png'
import { Divider } from '@mui/material'

function ProspectProfile() {
  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', p:'17px' }}>
      <Typography sx={{
        textAlign: 'left',
        font: 'normal normal bold 14px/19px Nunito Sans',
        color: '#4E5A6B',
        mb: '15px'
      }}>Lead Details
      </Typography>
      <Box sx={{ m: '0px', p: '0px', display: 'flex', alignItems: 'center', gap:'10px', border: '1px solid #E4E8EE', borderRadius: '4px', height: '60px', width: '351px', p:'6px' }}>
        <Box
          sx={{
            backgroundImage: `url(${Img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            height: '90px',
            width: '45px',
            borderRadius: '4px'
          }}
        />

        {/* <img src={Img} alt='profile' height='100px' style={{margin:'0px', padding: '0px'}} /> */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '7px'}}>
          <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', margin: '0px' }}>
            <Typography sx={{
              font: 'normal normal bold 14px/19px Nunito Sans',
              letterSpacing: '-0.11px',
              color: '#091B29'
            }}>Tom Cruise</Typography>
            <Box sx={{ background: '#5078E11E 0% 0% no-repeat padding-box', borderRadius: '4px', p: '5px' }}>
              <Typography sx={{
                font: 'normal normal bold 10px/14px Nunito Sans',
                letterSpacing: '-0.08px',
                color: '#091B29'
              }}>Prospect</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <Typography sx={{ font: 'normal normal normal 12px/16px Nunito Sans', letterSpacing: '0px', color: '#4E5A6B' }}>+91 9090808012</Typography>
            <Box sx={{ background: '#CED3DD 0% 0% no-repeat padding-box', borderRadius: '50%', height: '6px', width: '6px' }}></Box>
            <Typography sx={{ font: 'normal normal normal 12px/16px Nunito Sans', letterSpacing: '0px', color: '#4E5A6B' }}>Tomcruise2515@mail.com</Typography>
          </Box>
        </Box>
      </Box>
      <Divider
        flexItem
        sx={{
          borderColor: '#F5F7FA',
          borderWidth: '1px',
          width: '369px',
          mt: '20px',
        }}
      />
    </Box>

  )
}

export default ProspectProfile