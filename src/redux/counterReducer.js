// redux/counterReducer.js
import { INCREMENT, DECREMENT, SET_PLANT_COUNT } from '../redux/actions';

const initialState = {
    plantCount: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, plantCount: state.plantCount + 1 };
        case DECREMENT:
            return { ...state, plantCount: state.plantCount - 1 };
        case SET_PLANT_COUNT:
            return { ...state, plantCount: action.payload };
        default:
            return state;
    }
};

export default counterReducer;
