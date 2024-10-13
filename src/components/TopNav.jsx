import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Img from '../assets/logo.png'
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import { styled, alpha } from '@mui/material/styles';
import { IoNotificationsOutline } from "react-icons/io5";
import Profile from './Profile';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '350px',
  height: '32px',
  marginBottom: '10px',
  background: '#5D5D5D 0% 0% no-repeat padding-box',
  borderRadius: '4px',
  opacity: '1',

  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  textAlign: 'left',
  font: 'normal normal normal 13px/16px Nunito Sans',
  letterSpacing: '0px',
  color: '#CED3DD',  // Text color
  opacity: '1',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    '&::placeholder': {
      color: '#CED3DD',  // Placeholder color
      opacity: 1,        // Adjust opacity if needed
    },
  },
}));


function TopNav() {

  return (
    <AppBar position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: '#1C1C1C 0% 0% no-repeat padding-box',
        opacity: 1,
        height: '54px'
      }}>
      <Toolbar>

        <Stack direction='row' sx={{ width: '100%' }}>

          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }} flex={1}>
            <img src={Img} alt='logo' height='22px' />

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                mx: 1,
                borderColor: '#98A0AC',
                borderWidth: '1px'
              }}
            />

            <Typography
              sx={{
                textAlign: 'left',
                font: 'normal normal 300 10px/14px Nunito Sans',
                letterSpacing: '0px',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                opacity: 1,
              }}>
              PROPERTY MANAGEMENT SOLUTION
            </Typography>
          </Box>

          <Box flex={1} sx={{ width: '100%' }}>
            <Search>
              <SearchIconWrapper>
              <SearchIcon sx={{ color: '#CED3DD' }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>

          <Box flex={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent:'flex-end' }}>
              <Box sx={{
                width: '29px',
                height: '29px',
                borderRadius: '6px',
                opacity: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  background: '#E4E8EE 0% 0% no-repeat padding-box',
                  borderRadius: '6px',
                  opacity: 1,
                  color: 'black',
                }
              }}>
                <Badge
                  color="primary"
                  variant="dot"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  overlap="circular"
                >
                  <IoNotificationsOutline size={20} />
                </Badge>
              </Box>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  mx: 1,
                  borderColor: '#98A0AC',
                  borderWidth: '1px',
                  height: '26px'
                }}
              />
              <Profile />
            </Box>

          </Box>


        </Stack>

      </Toolbar>
    </AppBar>
  )
}

export default TopNav