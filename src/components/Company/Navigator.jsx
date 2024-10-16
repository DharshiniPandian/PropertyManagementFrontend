import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box } from '@mui/material';

function Navigator() {
  return (
    <Box sx={{
       p:'17px'
      }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize='medium' sx={{ color: '#5078E1' }} />} aria-label="breadcrumb">
        <Link key="add-contact" style={{ color: '#5078E1', textDecoration: 'none',
             fontWeight: 600,               
             fontSize: '14px',             
             lineHeight: '19px',            
             fontFamily: 'Nunito Sans',  
         }} to="/">
          Add Contact
        </Link>
        <Link key="lead-details" style={{ color: '#5078E1', textDecoration: 'none',
             fontWeight: 600,               
             fontSize: '14px',             
             lineHeight: '19px',            
             fontFamily: 'Nunito Sans',  
         }} to="/">
          Lead Details
        </Link>
        <Link key="preview-create-lead" style={{ color: '#5078E1', textDecoration: 'none',
             fontWeight: 600,               
             fontSize: '14px',             
             lineHeight: '19px',            
             fontFamily: 'Nunito Sans',  
         }} to="/">
          Preview and Create Lead
        </Link>
        <Link key="preview-create" style={{ color: '#5078E1', textDecoration: 'none',
             fontWeight: 600,               
             fontSize: '14px',             
             lineHeight: '19px',            
             fontFamily: 'Nunito Sans',  
         }} to="/">
         Quotation Details
        </Link>
        <Link key="preview-create-lead" style={{ color: '#5078E1', textDecoration: 'none',
             fontWeight: 600,               
             fontSize: '14px',             
             lineHeight: '19px',            
             fontFamily: 'Nunito Sans',  
         }} to="/">
          Preview and Create Lead
        </Link>
      </Breadcrumbs>
    </Box>
  );
}

export default Navigator;
