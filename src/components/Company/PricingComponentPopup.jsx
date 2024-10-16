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

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",  // Adjusted to center the modal
    transform: "translate(-50%, -50%)",
    width: "500px", // Maximum width for smaller screens
    height: "600px",
    bgcolor: "white",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    display:'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    // p: 4,
    borderRadius: "4px",
    // overflowY: "auto",
};

function PricingComponentPopup({ open, handleClose, value, setValue }) {
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
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',ml:'22px', mr:'22px',mt:2 }}>
                        <Typography sx={{ font: 'normal normal 800 16px/22px Nunito Sans', color: '#091B29' }}>Pricing Table</Typography>
                        <CloseIcon sx={{ color: '#7C8594', height: '26px' }} onClick={handleClose} />
                    </Box>
                    <Divider sx={{  borderColor: '#E4E8EE', borderWidth: '1px',mt:'15px' }} />
                    </Box>
                    {!value && <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', gap:'10px'}}>
                    <Box sx={{ height: '55px', background: '#FEEAEA80 0% 0% no-repeat padding-box', borderRadius: '6px', p: '10px',alignContent: 'center',  ml:'22px', mr:'22px',mt:1, cursor: 'pointer' }} onClick={()=> setValue('primary')}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Box sx={{ font: 'normal normal bold 10px/14px Nunito Sans', color: '#FFFFFF', background: '#B3776D 0% 0% no-repeat padding-box', borderRadius: '50%', p: '4px', ml: '5px' }}>01</Box>
                                <Typography sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#B3776D' }}>Primary</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems:'center', gap: '12px'}}>
                            <ErrorOutlineIcon sx={{color: '#CED3DD'}} />
                                <ChevronRightIcon sx={{ color: '#B3776D', }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ height: '55px', background: '#EDE4FE80 0% 0% no-repeat padding-box', borderRadius: '6px', p: '10px',alignContent: 'center', ml:'22px', mr:'22px', cursor: 'pointer'}} onClick={()=> setValue('secondary')}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Box sx={{ font: 'normal normal bold 10px/14px Nunito Sans', color: '#FFFFFF', background: '#896DB3 0% 0% no-repeat padding-box', borderRadius: '50%', p: '4px', ml: '5px' }}>02</Box>
                                <Typography sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#896DB3' }}>Secondary</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems:'center', gap: '12px'}}>
                            <ErrorOutlineIcon sx={{color: '#CED3DD'}} />
                                <ChevronRightIcon sx={{ color: '#B3776D', }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ height: '55px', background: '#DBF0F180 0% 0% no-repeat padding-box', borderRadius: '6px', p: '10px',alignContent: 'center', ml:'22px', mr:'22px', cursor: 'pointer'}} onClick={()=> setValue('one time charges')}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Box sx={{ font: 'normal normal bold 10px/14px Nunito Sans', color: '#FFFFFF', background: '#6DAFB3 0% 0% no-repeat padding-box', borderRadius: '50%', p: '4px', ml: '5px' }}>03</Box>
                                <Typography sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#6DAFB3' }}>One Time Charges</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems:'center', gap: '12px'}}>
                            <ErrorOutlineIcon sx={{color: '#CED3DD'}} />
                                <ChevronRightIcon sx={{ color: '#B3776D', }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ height: '55px', background: '#E4EDFF80 0% 0% no-repeat padding-box', borderRadius: '6px', p: '10px',alignContent: 'center',  ml:'22px', mr:'22px', cursor: 'pointer'}} onClick={()=> setValue('refundables')}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Box sx={{ font: 'normal normal bold 10px/14px Nunito Sans', color: '#FFFFFF', background: '#6D80B3 0% 0% no-repeat padding-box', borderRadius: '50%', p: '4px', ml: '5px' }}>04</Box>
                                <Typography sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#6D80B3' }}>Refundables</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems:'center', gap: '12px'}}>
                            <ErrorOutlineIcon sx={{color: '#CED3DD'}} />
                                <ChevronRightIcon sx={{ color: '#B3776D', }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ height: '55px', background: '#FFFAD880 0% 0% no-repeat padding-box', borderRadius: '6px', p: '10px',alignContent: 'center',ml:'22px', mr:'22px', cursor: 'pointer'}} onClick={()=> setValue('invetory item')}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Box sx={{ font: 'normal normal bold 10px/14px Nunito Sans', color: '#FFFFFF', background: '#B3A16D 0% 0% no-repeat padding-box', borderRadius: '50%', p: '4px', ml: '5px' }}>05</Box>
                                <Typography sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#B3A16D' }}>Invetory Item</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems:'center', gap: '12px'}}>
                            <ErrorOutlineIcon sx={{color: '#CED3DD'}} />
                                <ChevronRightIcon sx={{ color: '#B3776D', }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ height: '55px', background: '#FEEAEA80 0% 0% no-repeat padding-box', borderRadius: '6px', p: '10px',alignContent: 'center',ml:'22px', mr:'22px', mb:'22px', cursor: 'pointer'}} onClick={()=> setValue('parking slot')}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Box sx={{ font: 'normal normal bold 10px/14px Nunito Sans', color: '#FFFFFF', background: '#B3776D 0% 0% no-repeat padding-box', borderRadius: '50%', p: '4px', ml: '5px' }}>06</Box>
                                <Typography sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#B3776D' }}>Parking Slot</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems:'center', gap: '12px'}}>
                            <ErrorOutlineIcon sx={{color: '#CED3DD'}} />
                                <ChevronRightIcon sx={{ color: '#B3776D', }} />
                            </Box>
                        </Box>
                    </Box>
                    </Box>
                    }
                    {value && <CustomizationPopup name={value} />}
                </Box>
                    
            </Modal>
        </div>
    )
}

export default PricingComponentPopup