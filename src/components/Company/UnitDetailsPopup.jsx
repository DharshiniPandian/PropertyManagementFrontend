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
import { GrHomeRounded } from "react-icons/gr";
import { GiPersonInBed } from "react-icons/gi";
import { TbBath } from "react-icons/tb";
import { BiArea } from "react-icons/bi";
import Img from '../../assets/Handbook.svg'
import { Stack } from '@mui/material';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",  // Adjusted to center the modal
    transform: "translate(-50%, -50%)",
    width: "70%", // Maximum width for smaller screens
    height: "85%",
    bgcolor: "white",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    display: 'flex',
    flexDirection: 'column',
    // p: 4,
    borderRadius: "4px",
    // overflowY: "auto",
    border: 'none'
};

function UnitDetailsPopup({ id, handleClose }) {
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
                    <Box sx={{ mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', ml: '22px', mr: '22px', mt: 2 }}>
                            <Typography sx={{ font: 'normal normal 800 16px/22px Nunito Sans', color: '#091B29' }}>Unit Details</Typography>
                            <CloseIcon sx={{ color: '#7C8594', height: '26px', cursor: 'pointer' }} onClick={handleClose} />
                        </Box>
                        <Divider sx={{ borderColor: '#E4E8EE', borderWidth: '1px', mt: '15px' }} />
                    </Box>

                    <Box sx={{ pl: '22px', pr: '22px' }}>
                        <Stack sx={{ gap:'20px' }} direction='row'>
                            <Box flex={1}>
                                <Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <Typography sx={{ font: 'normal normal bold 18px/24px Nunito Sans', color: '#091B29' }}>Jumeirah Estate</Typography>
                                        <Box sx={{ p: '2px', background: '#F5F7FA 0% 0% no-repeat padding-box', borderRadius: '4px' }}><Typography sx={{ font: 'normal normal bold 12px/16px Nunito Sans', letterSpacing: '-0.1px', color: '#98A0AC' }}>UNT-1234</Typography></Box>
                                    </Box>
                                </Box>

                                <Box sx={{ mt: '8px' }}>
                                    <Typography sx={{ font: 'normal normal normal 14px/19px Nunito Sans', color: '#4E5A6B' }}>Rubix Apartment, K Tower, Floor 1</Typography>
                                </Box>

                                <Box>
                                    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center', mt: '12px' }} onClick={() => handleOpenUnitDetails(unit)}>
                                        <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center', verticalAlign: 'center' }}>
                                            <GiPersonInBed color='#98A0AC' size='20px' style={{ marginBottom: '5px' }} />
                                            <Typography sx={{ font: 'normal normal normal 14px/19px Nunito Sans', color: '#98A0AC' }}>{5}</Typography></Box>
                                        <Box sx={{ background: '#CED3DD 0% 0% no-repeat padding-box', borderRadius: '50%', height: '8px', width: '8px' }}></Box>
                                        <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                                            <TbBath color='#98A0AC' size='20px' />
                                            <Typography sx={{ font: 'normal normal normal 14px/19px Nunito Sans', color: '#98A0AC' }}>{20}</Typography></Box>
                                        <Box sx={{ background: '#CED3DD 0% 0% no-repeat padding-box', borderRadius: '50%', height: '8px', width: '8px' }}></Box>
                                        <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}><GrHomeRounded color='#98A0AC' size='16px' />
                                            <Typography sx={{ font: 'normal normal normal 14px/19px Nunito Sans', color: '#98A0AC' }}>{3}BHK</Typography>
                                        </Box>
                                        <Box sx={{ background: '#CED3DD 0% 0% no-repeat padding-box', borderRadius: '50%', height: '8px', width: '8px' }}></Box>
                                        <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                                            <BiArea color='#98A0AC' size='20px' />
                                            <Typography sx={{ font: 'normal normal normal 14px/19px Nunito Sans', color: '#98A0AC' }}>{20}</Typography></Box>
                                    </Box>
                                </Box>

                                <Divider sx={{ borderColor: '#E4E8EE', borderWidth: '1px', mt: '15px' }} />

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: '12px' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <img src={Img} />
                                        <Typography sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#091B29' }}>Handbook</Typography>
                                    </Box>
                                    <Typography sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#5078E1' }}>View / Download</Typography>
                                </Box>
                            </Box>
                            <Box sx={{background: '#F8F9FB 0% 0% no-repeat padding-box', borderRadius: '16px', height:'',width:'100%',p:'10px'}} flex={1}>
                                <Typography sx={{font: 'normal normal bold 14px/19px Nunito Sans', color:'#091B29'}}>UNIT PRICING DETAILS</Typography>
                                <Box sx={{mt:1}}>
                                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between',mb:'8px'}}>
                                        <Typography sx={{font: 'normal normal 600 14px/19px Nunito Sans',color: '#4E5A6B', textAlign: 'left'}}>Bill Name Here</Typography>
                                        <Typography sx={{font: 'normal normal bold 14px/19px Nunito Sans',color: '#4E5A6B', textAlign:'right'}}>$1,000</Typography>
                                    </Box>
                                    <Box  sx={{display:'flex', alignItems:'center', justifyContent:'space-between',mb:'8px'}}>
                                         <Typography sx={{font: 'italic normal normal 14px/19px Nunito Sans', color: '#98A0AC', textAlign:'left'}}>Discount</Typography>
                                         <Typography sx={{font: 'italic normal 600 12px/16px Nunito Sans', color: '#98A0AC', textAlign:'right'}}>10%</Typography>
                                    </Box>
                                    <Divider sx={{ borderColor: '#E4E8EE', borderWidth: '1px', mt: '15px' }} />
                                </Box>  
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default UnitDetailsPopup