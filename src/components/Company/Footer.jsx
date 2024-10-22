import { Box, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { reset } from '../../slice/QuoteSlice'
import axios from 'axios'

function Footer() {
  const data = useSelector((s) => s.quote)
  const dispatch = useDispatch()

  const handleSave = async () => {
    try {
      const response = await axios.post(`http://localhost:8081/quotation/`, data)
      alert("data stored successfully")
      dispatch(reset())
    } catch (error) {
      console.log("error storing the data".error)
    }
  }

  const handleCancel = async () => {
    dispatch(reset())
  }
  return (
    <Box sx={{ p: '17px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
      <Box>
        <Button variant='outline' sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#091B29', border: '1px solid #E4E8EE', borderRadius: '8px', textTransform: 'none', height: '40px' }}>Previous</Button>
      </Box>
      <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Button variant='outline' sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#091B29', border: '1px solid #E4E8EE', borderRadius: '8px', textTransform: 'none', height: '40px' }} onClick={() => handleCancel()}>Cancel</Button>
        <Button variant='contained' sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#FFFFFF', background: '#5078E1 0% 0% no-repeat padding-box', borderRadius: '8px', textTransform: 'none', height: '40px' }} onClick={handleSave}>Create Quotation</Button>
      </Box>
    </Box>
  )
}

export default Footer