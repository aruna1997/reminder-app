import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constants';
export const addReminder = (text,duedate) =>{
const action={
    type:ADD_REMINDER,
    text,
    duedate
}
console.log('Add reminder action',action)
return action;
}
export const deleteReminder=(id)=>{
    const action=
    {
        type:DELETE_REMINDER,
        id
    }
    return action;
}
export const clearReminder=()=>{
    const action=
    {
        type:CLEAR_REMINDER
    }
    return action;
}