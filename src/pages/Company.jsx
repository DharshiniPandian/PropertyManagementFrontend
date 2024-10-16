import { Box, Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import TopBar from '../components/Company/TopBar';
import Img from '../assets/prospect.png'
import ProspectProfile from '../components/Company/ProspectProfile';
import Navigator from '../components/Company/Navigator';
import QuotationDetails from '../components/Company/QuotationDetails';
import UnitDetails from '../components/Company/UnitDetails';
import QuotationSummary from '../components/Company/QuotationSummary';
import Footer from '../components/Company/Footer';

function Company() {
  return (
    <Box sx={{ height: '90vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <Box sx={{
        pl: '25px',
        pt:'25px',
        flexGrow: 1 
      }}>
        <Stack sx={{
          width: '100%',
          height: '100%',
          background: '#FFFFFF 0% 0% no-repeat padding-box',
          boxShadow: '0px 0px 16px #00000014',
          borderRadius: '12px',
        }}>
          <Box sx={{ flex: 1 }}>
          <Navigator />
          <Divider
                flexItem
                sx={{
                  borderColor: '#F5F7FA',
                  borderWidth: '1px',
                }}
              />
              </Box>
          <Box  sx={{ display: 'flex', flexDirection: 'row', flex: 10 }}>
          <Box sx={{flex: 1 }}> 
          <ProspectProfile />
              <QuotationDetails />
          </Box>
          <Box flex={2} sx={{backgroundColor:'#f6f8fa'}}> 
          <UnitDetails />
            </Box>

            <Box>  
          <QuotationSummary />
            </Box>

        </Box>
        <Box sx={{ flexShrink: 0, mb:1 }} >
        <Footer /></Box>
      </Stack>
        </Box>


      </Box >
      )
}

      export default Company

