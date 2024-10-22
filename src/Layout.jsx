import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../src/components/TopNav';
import SideNav from '../src/components/SideNav';
import { Box } from '@mui/material';

function Layout() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ backgroundColor: '#F5F7FA',minHeight: '91.5vh', width:'100%' }}>
                <TopNav />
                <SideNav open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
                <Box
                    sx={{
                        marginTop: '54px',
                        marginLeft: '58px',
                    }}
                >
                    <Outlet />
                    {/* An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route. */}
                </Box>
            </Box>
        </>
    );
}

export default Layout;
