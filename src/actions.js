import { EDIT, DELETE, ADD, DELETETRACT } from "./types"




export const edit = (payload, index) => {
    return {
        type:EDIT,
        payload, 
        index
    }
}
export const add = (payload) => {
    return {
        type:ADD,
        payload
    }
}
export const deleteSubowner = (payload, tractIndex) => {
    return {
        type:DELETE,
        payload,
        tractIndex
    }
}
export const deleteTract = (payload) => {
    return {
        type:DELETETRACT,
        payload
    }
}