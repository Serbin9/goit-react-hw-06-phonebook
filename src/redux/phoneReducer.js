// import actionTypes from "./actionTypes"
// import {createReducer} from '@reduxjs/toolkit'
import {addContant, deleteContact, filterContact} from '../redux/phoneAction'


export const phoneReducer =(state={contacts:[], filter:[]}, {type, payload})=>{
    switch(type){
        case addContant.type:
            return({...state, contacts:[...state.contacts, payload]});
        case deleteContact.type:
            return ({...state, contacts:[...state.contacts.filter(contact => contact.id !== payload)], filter:[...state.filter.filter(contact => contact.id !== payload)]});
        case filterContact.type:
            return ({...state, filter:[...state.contacts.filter(contact=> contact.name.includes(payload))]})
        default:
            return state;
    }
}

// const onAdd = (state, actions)=>({...state, contacts:[...state.contacts, actions.payload]})
// const onDelete = (state, actions)=>({...state, contacts:[...state.contacts.filter(contact => contact.id !== actions.payload)], filter:[...state.filter.filter(contact => contact.id !== actions.payload)]})
// const onFilter = (state, actions)=>({...state, filter:[...state.contacts.filter(contact=> contact.name.includes(actions.payload))]});

// export const phoneReducer = createReducer([],{
//     [addContant.type]:onAdd,
//     [deleteContact.type]:onDelete,
//     [filterContact.type]: onFilter,
// });