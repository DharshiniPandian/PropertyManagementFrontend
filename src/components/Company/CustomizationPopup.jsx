import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { InputAdornment, TextField } from '@mui/material';
import axios from 'axios'
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function CustomizationPopup({ id, setValue }) {
  const [activeRevenue, setActiveRevenue] = useState(null)
  const [activeComponent, setActiveComponent] = useState(null)
  const [revenue, setRevenue] = useState([])
  const [component, setComponent] = useState([])
  const fetchrevenue = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/pricing/revenue/${id}`)
      setRevenue(response.data)
      console.log(response.data)
    } catch (error) {
      console.log("error fetching the data", error);
    }
  }

  const fetchcomponent = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/pricing/basedon/${id}`)
      setComponent(response.data)
      console.log(response.data)
    } catch (error) {
      console.log("error fetching the data", error);
    }
  }

  useEffect(() => {
    fetchrevenue();
    fetchcomponent()
  }, [])
  return (
    <Box>
      <Box sx={{ ml: '22px', mr: '22px' , mt:1}}>
        <Box sx={{ display: 'flex',flexDirection: revenue.length===3? 'row' : 'column', alignItems: revenue.length===3?'center':'', justifyContent: 'space-between', width:'100%' }}>
          <Box sx={{ mb:1}} >
            <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>Revenue Type</Typography>
            <Box sx={{ display:'flex', alignItems: 'center', gap: '7px', flexDirection: 'row' }}>
              {revenue.map((rev, index) => (
                <Button sx={{ background: activeRevenue === rev.revenue.revenue_type_name ? '#5078E1 0% 0% no-repeat padding-box' : '', borderRadius: '4px', height: '40px', font: 'normal normal 600 14px/19px Nunito Sans', border: activeRevenue === rev.revenue.revenue_type_name ? '' : '1px solid #E4E8EE', color: activeRevenue === rev.revenue.revenue_type_name ? 'color: #FFFFFF' : '#4E5A6B', mb: 2, padding: '6px', textTransform:'none' }} variant={activeRevenue === rev.revenue.revenue_type_name ? 'contained' : 'outlined'} onClick={() => setActiveRevenue(rev.revenue.revenue_type_name)}>{rev.revenue.revenue_type_name}</Button>
              ))}
            </Box>
          </Box>
          <Box  sx={{ mb:1}}>
            <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>Pricing Component</Typography>
            <FormControl
              sx={{
                m: 0,
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#E4E8EE',
                  },
                },
                borderRadius: '8px',
                width: '210px',
                height: '40px',
                font: 'normal normal 600 14px/19px Nunito Sans',
                color: '#091B29',
                mb: 2
              }}
            >
              <Select
                value='Pricing Component'
                inputProps={{ 'aria-label': 'Without label' }}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  height: '40px',
                  font: 'normal normal 600 14px/19px Nunito Sans',
                  color: '#091B29',
                  '& .MuiSelect-select': {
                    font: 'normal normal 600 14px/19px Nunito Sans',
                    color: '#091B29',
                  },
                }}
              >
                <MenuItem
                  value="Pricing Component"
                  sx={{
                    font: 'normal normal 600 14px/19px Nunito Sans',
                    color: '#091B29'
                  }}
                >
                  Pricing Component
                </MenuItem>
              </Select>
            </FormControl>

          </Box>
        </Box>

        <Box sx={{display: 'flex', alignItems:'center', gap:'36px',mb:1 }}> 
        <Box>
          <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>Tax Group For Pricing Component</Typography>
          <FormControl
            sx={{
              m: 0,
              background: '#FFFFFF 0% 0% no-repeat padding-box',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E4E8EE',
                },
              },
              borderRadius: '8px',
              width: '210px',
              height: '40px',
              font: 'normal normal 600 14px/19px Nunito Sans',
              color: '#091B29',
              mb: 2
            }}
          >
            <Select
              value='GST'
              defaultValue='GST'
              inputProps={{ 'aria-label': 'Without label' }}
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                height: '40px',
                font: 'normal normal 600 14px/19px Nunito Sans',
                color: '#091B29',
                '& .MuiSelect-select': {
                  font: 'normal normal 600 14px/19px Nunito Sans',
                  color: '#091B29',
                },
              }}
            >
              <MenuItem value="GST">GST</MenuItem>
            </Select>
          </FormControl>
          </Box>
          <Box>
            <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>Component Based On</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px', flexDirection: 'row' }}>
              {component.map((comp, index) => (
                <Button sx={{ background: activeComponent === comp.component.component_name ? '#5078E1 0% 0% no-repeat padding-box' : '', borderRadius: '4px', height: '40px', font: 'normal normal 600 14px/19px Nunito Sans', border: activeComponent === comp.component.component_name ? '' : '1px solid #E4E8EE', color: activeComponent === comp.component.component_name ? '#FFFFFF' : '#4E5A6B', mb: 2, padding: '6px', textTransform:'none' }} variant={activeComponent === comp.component.component_name ? 'contained' : 'outlined'} onClick={() => setActiveComponent(comp.component.component_name)}>{comp.component.component_name}</Button>
              ))}
            </Box>
          </Box>
        </Box>
        <Box>
        <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>UOM</Typography>
        <TextField 
  id="outlined-basic" 
  value='200'
  variant="outlined" 
  InputProps={{
    endAdornment: (
      <InputAdornment position="end" sx={{font: 'normal normal 600 14px/19px Nunito Sans', color: '#98A0AC'}}>
        SAR/ Total
      </InputAdornment>
    ),
  }}
  sx={{
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: '4px',
    width: '100%',

    mb: 2,
    mt:0,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E4E8EE',
        borderRadius: '4px',
        height:'40px',
        alignSelf:'center',
        padding:'6px'
      },
    },
    '& .MuiInputBase-input': {
      font: 'normal normal 600 14px/19px Nunito Sans', // Font style for the input text
      color: '#091B29', // Text colory
    },
    '& .MuiInputLabel-root': {
      font: 'normal normal 600 14px/19px Nunito Sans', // Font style for the label
      color: '#091B29', // Label color
    },
  }}
/>


        </Box>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', mb:2, mt:1}}>
         <Button variant='outlined' sx={{borderRadius:'4px', height: '40px', font: 'normal normal 600 14px/19px Nunito Sans', color:'#4E5A6B', textTransform: 'none', border:'1px solid #E4E8EE', cursor:'pointer'}} onClick={() => setValue(0)}>Back</Button>
         <Button variant='contained' sx={{borderRadius:'4px', height: '40px', font: 'normal normal 600 14px/19px Nunito Sans', textTransform:'none', background:'#5078E1 0% 0% no-repeat padding-box', cursor:'pointer'}} >Create Pricing Component</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default CustomizationPopup