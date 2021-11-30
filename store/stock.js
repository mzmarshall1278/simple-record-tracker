export const state = () => ({
    stock: {
        quantity: 300,
        weight: 100,
        value: 1500
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
              {label: 'Value', value: `Unknown`},
              {label: 'Vendors', value: rootState.vendors.allVendors.length - rootState.vendors.clearedVendors.length}
            ]
          }
          return details
    },
    getFreeDetails(state, getters, rootState){
        const details = {
            title: 'Free Items',
            rows: [
              {label: 'Quantity', value: state.free.quantity},
              {label: 'Weight', value: state.free.weight},
              {label: 'Value', value: `NGN ${state.free.value}`},
              {label: 'Vendors', value: rootState.vendors.freeVendors.length}
            ]
          }
          return details
    }

}