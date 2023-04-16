import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import changeState from '../slices/changeScreenSlice'

export function makeStore() {
    return configureStore({
        reducer: {
            "screenData": changeState, 
        }
    })
}
export const store = makeStore();

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
export default { store };




