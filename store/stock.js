export const state = () => ({
    stock: {
        quantity: 0,
        weight: 0,
        value: 0
    },
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
            title: 'In Stock',
            rows: [
              {label: 'Quantity', value: state.stock.quantity},
              {label: 'Weight', value: state.stock.weight},
              {label: 'Value', value: `NGN ${state.stock.Value}`},
              {label: 'Vendors', value: rootState.vendors.clearedVendors.length}
            ]
          }
          return details
    }
}