import { STORE_USERDATA } from "./actionType"

export const reducer = (state, {type, payload}) => {
    switch (type) {
        case STORE_USERDATA: {
            return {...state, userName: payload}
        }
        default: {
            return state
        }
    }
}