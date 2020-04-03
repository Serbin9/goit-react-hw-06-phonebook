import actionTypes from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";
// ДЗ 6 шаг 1 
// export const deleteContact= e =>({
// type:actionTypes.DELETE,
// payload: e.target.id
// })
export const deleteContact=createAction("DELETE_CONTACT")
// export const addContant = contact=>({
//     type: actionTypes.ADD,
//     payload: contact
// })
export const addContant=createAction("ADD")

// export const filterContact= value =>({
//     type: actionTypes.FILTER,
//     payload: value
// })
export const  filterContact=createAction("FILTER")