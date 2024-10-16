import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Typography } from '@mui/material';
import Img from '../assets/profile.png'
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: 'rgb(55, 65, 81)',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
        ...theme.applyStyles('dark', {
            color: theme.palette.grey[300],
        }),
    },
}));

export default function Profile() {
    const [isHovered, setIsHovered] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(false);
      };
    
      const handleMouseEnter = (event) => {
        setIsHovered(true);
        handleClick(event);  // Open the dropdown on hover
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
        handleClose();  // Close the dropdown on mouse leave
      };

    return (
        <Box>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                disableElevation
                sx={{
                    width: '136px',
                    height: '35px',
                    background: 'transparent',
                    padding:'0px',
                    textTransform: 'none',
                    borderRadius: '0px', 
                    cursor:'auto'
                }}
                endIcon={
                    isHovered ? (
                      <KeyboardArrowDownIcon
                        sx={{ transition: 'transform 0.3s ease' }} 
                      />
                    ) : (
                      <KeyboardArrowUpIcon
                        sx={{ transition: 'transform 0.3s ease' }} 
                      />
                    )
                  }
            >
                <Box sx={{ display: 'flex', width:'100%', gap:'8px' }}>
                    <img src={Img} height='32px' width='32px' style={{ borderRadius: '19px' }} />
                    <Box>
                        <Typography sx={{
                            textAlign: 'left',
                            font: 'normal normal bold 12px/16px Nunito Sans',
                            letterSpacing: '0px',
                            color: '#FFFFFF',
                            opacity: 1
                        }}>Bala Ashwin</Typography>
                        <Typography sx={{
                            textAlign: 'left',
                            font: 'normal normal normal 10px/14px Nunito Sans',
                            letterSpacing: '0.01px',
                            color:'#98A0AC',
                            opacity: 1
                        }}>Super Admin</Typography>
                    </Box>
                </Box>
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    <EditIcon />
                    Edit
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <FileCopyIcon />
                    Duplicate
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                    <ArchiveIcon />
                    Archive
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <MoreHorizIcon />
                    More
                </MenuItem>
            </StyledMenu>
        </Box>
    );
}
