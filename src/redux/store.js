import {createStore} from 'redux';
import { devToolsEnhancer } from "redux-devtools-extension";
import { phoneReducer} from './phoneReducer';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' 
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// const reducer= (state={
//     contacts: [],
//     filter: ''
// }, action)=>state

// const rootReducer=combineReducers({
//     contacts
// })
const persistConfig={
    key: "root",
    storage,
    whitelist: ['contacts']
}


const rootReducer = combineReducers({
    phoneReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const persistedReducer=persistReducer(persistConfig, phoneReducer)
// const store=createStore(persistedReducer,devToolsEnhancer())

const store = configureStore({
reducer: persistedReducer
})
export default store 