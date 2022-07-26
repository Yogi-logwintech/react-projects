import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
    cardData: []
}

export function cardItem(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cardData: [...state.cardData, action.data]
            }
        case REMOVE_TO_CART:
            // console.log(state)
            return [
                ...state
            ]
        default:
            return state;
    }
}