import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Select from '@mui/material/Select';

function TopBar() {
    const [selectedValue, setSelectedValue] = useState('casagrand');

    const handleChange = (e) => {
      const value = e.target.value;
      setSelectedValue(value);
  
      if (value === "goal") {
        setsidecondition(true);
        setSelectedValue("new")
      } else {
        setsidecondition(false);
      }
    };
  return (
    <Box>
    <Box sx={{ background: 'white', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '44px' }}>
      <Box sx={{ display: 'flex', marginLeft: '15px' }}>
        <ChevronLeftIcon sx={{
          color: "#091B29", alignItems: 'center',
          backgroundColor: "#E4E8EE",
          borderRadius: "50%", p: 0
        }} />
        <Typography sx={{
          font: 'normal normal bold 16px/22px Nunito Sans',
          letterSpacing: '0px',
          color: '#071741',
          marginLeft: '7px'
        }}>Create Quotation To Existing Lead</Typography>
      </Box>
      <FormControl
        sx={{
          m: 0,
          background: '#F5F7FA 0% 0% no-repeat padding-box',
          border: '1px solid #E4E8EE',
          borderRadius: '8px',
          width: '166px',
          height: '32px',
          marginRight:'12px'
        }}
      >
        <Select
          value={selectedValue}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          IconComponent={KeyboardArrowDownIcon} 
          sx={{ height: '100%' }}
        >
          <MenuItem value="casagrand">Casagrand</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Box>
  )
}

export default TopBar