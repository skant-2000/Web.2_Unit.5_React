import { createStore } from "redux"
import { initialState } from "./constant"
import { reducer } from "./reducer"

export const store = createStore(reducer, initialState)