export const state = () => ({
    stock: {
        quantity: 300,
        weight: 100,
    },
    rate: 15,
    MonthlyWeightTarget:1000,
    bought: {
        quantity:0,
        weight: 0,
        value: 0,
    },
    free: {
        quantity:0,
        weight: 0,
        value: 0,
    },
    
});

export const getters =  {
    getStockDetails(state, getters, rootState){
        const details = {
            title: 'Items In Stock',
            rows: [
              {label: 'Quantity', value: state.stock.quantity},
              {label: 'Weight', value: state.stock.weight},
              {label: 'Value', value: `NGN ${state.stock.weight * state.rate}`},
              {label: 'Vendors', value: rootState.vendors.clearedVendors.length}
            ]
          }
          return details
    },
    getPendingDetails(state, getters, rootState){
        const details = {
            title: 'Pending Items',
            rows: [
              {label: 'Quantity', value: 'Unknown'},
              {label: 'Weight', value: state.MonthlyWeightTarget - state.stock.weight},
              {label: 'Value', value: `NGN ${(state.MonthlyWeightTarget - state.stock.weight) * state.rate}`},
              {label: 'Vendors', value: rootState.vendors.allVendors.length - rootState.vendors.clearedVendors.length}
            ]
          }
          return details
    }

}