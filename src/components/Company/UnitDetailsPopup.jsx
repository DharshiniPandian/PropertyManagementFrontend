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
import { useSelector } from "react-redux";
import CustomizationPopup from './CustomizationPopup';
import { GrHomeRounded } from "react-icons/gr";
import { GiPersonInBed } from "react-icons/gi";
import { TbBath } from "react-icons/tb";
import { BiArea } from "react-icons/bi";
import Img from '../../assets/Handbook.svg'
import { Stack } from '@mui/material';
import UnitPhotos from './UnitPhotos';
import BillPopup from './BillPopup';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",  // Adjusted to center the modal
    transform: "translate(-50%, -50%)",
    width: "65%", // Maximum width for smaller screens
    height: "88%",
    bgcolor: "white",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    display: 'flex',
    flexDirection: 'column',
    // p: 4,
    borderRadius: "4px",
    // overflowY: "auto",
    border: 'none'
};

function UnitDetailsPopup({ id, handleClose, val }) {
    // console.log(id)
    const units = useSelector((s) => s.masterunit)
    // console.log(units)
    const unit = units.find((uni) => uni.id===id)
    
    const data = useSelector((s) => s.quote)
    // if (data && data.quoted_units) {
    //     console.log(data)
    //     const unit = data.quoted_units.filter((uni, index) => uni.unit_id === id)
    //     console.log(unit)
    // }
    // const addons = unit.addons


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
                        <Stack sx={{ gap: '20px' }} direction='row'>
                            <Box sx={{width:'382px'}}>
                                <Box>
                                    <UnitPhotos />
                                </Box>
                                <Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <Typography sx={{ font: 'normal normal bold 18px/24px Nunito Sans', color: '#091B29' }}>{unit.unit_name}</Typography>
                                        <Box sx={{ p: '2px', background: '#F5F7FA 0% 0% no-repeat padding-box', borderRadius: '4px' }}><Typography sx={{ font: 'normal normal bold 12px/16px Nunito Sans', letterSpacing: '-0.1px', color: '#98A0AC' }}>UNT-{unit.unit_no}</Typography></Box>
                                    </Box>
                                </Box>

                                <Box sx={{ mt: '8px' }}>
                                    <Typography sx={{ font: 'normal normal normal 14px/19px Nunito Sans', color: '#4E5A6B' }}>{unit.address}</Typography>
                                </Box>

                                <Box>
                                    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center', mt: '12px' }} onClick={() => handleOpenUnitDetails(unit)}>
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
                                        <Box sx={{ background: '#CED3DD 0% 0% no-repeat padding-box', borderRadius: '50%', height: '8px', width: '8px' }}></Box>
                                        <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                                            <BiArea color='#98A0AC' size='20px' />
                                            <Typography sx={{ font: 'normal normal normal 14px/19px Nunito Sans', color: '#98A0AC' }}>{unit.area}</Typography></Box>
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
                            <Box sx={{width:'430px',p:'10px'}} flex={2} >
                                           <BillPopup id={id} handleClose={handleClose} val={val} />
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default UnitDetailsPopup