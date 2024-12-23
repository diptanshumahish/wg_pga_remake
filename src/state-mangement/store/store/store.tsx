import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import changeState from "../slices/changeScreenSlice";
import FirebaseState from "../slices/firebaseinit";
import authStat from "../slices/authState";
import profilePic from "../slices/profilePic";
import uid from "../slices/uid";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import storeEmail from "../slices/storeEmail";
import formEnabe from "../slices/formEnabe";
import formState from "../slices/formState";
import leaveEnable from "../slices/leaveEnable";

import countTime from "../slices/countTime";
import enableBreak from "../slices/enableBreak";
import subTractBreak from "../slices/subTractBreak";
import updateEnable from "../slices/updateEnable";
import enableSignout from "../slices/enableSignout";
import enableMail from "../slices/enableMail";
import storeHtml from "../slices/storeHtml";
import notes from "../slices/notes";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducers = combineReducers({
  screenData: changeState,
  FirebaseState: FirebaseState,
  authState: authStat,
  profPic: profilePic,
  uid: uid,
  email: storeEmail,
  formEnable: formEnabe,
  formState: formState,
  countTime: countTime,
  leaveEnable: leaveEnable,
  enableSignout: enableSignout,
  breakEnable: enableBreak,
  subtractBreak: subTractBreak,
  updateEnable: updateEnable,
  enableMail: enableMail,
  changeHtml: storeHtml,
  note: notes,
});
const perReducer = persistReducer(persistConfig, reducers);

export function makeStore() {
  return configureStore({
    reducer: perReducer,
    middleware(getDefaultMiddleware) {
      getDefaultMiddleware({
        thunk: true,
        immutableCheck: false,
      });
      return [];
    },
  });
}
export const store = makeStore();

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
const perStore = persistStore(store);
export default { store };
export { perStore };
