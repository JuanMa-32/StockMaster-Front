export const TransaccionReducer = (state = [],action) => {
    switch (action.type) {
        case 'loadingVentas':
            return action.payload
    
        default:
            state;
    }
}