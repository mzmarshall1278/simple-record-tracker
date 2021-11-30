export const state = () => ({
    clearedVendors: [
        {name: 'Sabiu', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Saminu', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Ashiru', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Rabilu', number: '09087654321', address: 'no 9, hankaka road'},
    ],
    allVendors: [
        {name: 'Auwal', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Sani', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Salisu', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Rabiu', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Hamisu', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Tasiu', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Sabiu', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Saminu', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Ashiru', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Rabilu', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Bush Camel', number: '09087654321', address: 'no 9, hankaka road'},
    ],
    freeVendors: [
        {name: 'Uncle Camel', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Desert Camel', number: '09087654321', address: 'no 9, hankaka road'},
        {name: 'Arab Camel', number: '09087654321', address: 'no 9, hankaka road'},
    ]
});

export const getters = {
    showVendors(state){
        return state.allVendors;
    },
}