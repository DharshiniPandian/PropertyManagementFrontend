import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import CustomizationPopup from './CustomizationPopup';
import Img from '../../assets/pool.png'
import { Switch } from '@mui/material';
import { height, styled } from '@mui/system';
import axios from 'axios';
import { useEffect } from 'react';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 62, // Set the width of the switch
  height: 34, // Set the height of the switch bar (track)
  padding: 2, // Padding for the switch
  '& .MuiSwitch-switchBase': {
    padding: 4, // Padding for the circle (thumb)
    '&.Mui-checked': {
     // Position of the circle when checked
     // Color of the circle when checked
      '& + .MuiSwitch-track': {
        backgroundColor: '#EEF9EE', // Color of the switch bar (track) when checked
        opacity: 1,
        borderRadius: '300px',
        height:'25px',
        width: '42px'
      },
      '& .MuiSwitch-thumb': {
        width: '20px', // Width of the circle
        height: '20px', // Height of the circle
        backgroundColor: '#5AC782', // Circle color when unchecked
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: '20px', // Width of the circle
    height: '20px', // Height of the circle
    backgroundColor: '#98A0AC', // Circle color when unchecked
  },
  '& .MuiSwitch-track': {
    borderRadius: '300px', // Border radius to make the bar rounded
    backgroundColor: '#E4E8EE', // Default bar color when unchecked
    opacity: 1,
    height:'25px',
    width: '42px'
  },
}));

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "440px", // Maximum width for smaller screens
    height: "85%",
    bgcolor: "white",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    // p: 4,
    borderRadius: "4px",
    // overflowY: "auto",
};


function AmenityPopup({ open, id, handleClose }) {
    const [amenity, setAmenity] = useState([])
    const fetchAmenities = async () => {
        try{
            const response = await axios.get(`http://localhost:8081/unit/amenity/${id}`)
            setAmenity(response.data)
            console.log(response.data)
        } catch (error){
            console.log("error fetching the data", error);
        }
    }

    useEffect(() => {
        fetchAmenities();
    }, [])
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{
                    style: { backgroundColor: 'rgba(0, 0, 0, 0.24)' },
                }}
            >
                <Box sx={style}>
                    <Box>
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: '17px', pt: '17px', pr: '17px' }}>
                                <Typography sx={{ font: 'normal normal 800 16px/22px Nunito Sans', color: '#091B29' }}>Add Amenities</Typography>
                                <CloseIcon sx={{ color: '#7C8594', height: '26px', cursor: 'pointer' }} onClick={handleClose} />
                            </Box>
                            <Divider sx={{ borderColor: '#E4E8EE', borderWidth: '1px', mt: '15px' }} />
                        </Box>
                        <Box sx={{ pl: '17px',mt:'15px', pr: '17px', mb: 1 }}>
                            <Box sx={{ background: '#FEEAEA80 0% 0% no-repeat padding-box', borderRadius: '4px', height: '50px', display: 'flex', alignItems: 'center', p: '5px', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <img src={Img} height='38px' width='39px' />
                                    <Typography sx={{ font: 'normal normal 600 16px/22px Nunito Sans', color: '#B3776D', display: 'flex' }}><Box sx={{ fontWeight: 800, mr: '5px' }}>{2 * 2}</Box> Total Amenities</Typography>
                                </Box>
                                <Typography sx={{ font: 'normal normal bold 16px/22px Nunito Sans', color: '#B3776D' }}>$ {200.00}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ pl: '17px', mt:'15px', pr: '17px' }}>
                            <Typography sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#98A0AC', mb: '12px' }}>Available Amenities</Typography>
                            <Box sx={{ overflowY: 'auto',height:'55vh', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
                                {amenity.map((amen, index) => (
                                <Box sx={{ background: '#FFFFFF 0% 0% no-repeat padding-box', borderRadius: '6px', border: '1px solid #E4E8EE', height: '55px', p: '3px', display: 'flex', alignItems: 'center', justifyContent:'space-between',mb:'10px'}}>
                                    <Box sx={{display:'flex', alignItems:'center', gap:'15px'}}>
                                    <img src={Img} height='54px' width='54px' />
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                        <Typography sx={{ font: 'normal normal 600 16px/22px Nunito Sans', color: '#091B29' }}>{amen.amenity.amenity_name}</Typography>
                                        <Box sx={{display:'flex', alignItems:'center', gap:'9px'}}>
                                        <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#4E5A6B' }}>$ {amen.price}</Typography>
                                        <Box sx={{background: '#E4E8EE 0% 0% no-repeat padding-box',height:'6px', width: '6px'}}></Box>
                                        <Typography sx={{font: 'normal normal 600 12px/16px Nunito Sans',color: '#4E5A6B'}}>Valid Feb 22 - 12 Feb 23</Typography>
                                        </Box>
                                    </Box>
                                    </Box>
                                    <CustomSwitch
                                        // checked={checked}
                                        // onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </Box>
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{ pl: '17px', pt: '17px', pr: '17px' }}>
                            <Button variant='contained' sx={{font: 'normal normal bold 14px/19px Nunito Sans', color: '#FFFFFF', height:'20px', width:'100%',background: '#5078E1 0% 0% no-repeat padding-box', borderRadius:'4px', height:'40px'}}>Update & Save</Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default AmenityPopup