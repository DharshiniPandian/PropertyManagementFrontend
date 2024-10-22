import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';
import { InputAdornment, TextField } from '@mui/material';
import axios from 'axios'
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import LinearProgress from '@mui/material/LinearProgress';
import { useDispatch } from 'react-redux'
import { addComponent } from '../../slice/QuoteSlice';
import { useSelector } from 'react-redux';

function CustomizationPopup({ id, setValue, value, unit_id }) {
  const [activeRevenue, setActiveRevenue] = useState(null)
  const [activeComponent, setActiveComponent] = useState(null)
  const [revenue, setRevenue] = useState([])
  const [activeCharge, setActiveCharge] = useState('No')
  const [component, setComponent] = useState([])
  const [uom, setUom] = useState(200)
  const [quantity, setQuantity] = useState(1)
  const [unitPrice, setUnitPrice] = useState(0)
  const dispatch = useDispatch()

  const fetchrevenue = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/pricing/revenue/${id}`)
      setRevenue(response.data)
    } catch (error) {
      console.log("error fetching the data", error);
    }
  }

  const fetchcomponent = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/pricing/basedon/${id}`)
      setComponent(response.data)

    } catch (error) {
      console.log("error fetching the data", error);
    }
  }

  const handleSubmit = () => {

    let name='';
    if(value===1) name="Primary"
    else if(value===2) name="Secondary"
    else if(value===3) name="One Time Charges"
    else if(value===4) name="Refundables"
    else if(value===5) name="Invetory Item"
    else name="Parking Slot"

    const dataToSave = {
      name: name,
      pricing_id: value,
      revenue_id: activeRevenue,
      component_id: activeComponent,
      discount_type: 'Value',
      discount_value: 0,
      item_unit_price: value!==5 ? uom: unitPrice,
      quantity: quantity,
      chargeable: activeCharge
    };

    console.log(dataToSave)

    const payload = {
      id: unit_id,
      component: dataToSave
    }

    dispatch(addComponent(payload))

    setValue(0)
  }
  let  previouslySelected = useSelector((s) => s.quote.quoted_units);
  console.log(previouslySelected)
  console.log(unit_id)
  previouslySelected = previouslySelected.find((item) => item.unit_id === unit_id);
  console.log(previouslySelected)

  useEffect(() => {  
    console.log(previouslySelected)
    if (previouslySelected) {
      const selectedComponent = previouslySelected.components.find((item) => item.pricing_id === value);
      if (selectedComponent) {
        setActiveRevenue(selectedComponent.revenue_id);
        setActiveComponent(selectedComponent.component_id);
        setUom(selectedComponent.item_unit_price);
        setUnitPrice(selectedComponent.item_unit_price);
        setQuantity(selectedComponent.quantity);
        setActiveCharge(selectedComponent.chargeable)
      }
    }
  }, [previouslySelected, value, id])

  fetchrevenue();
  fetchcomponent();

   return (
    <Box>
      <Grid container justifyContent="space-between" alignItems="stretch" sx={{ ml: '22px', mr: '22px', mt: 2, height:'55vh' }}>
        
        {/* Revenue Type */}
        <Grid item xs={12} md={12}>
          <Box sx={{mt:1, mb:1}}>
          <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>
            Revenue Type
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
            {revenue.map((rev, index) => (
              <Button
                key={index}
                sx={{
                  background: activeRevenue === rev.revenue.id ? '#5078E1' : '',
                  borderRadius: '4px',
                  height: '40px',
                  font: 'normal normal 600 14px/19px Nunito Sans',
                  border: activeRevenue === rev.revenue.id ? '' : '1px solid #E4E8EE',
                  color: activeRevenue === rev.revenue.id ? '#FFFFFF' : '#4E5A6B',
                  textTransform: 'none',
                }}
                onClick={() => setActiveRevenue(rev.revenue.id)}
              >
                {rev.revenue.revenue_type_name}
              </Button>
            ))}
          </Box>
          </Box>
        </Grid>

        {/* Pricing Component */}
        <Grid xs={12} md={6}> 
          <Box sx={{mt:1}}>
          <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>
            Pricing Component
          </Typography>
          <FormControl sx={{ width: '100%', mb: 2 }}>
            <Select
              value="Pricing Component"
              inputProps={{ 'aria-label': 'Without label' }}
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                height: '40px',
                width:'210px',
                font: 'normal normal 600 14px/19px Nunito Sans',
                color: '#091B29',
                '& .MuiSelect-select': {
                  font: 'normal normal 600 14px/19px Nunito Sans',
                  color: '#091B29',
                },
              }}
            >
              <MenuItem value="Pricing Component">Pricing Component</MenuItem>
            </Select>
          </FormControl>
          </Box>
        </Grid>

        {/* Tax Group For Pricing Component */}
        <Box sx={{mt:'5px'}}>
          <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>
            Tax Group For Pricing Component
          </Typography>
          <FormControl sx={{ width: '100%', mb: 2 }}>
            <Select
              value="GST"
              defaultValue="GST"
              inputProps={{ 'aria-label': 'Without label' }}
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                height: '40px',width:'210px',
                font: 'normal normal 600 14px/19px Nunito Sans',
                color: '#091B29',
                '& .MuiSelect-select': {
                  font: 'normal normal 600 14px/19px Nunito Sans',
                  color: '#091B29',
                },
              }}
            >
              <MenuItem value="GST">GST</MenuItem>
            </Select>
          </FormControl>
        </Box>
       
       {/* Chargeable or not  */}
       {(value === 2 || value === 3 || value ===6 ) &&
        <Grid item xs={12} md={12} sx={{mt:'5px'}}>
          <Box>
          <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>
            Chargeable
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
             { ['Yes','No'].map((charge,index) => (<Button key={index}
                sx={{ background: activeCharge === charge ? '#5078E1' : '',
                  borderRadius: '4px',
                  height: '40px',
                  font: 'normal normal 600 14px/19px Nunito Sans',
                  border: activeCharge === charge ? '' : '1px solid #E4E8EE',
                  color: activeCharge === charge ? '#FFFFFF' : '#4E5A6B',
                  textTransform: 'none',}}
                  onClick={() => setActiveCharge(charge)}
                >
               {charge}
                </Button>))}
          </Box>
          </Box>
        </Grid>
        }

        {/* Component Based On */}
        <Grid item xs={12} md={12} sx={{mt:'5px'}}>
          <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>
            Component Based On
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '7px',mb:1 }}>
            {component.map((comp, index) => (
              <Button
                key={index}
                sx={{
                  background: activeComponent === comp.component.id ? '#5078E1' : '',
                  borderRadius: '4px',
                  height: '40px',
                  font: 'normal normal 600 14px/19px Nunito Sans',
                  border: activeComponent === comp.component.id ? '' : '1px solid #E4E8EE',
                  color: activeComponent === comp.component.id ? '#FFFFFF' : '#4E5A6B',
                  textTransform: 'none',
                }}
                onClick={() => setActiveComponent(comp.component.id)}
              >
                {comp.component.component_name}
              </Button>
            ))}
          </Box>
        </Grid>

        {/* UOM */}
        {value !==5 && 
     
          <Box sx={{width:'100%'}}>
          <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>UOM Value</Typography>
          <TextField
            id="outlined-basic"
            value={uom}
            onChange={(e) => setUom(e.target.value)}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#98A0AC' }}>
                  {(value!==5 || value!==2) ? "SAR/ Total" : "$/ Monthly"}
                </InputAdornment>
              ),
            }}
            sx={{
              background: '#FFFFFF',
              borderRadius: '4px',
              width: '100%',
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E4E8EE',
                  borderRadius: '4px',
                },
              },
              '& .MuiInputBase-input': {
                font: 'normal normal 600 14px/19px Nunito Sans',
                color: '#091B29',
              },
            }}
          />
          </Box>
        }

      {value === 5 && 
          <Box sx={{display:'flex', alignItems:'center', justifyContent: 'space-between',mt:1, width:'100%'}}>
          <Box>
          <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>Item Unit Price</Typography>
          <TextField
            id="outlined-basic"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#98A0AC' }}>
                  $
                </InputAdornment>
              ),
            }}
            sx={{
              background: '#FFFFFF',
              borderRadius: '4px',
              width: '100%',
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E4E8EE',
                  borderRadius: '4px',
                },
              },
              '& .MuiInputBase-input': {
                font: 'normal normal 600 14px/19px Nunito Sans',
                color: '#091B29',
              },
            }}
          />
          </Box>
          <Box>
          <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: 1 }}>Quantity</Typography>
          <TextField
            id="outlined-basic"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#98A0AC' }}>
                  Qty
                </InputAdornment>
              ),
            }}
            sx={{
              background: '#FFFFFF',
              borderRadius: '4px',
              width: '100%',
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#E4E8EE',
                  borderRadius: '4px',
                },
              },
              '& .MuiInputBase-input': {
                font: 'normal normal 600 14px/19px Nunito Sans',
                color: '#091B29',
              },
            }}
          />
          </Box>
          </Box>       
        }

        {value===1 && <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-between', width:'100%', mb:2}}>
         <Box sx={{display:'flex', flexDirection:'column'}}>
         <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: '5px' }}>Maximum</Typography>
         <Box sx={{mb:'5px'}}><LinearProgress
         sx={{
          backgroundColor: '#E4E8EE',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#FF4B4B', 
          },
          borderRadius: '2px',
          height: '5px',
          width:'135px',
        }}
         variant='determinate' value={100} /></Box>
          <Button
          variant='outlined'
          sx={{
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            border: '1px solid #E4E8EE',
            borderRadius: '4px',
            height:'40px',
            width:'135px',
            font: 'normal normal bold 12px/16px Nunito Sans',
            color: '#1C1C1C'
          }}
          >$ 190</Button>
           <Typography sx={{font: 'normal normal 600 10px/14px Nunito Sans',color: '#98A0AC',mt:'3px'}}>Sq. Yard/Monthly</Typography>
          </Box>

          <Box sx={{display:'flex', flexDirection:'column'}}>
         <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: '5px' }}>Recommended</Typography>
         <Box sx={{mb:'5px'}}><LinearProgress
         sx={{
          backgroundColor: '#E4E8EE',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#5AC782', 
          },
          borderRadius: '2px',
          height: '5px',
          width:'135px',
        }}
         variant='determinate' value={75} /></Box>
          <Button
          variant='outlined'
          sx={{
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            border: '1px solid #E4E8EE',
            borderRadius: '4px',
            height:'40px',
            width:'135px',
            font: 'normal normal bold 12px/16px Nunito Sans',
            color: '#1C1C1C'
          }}
          >$ 120</Button>
           <Typography sx={{font: 'normal normal 600 10px/14px Nunito Sans',color: '#98A0AC',mt:'3px'}}>Sq. Yard/Monthly</Typography>
          </Box>

          <Box sx={{display:'flex', flexDirection:'column'}}>
         <Typography sx={{ font: 'normal normal 600 12px/16px Nunito Sans', color: '#98A0AC', mb: '5px' }}>Minimum</Typography>
         <Box sx={{mb:'5px'}}><LinearProgress
         sx={{
          backgroundColor: '#E4E8EE',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#FF9340', 
          },
          borderRadius: '2px',
          height: '5px',
          width:'135px',
        }}
         variant='determinate' value={25} /></Box>
          <Button
          variant='outlined'
          sx={{
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            border: '1px solid #E4E8EE',
            borderRadius: '4px',
            height:'40px',
            width:'135px',
            font: 'normal normal bold 12px/16px Nunito Sans',
            color: '#1C1C1C'
          }}
          >$ 100</Button>
           <Typography sx={{font: 'normal normal 600 10px/14px Nunito Sans',color: '#98A0AC',mt:'3px'}}>Sq. Yard/Monthly</Typography>
          </Box>
          </Box>}

        {/* Action Buttons */} 
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' , width:'100%'}}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '4px',
                height: '40px',
                font: 'normal normal bold 14px/19px Nunito Sans',
                color: '#091B29',
                border: '1px solid #E4E8EE',
                textTransform: 'none'
              }}
              onClick={() => setValue(0)}
            >
              Back
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: '4px',
                height: '40px',
                font: 'normal normal bold 14px/19px Nunito Sans',
                background: '#5078E1',
                color: '#FFFFFF',
                textTransform: 'none'
              }}
              onClick={handleSubmit}
            >
              Create Pricing Component
            </Button>
          </Box>
      </Grid>
    </Box>
  );
}

export default CustomizationPopup