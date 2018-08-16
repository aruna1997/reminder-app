import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constants';
import { read_cookie , bake_cookie} from 'sfcookies';

const reminder=(action)=>{
  let { text,duedate } =action;
    return{
        id:Math.floor(Math.random()*10),
        text,
        duedate
    }
    console.log('action',action);
}
const deleteit=(state=[],id)=>{
  const reminders=state.filter(reminder => reminder.id!==id)
  return reminders;
}

const reminders = (state=[],action) =>{
  let reminders=null;
  state=read_cookie('reminders');
  switch(action.type)
  {
    case ADD_REMINDER:
    reminders=[...state,reminder(action)]
    console.log('reminder of add',reminders);
    bake_cookie('reminders',reminders);
    return reminders;
    case DELETE_REMINDER:
    reminders=deleteit(state,action.id)
    bake_cookie('reminders',reminders);
    return reminders;
    case CLEAR_REMINDER:
    reminders=[];
    bake_cookie('reminders',reminders);
    return reminders;
    default:
    return state;
  }
}
export default reminders;