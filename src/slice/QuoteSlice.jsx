import { createSlice } from "@reduxjs/toolkit";

function calculateTotalOfAddon(comp, total){
    const totalPrice = comp.reduce((currentTotal, item) => {
        return currentTotal + parseFloat(item.price || 0);
    }, total); 

    return totalPrice; 
}

function calculateTotalOfComponent(comp, total){ 
    const totalPrice =  parseFloat(comp.item_unit_price || 0) * parseInt(comp.quantity) + parseFloat(total)
    return totalPrice; 
}

function overAllTotal(unit) {
    const totalPrice = unit.reduce((currentTotal, item) => {
        let itemTotal = parseFloat(item.price || 0) + parseFloat(item.addonPrice || 0) + parseFloat(item.componentPrice || 0);
        
        item.addons.forEach((addon) => {  
            if (addon.discount_type === 'Value') {
                itemTotal -= parseFloat(addon.discount_value || 0);
            } else if (addon.discount_type === "Percentage") { 
                const discountPercentage = parseInt(addon.discount_value || 0);  
                itemTotal -= (addon.price * discountPercentage) / 100;
            }
        });

        item.components.forEach((comp) => {
            if(comp.discount_type === 'Value'){
                itemTotal -= parseFloat(comp.discount_value || 0);
            }
            else if (item.discount_type === 'Percentage') {
                const discount = parseInt(comp.discount_value || 0)
                itemTotal -= ((comp.item_unit_price * comp.quantity)* discount) / 100
            }
        })

        if (itemTotal < 0) itemTotal = 0;

        return currentTotal + itemTotal;
    }, 0);

    return totalPrice;
}



const initialState = {
    created_by: 2,
    quoted_units: [
        {
            unit_id: '680d3924-3c8f-4787-92db-1b774c8e0b1a', 
            addons: [],
            components: [],
            price: 35000.00,
            addonPrice: 0,
            componentPrice: 0
        },
        {
            unit_id: '92c9ddba-83b2-41a2-a435-c2790f2bb4e6', 
            addons: [],
            components: [],
            price: 15000.00,
            addonPrice: 0,
            componentPrice: 0
        },
        {
            unit_id: 'bd14df40-248b-4b43-962c-96f735edeb03', 
            addons: [],
            components: [],
            price: 40000.00,
            addonPrice: 0,
            componentPrice: 0
        },
        {
            unit_id: 'fa6c2eb3-5873-440d-a5d5-fba53826d454', 
            addons: [],
            components: [],
            price: 22000.00,
            addonPrice: 0,
            componentPrice: 0
        },
    ], 
    total: 112000.00
 }

const QuoteSlice = createSlice({
    name: "Quote",
    initialState: initialState,
    reducers: {
        addAddon(state, action) {
            const { id, addon } = action.payload;
            const unit = state.quoted_units.find(unit => unit.unit_id === id);
        
            if (unit) {
                let updatedAddons = [...unit.addons];
        
                addon.forEach(newAddon => {
                    const isValidAddon = (
                        (newAddon.amenity_id !== null && newAddon.amenity_id !== "null") ||
                        (newAddon.utility_id !== null && newAddon.utility_id !== "null")
                    ) && 
                    newAddon.price !== null && 
                    newAddon.name !== null && 
                    newAddon.discount_value !== null;

                    const addonExists = updatedAddons.some(existingAddon =>
                        (existingAddon.amenity_id && existingAddon.amenity_id === newAddon.amenity_id) || 
                        (existingAddon.utility_id && existingAddon.utility_id === newAddon.utility_id)
                    );

                    if (isValidAddon && !addonExists) {
                        updatedAddons.push(newAddon);
                    }
                });
                const updatedUnit = {
                    ...unit,
                    addons: updatedAddons, 
                    addonPrice: calculateTotalOfAddon(updatedAddons, 0)
                };
                state.quoted_units = state.quoted_units.map(item =>
                    item.unit_id === id ? updatedUnit : item
                );
                state.total = overAllTotal(state.quoted_units);
            }
        },
        
        addComponent(state, action) {
            const { id, component } = action.payload;
            const unit = state.quoted_units.find(unit => unit.unit_id === id)
            
            if (unit) {
              const componentExists = unit.components.some(
                existingComponent => existingComponent.pricing_id === component.pricing_id
              );

              if(componentExists){
                unit.components = unit.components.map(item => 
                    item.pricing_id===component.pricing_id ? component : item
                )
              }
              
              if (!componentExists) {
                unit.components.push(component);
              }
            }

            unit.componentPrice = calculateTotalOfComponent(component, unit.componentPrice);
            state.total = overAllTotal(state.quoted_units);
          },
          

      removeUnit(state, action){
        const id = action.payload;
        state.quoted_units = state.quoted_units.filter(unit => unit.unit_id !== id);
        state.total = overAllTotal(state.quoted_units)
      },

      addDiscount(state, action) {
        const data = action.payload
        state.quoted_units = data
        state.total = overAllTotal(state.quoted_units)
      },

      removeAddon(state, action) {
        const { id, addon } = action.payload;
    
        const unit = state.quoted_units.find(item => item.unit_id === id);
    
        if (unit) {
            const newAddons = unit.addons.filter(item => 
                !(item.amenity_id === addon.amenity_id && item.utility_id === addon.utility_id)
            );
    
            const updatedUnit = {
                ...unit,
                addons: newAddons
            };

            updatedUnit.addonPrice = calculateTotalOfAddon(updatedUnit.addons, 0)
    
            state.quoted_units = state.quoted_units.map(item =>
                item.unit_id === id ? updatedUnit : item
            );
        }
    
        state.total = overAllTotal(state.quoted_units);
     },

    removeComponent(state, action) {
        const {id, component} = action.payload;
        const unit = state.quoted_units.find(item => item.unit_id === id);
    
        if (unit) {
            const newComponents = unit.components?.filter(item => 
                item.pricing_id !== component.pricing_id
            );
    
            const updatedUnit = {
                ...unit,
                components: newComponents,
                componentPrice: calculateTotalOfComponent(newComponents, 0)
            };
    
            state.quoted_units = state.quoted_units.map(item =>
                item.unit_id === id ? updatedUnit : item
            );
        }

        state.total = overAllTotal(state.quoted_units);
    },

    reset(state, action) {
       window.location.reload(true)
    }
      
    }
    
    
})

export const {addAddon, addComponent, removeUnit, addDiscount, removeAddon, removeComponent, reset} = QuoteSlice.actions;

export const QuoteReducer = QuoteSlice.reducer;