import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';
import { Button } from '@mui/material';
import { addDiscount, removeAddon, removeComponent } from '../../slice/QuoteSlice';
import Img from '../../assets/binIcon.svg';

function BillPopup({ id, handleClose, val }) {
    const unit_data = useSelector((s) => s.quote.quoted_units);
    const units = unit_data.find((uni) => uni.unit_id === id);
    const dispatch = useDispatch();

    const [total, setTotal] = useState(units.price + units.addonPrice + units.componentPrice);
    const [components, setComponents] = useState(units.components)
    const [addons, setAddons] = useState(units.addons);

    useEffect(() => {
        calculateTotal();
        // setTotal(units.price + units.addonPrice + units.componentPrice);
        
    }, [addons, components, unit_data, units]);

    const handleDiscountChangeAddon = (index, key, value) => {
        const parsedValue = key === 'discount_value' ? parseFloat(value) || 0 : value;
    
        console.log(`Addon ${index} - ${key}:`, parsedValue); 
    
        const updatedAddons = addons.map((addon, i) => {
            if (i === index) {
                return { ...addon, [key]: parsedValue };
            }
            return addon;
        });
        setAddons(updatedAddons);
        calculateTotal()
    };
    

    const handleDiscountChangeComponent = (index, key, value) => {
        const parsedValue = key === 'discount_value' ? parseFloat(value) || 0 : value;
        const updatedComponents = components.map((comp, i) => (i === index ? { ...comp, [key]: parsedValue } : comp));
        setComponents(updatedComponents);
        calculateTotal()
      };
    
    const calculateTotal = () => {
        let newTotal = units.price;
        let addonTotal = 0;
        let componentTotal = 0;
    
        addons.forEach((addon) => {
            let price = parseFloat(addon.price) || 0;
            if (addon.discount_type === 'Value') {
                price -= addon.discount_value ? parseFloat(addon.discount_value) : 0;
            } else if (addon.discount_type === 'Percentage') {
                price -= (price * (addon.discount_value ? parseFloat(addon.discount_value) : 0)) / 100;
            }
            addonTotal += price;
        });
    
        components.forEach((comp) => {
            let price = (parseFloat(comp.item_unit_price) || 0) * (parseInt(comp.quantity) || 1);
            if (comp.discount_type === 'Value') {
                price -= comp.discount_value ? parseFloat(comp.discount_value) : 0;
            } else if (comp.discount_type === 'Percentage') {
                price -= (price * (comp.discount_value ? parseFloat(comp.discount_value) : 0)) / 100;
            }
            componentTotal += price;
        });
    
        newTotal += addonTotal + componentTotal;
        setTotal(Math.max(newTotal, 0)); 
    };


    const handleDeleteAddon = (addon) => {
        dispatch(removeAddon({ id, addon }));
        setAddons(units.addons.filter((item) => ((item.amenity_id && item.amenity_id!==addon.amenity_id) || (item.utility_id && item.utility_id!==addon.utility_id))))
        calculateTotal()
    };

    const handleDeleteComponent = (component) => {
        console.log(component)
        dispatch(removeComponent({ id, component }));
        setComponents(units.components.filter((item) => item.pricing_id!==component.pricing_id))
        calculateTotal()
    };

    const handleSave = () => {
        const updatedUnits = unit_data.map((unit) => {
            if (unit.unit_id === id) {
                return { ...unit, addons, components };
            }
            return unit;
        });
        dispatch(addDiscount(updatedUnits));

        handleClose();
    };

    return (
        <Box sx={{ background: '#F8F9FB 0% 0% no-repeat padding-box', borderRadius: '16px', height: '75vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#091B29', mb: '10px', p: '10px' }}>
                UNIT PRICING DETAILS
            </Typography>
            <Box sx={{ p: '10px', flex: '1 1 auto', overflowY: 'auto', scrollbarWidth: 'none' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: '7px', pr:'7px', pl:'7px' }}>
                    <Typography sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#4E5A6B' }}>
                        Unit Price
                    </Typography>
                    <Typography sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#4E5A6B' }}>
                        ${units.price}
                    </Typography>
                </Box>
                <Divider sx={{ borderColor: '#E4E8EE', borderWidth: '1px', mt: '15px' }} />

                {addons.map((addon, index) => (
                    <Box key={index} sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pr: '7px', pt: '7px', pl: '7px' }}>
                            <Typography sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#4E5A6B' }}>
                                {addon.name}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Typography sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#4E5A6B' }}>
                                    ${addon.price}
                                </Typography>
                                {val === 3 && (
                                    <Box sx={{ background: 'ffecec', cursor: 'pointer' }} onClick={() => handleDeleteAddon(addon)}>
                                        <img src={Img} alt='bin' />
                                    </Box>
                                )}
                            </Box>
                        </Box>

                        {val === 2 && (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '7px', width: '97%' }}>
                                <Typography sx={{ font: 'italic normal normal 14px/19px Nunito Sans', color: '#98A0AC' }}>
                                    Discount
                                </Typography>
                                <Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', overflowY: 'hidden' }}>
                                        <FormControl sx={{ width: '70px' }} variant="outlined">
                                            <OutlinedInput
                                                value={addon.discount_value || ''}
                                                onChange={(e) => handleDiscountChangeAddon(index, 'discount_value', e.target.value)}
                                                inputProps={{
                                                    'aria-label': 'weight',
                                                    placeholder: '10,000',
                                                }}
                                                sx={{ pl: '0px', height: '22px', font: 'italic normal normal 12px/16px Nunito Sans', color: '#98A0AC' }}
                                            />
                                        </FormControl>
                                        <FormControl
                                            sx={{
                                                m: 0,
                                                background: '#F5F7FA 0% 0% no-repeat padding-box',
                                                border: '1px solid #E4E8EE',
                                                borderRadius: '4px',
                                                width: '80px',
                                                height: '22px',
                                            }}
                                        >
                                            <Select
                                                value={addon.discount_type || 'Value'}
                                                onChange={(e) => handleDiscountChangeAddon(index, 'discount_type', e.target.value)}
                                                IconComponent={KeyboardArrowDownIcon}
                                                sx={{ height: '100%', font: 'normal normal bold 12px/16px Nunito Sans', color: '#091B29' }}
                                            >
                                                <MenuItem value="Value" sx={{ font: 'normal normal bold 12px/16px Nunito Sans', color: '#091B29' }}>AED</MenuItem>
                                                <MenuItem value="Percentage" sx={{ font: 'normal normal bold 12px/16px Nunito Sans', color: '#091B29' }}>%</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Box>
                        )}

                        {val === 1 && addon.discount_value !== 0 && (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '8px',pl:'7px', pr:'7px',pt:'5px' }}>
                                <Typography sx={{ font: 'italic normal normal 14px/19px Nunito Sans', color: '#98A0AC' }}>
                                    Discount
                                </Typography>
                                <Typography sx={{ font: 'italic normal 600 12px/16px Nunito Sans', color: '#98A0AC' }}>
                                    {addon.discount_value} {addon.discount_type === "Percentage" ? "%" : ""}
                                </Typography>
                            </Box>
                        )}
                        <Divider sx={{ borderColor: '#E4E8EE', borderWidth: '1px', mt: '10px' }} />
                    </Box>
                ))}

                {components.map((component, index) => (
                    <Box key={index} sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pr: '7px', pt: '7px', pl: '7px' }}>
                            <Typography sx={{ font: 'normal normal 600 14px/19px Nunito Sans', color: '#4E5A6B' }}>
                                {component.name}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Typography sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#4E5A6B' }}>
                                    ${component.item_unit_price * component.quantity}
                                </Typography>
                                {val === 3 && (
                                    <Box sx={{ background: 'ffecec', cursor: 'pointer' }} onClick={() => handleDeleteComponent(component)}>
                                        <img src={Img} alt='bin' />
                                    </Box>
                                )}
                            </Box>
                        </Box>

                        {val === 2 && (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '7px', width: '97%' }}>
                                <Typography sx={{ font: 'italic normal normal 14px/19px Nunito Sans', color: '#98A0AC' }}>
                                    Discount
                                </Typography>
                                <Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
                                        <FormControl sx={{ width: '70px' }} variant="outlined">
                                            <OutlinedInput
                                                value={component.discount_value || ''}
                                                onChange={(e) => handleDiscountChangeComponent(index, 'discount_value', e.target.value)}
                                                inputProps={{
                                                    'aria-label': 'weight',
                                                    placeholder: '10,000',
                                                }}
                                                sx={{ pl: '0px', height: '22px', font: 'italic normal normal 12px/16px Nunito Sans', color: '#98A0AC' }}
                                            />
                                        </FormControl>
                                        <FormControl
                                            sx={{
                                                m: 0,
                                                background: '#F5F7FA 0% 0% no-repeat padding-box',
                                                border: '1px solid #E4E8EE',
                                                borderRadius: '4px',
                                                width: '80px',
                                                height: '22px',
                                            }}
                                        >
                                            <Select
                                                value={component.discount_type || 'Value'}
                                                onChange={(e) => handleDiscountChangeComponent(index, 'discount_type', e.target.value)}
                                                IconComponent={KeyboardArrowDownIcon}
                                                sx={{ height: '100%', font: 'normal normal bold 12px/16px Nunito Sans', color: '#091B29' }}
                                            >
                                                <MenuItem value="Value" sx={{ font: 'normal normal bold 12px/16px Nunito Sans', color: '#091B29' }}>AED</MenuItem>
                                                <MenuItem value="Percentage" sx={{ font: 'normal normal bold 12px/16px Nunito Sans', color: '#091B29' }}>%</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Box>
                        )}

                        {val === 1 && component.discount_value !== 0 && component.discount_value && (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '8px',pl:'7px', pr:'7px',pt:'5px' }}>
                                <Typography sx={{ font: 'italic normal normal 14px/19px Nunito Sans', color: '#98A0AC' }}>
                                    Discount
                                </Typography>
                                <Typography sx={{ font: 'italic normal 600 12px/16px Nunito Sans', color: '#98A0AC' }}>
                                    {component.discount_value} {component.discount_type === "Percentage" ? "%" : ""}
                                </Typography>
                            </Box>
                        )}
                        <Divider sx={{ borderColor: '#E4E8EE', borderWidth: '1px', mt: '10px' }} />
                    </Box>
                ))}
            </Box>

            <Box sx={{ flexShrink: 0, m: '10px' }}>
                <Box sx={{ borderTop: '1px solid #E4E8EE', background: '#e4e8ee', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '5px', mt: '6px', alignSelf: 'center', height: '40px' }}>
                    <Typography sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#091B29', textAlign: 'left', ml:'6px' }}> Final Total </Typography>
                    <Typography sx={{ font: 'normal normal bold 14px/19px Nunito Sans', color: '#091B29', textAlign: 'right', mr: '15px' }}>
                        ${total}
                    </Typography>
                </Box>

                {val===2 && <Button onClick={handleSave} sx={{ background: '#5078E1 0% 0% no-repeat padding-box', color: 'white', width: '100%', height: '45px', mt: '10px', font: 'normal normal bold 14px/19px Nunito Sans', textTransform: 'none' }}>
                    Apply Discount
                </Button> }

                {val===3 && <Button onClick={handleSave} sx={{ background: '#5078E1 0% 0% no-repeat padding-box', color: 'white', width: '100%', height: '45px', mt: '10px', font:'normal normal bold 14px/19px Nunito Sans', textTransform: 'none' }}>
                    Update & Save
                </Button> }
            </Box>
        </Box>
    );
}

export default BillPopup;
