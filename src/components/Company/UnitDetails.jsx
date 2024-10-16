import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UnitCard from './UnitCard'
import { Box, Typography } from '@mui/material'
import Img from '../../assets/prospect.png'

function UnitDetails() {
    const [units, setUnits] = useState([])
    const fetchunits = async () => {
        try{
            const response = await axios.get('http://localhost:8081/master/units')
            setUnits(response.data)
            console.log(units)
        } catch (error){
            console.log("error fetching the data", error);
        }
    }

    useEffect(() => {
        fetchunits();
    }, [])

  return (
    <Box sx={{p:'17px'}}>
        <Typography sx={{font: 'normal normal bold 14px/19px Nunito Sans',color: '#4E5A6B', mb:2}}>Unit Details</Typography>
       {units.length>0 && <UnitCard units={units} /> }
    </Box>
  )
}

export default UnitDetails