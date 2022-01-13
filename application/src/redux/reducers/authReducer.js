import { LOGIN, LOGOUT } from '../actions/types'

const INITIAL_STATE = { email: '', token: null };

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case LOGIN:
            return { ...state, email: action.payload.email, token: action.payload.token }
        case LOGOUT:
            return { ...state, ...INITIAL_STATE }
        default:
            return state;
    }
}