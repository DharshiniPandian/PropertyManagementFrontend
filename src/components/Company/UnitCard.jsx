import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { GrHomeRounded } from "react-icons/gr";
import { GiPersonInBed } from "react-icons/gi";
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TbBath } from "react-icons/tb";
import AddIcon from '@mui/icons-material/Add';
import { Badge } from '@mui/material';
import { RiDeleteBinLine } from "react-icons/ri";
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import PricingComponentPopup from './PricingComponentPopup';
import AmenityPopup from './AmenityPopup';
import UtilityPopup from './UtilityPopup';
import UnitDetailsPopup from './UnitDetailsPopup';

const StyledMenu = styled((props) => (
  <Menu
      elevation={0}
      anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
      }}
      transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
      }}
      {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(-10),
      minWidth: 180,
      padding:'0px',
      border:'1px solid #E4E8EE', 
  },
}));

function UnitCard({ units }) {
  const [value, setValue] = useState(0)
  const [clicked, setClicked] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [id, setId] = useState(null)
  const open = Boolean(anchorEl);

  const [openUnitDetails, setOpenUnitDetails] = useState(false)
  const handleOpenUnitDetails = (unit) => {
    setOpenUnitDetails(true)
    setId(unit.id)
  }
  const handleCloseUnitDetails = (unit) => {
    setOpenUnitDetails(false)
  }

  const [openAmenity, setOpenAmenity] = useState(false)
  const handleOpenAmenity = (unit) => {
    setOpenAmenity(true)
    setId(unit.id)
  }
  const handleCloseAmenity = (unit) => {
    setOpenAmenity(false)
  }

  const [openUtility, setOpenUtility] = useState(false)
  const handleOpenUtility = (unit) => {
    setOpenUtility(true)
    setId(unit.id)
  }
  const handleCloseUtility = (unit) => {
    setOpenUtility(false)
  }

  const [openPricingPopup, setOpenPricingPopup] = React.useState(false);
  const handleOpenPricingPopup = (unit) => {
    setOpenPricingPopup(true)
    console.log(unit.id)
  }
  const handleClosePricingPopup = () => setOpenPricingPopup(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    console.log('Anchor Element:', anchorEl);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (event) => {
    setOpenUnitDetails(false)
    setClicked(true);
    handleClick(event); 
  };
  
  return (
  <Box sx={{ overflowY: 'auto', height: '54vh', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
      <Stack
  direction="row"
  useFlexGap
  sx={{ flexWrap: 'wrap', gap: '16px', justifyContent:'center' }}
>
    {units.map((unit, index) => (
    <Box sx={{
      width: '222px',
      height: '244px',
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      border: '1px solid #E4E8EE',
      borderRadius: '6px',
      padding: '10px',
      flex: '1 1 calc(50% - 60px)',
      cursor: 'pointer'
    }}
   >
      <Box sx={{ position: 'relative', mb: 2 }}  onClick={() => handleOpenUnitDetails(unit)}>
        <Box
          sx={{
            backgroundImage: `url(${unit.path_of_thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100px',
            borderRadius: '4px',
          }}
        />
        <Badge
          badgeContent={
            <RiDeleteBinLine
            size='11px'
              style={{
                color: "#FF4B4B",
                backgroundColor: "#F5F7FA",
                borderRadius: '50%',
                padding:'4px'
              }}
            />
          }
          sx={{
            position: "absolute",
            top: 18,
            right: 18,
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}  onClick={() => handleOpenUnitDetails(unit)}>
        <Typography sx={{ font: 'normal normal bold 14px/19px Nunito Sans', letterSpacing: '0px', color: '#091B29' }}>{unit.unit_name}</Typography>
        <Typography sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#FF9340' }}>$ {unit.price}</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '6px' }}  onClick={() => handleOpenUnitDetails(unit)}>
        <Typography sx={{ font: 'normal normal normal 12px/16px Nunito Sans', color: '#98A0AC' }}>{unit.unit_description}</Typography>
        <Box sx={{ background: '#CED3DD 0% 0% no-repeat padding-box', borderRadius: '50%', height: '6px', width: '6px' }}></Box>
        <Typography sx={{ font: 'normal normal normal 12px/16px Nunito Sans', color: '#98A0AC' }}>{unit.area} Sq.Ft</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '12px' }}  onClick={() => handleOpenUnitDetails(unit)}>
        <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center', verticalAlign: 'center' }}>
          <GiPersonInBed color='#98A0AC' size='20px' style={{ marginBottom: '5px' }} />
          <Typography sx={{ font: 'normal normal normal 14px/19px Nunito Sans', color: '#98A0AC' }}>{unit.bedroom_count}</Typography></Box>
        <Box sx={{ background: '#CED3DD 0% 0% no-repeat padding-box', borderRadius: '50%', height: '8px', width: '8px' }}></Box>
        <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
          <TbBath color='#98A0AC' size='20px' />
          <Typography sx={{ font: 'normal normal normal 14px/19px Nunito Sans', color: '#98A0AC' }}>{unit.bath_count}</Typography></Box>
        <Box sx={{ background: '#CED3DD 0% 0% no-repeat padding-box', borderRadius: '50%', height: '8px', width: '8px' }}></Box>
        <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}><GrHomeRounded color='#98A0AC' size='16px' />
          <Typography sx={{ font: 'normal normal normal 14px/19px Nunito Sans', color: '#98A0AC' }}>{unit.house_type}BHK</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
        <Button variant="text" startIcon={<AddIcon />} sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#5078E1', textTransform: 'none' }} onClick={(event) => {event.stopPropagation(); handleButtonClick(event);}}>Customize</Button>
      </Box>
      <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={(event) => {event.stopPropagation();handleOpenPricingPopup(unit)}} disableRipple sx={{ font: 'normal normal 600 12px/16px Nunito Sans',color: '#4E5A6B'}}>
                    
                    Add Pricing Component
                </MenuItem>
                <Divider sx={{  mx: 2, borderColor: '#E4E8EE', borderWidth: '1px', }} />
                <MenuItem onClick={(event) => {event.stopPropagation();handleOpenAmenity(unit)}} disableRipple sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#4E5A6B',}}>
                   
                    Add Amenities
                </MenuItem>
                <Divider sx={{  mx: 2, borderColor: '#E4E8EE', borderWidth: '1px', }} />
                <MenuItem onClick={(event) => {event.stopPropagation();handleOpenUtility(unit)}} disableRipple sx={{font: 'normal normal 600 12px/16px Nunito Sans',color: '#4E5A6B',}}>
                  
                    Add Utilities
                </MenuItem>
                <Divider sx={{  mx: 2, borderColor: '#E4E8EE', borderWidth: '1px', }} />
                <MenuItem onClick={handleClose} disableRipple sx={{font: 'normal normal 600 12px/16px Nunito Sans',color: '#4E5A6B',}}>
                  
                    Add Discount
                </MenuItem>
                <Divider sx={{  mx: 2, borderColor: '#E4E8EE', borderWidth: '1px', }} />
                <MenuItem onClick={handleClose} disableRipple sx={{font: 'normal normal 600 12px/16px Nunito Sans',color: '#4E5A6B',}}>
                  
                    Remove Component
                </MenuItem>

            </StyledMenu>
            {openPricingPopup && <PricingComponentPopup open={openPricingPopup} handleClose={handleClosePricingPopup} value={value} setValue={setValue} />}
            {openAmenity && <AmenityPopup id={id} open={openAmenity} handleClose={handleCloseAmenity} />}
            {openUtility && <UtilityPopup id={id} open={openUtility} handleClose={handleCloseUtility} />}
            {openUnitDetails && <UnitDetailsPopup id={id} handleClose={handleCloseUnitDetails} />}
    </Box>
    ))}
    </Stack>
    </Box>
  )
}

export default UnitCard