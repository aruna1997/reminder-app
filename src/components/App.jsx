import React,{Component} from 'react';
import '../App.css';
import { addReminder } from '../actions';
import { deleteReminder,clearReminder } from '../actions';
import {connect} from 'react-redux';
import moment from 'moment';


class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            text:'',
            dueDate:'',
            test:''
        }
    }
    
    addReminder(event)
    {
        let time=Date.parse(this.state.dueDate)-Date.parse(new Date());
        if(time>=0)
        {
        this.props.addReminder(this.state.text,this.state.dueDate);
        }
        else
        {
            alert('Reminder date or time is not correct');
            event.preventDefault();
        }
        document.getElementById('message').value="";
        document.getElementById('messagedate').value="";
       
    }
    delReminder(id)
    {
        this.props.deleteReminder(id);
    }
    clearReminder()
    {
        this.props.clearReminder();
    }
   renderReminders()
    {
        const {reminders}=this.props;
        return(
                <ul className="list-group col-sm-4">
                <div>{this.state.test}</div>
                {   
                    reminders.map(reminder=>{
                        return(
                        <li key={reminder.id} className="list-group-item">
                        <div className="list-item">
                        <div>{reminder.text}</div>
                        <div>{moment(new Date(reminder.duedate)).fromNow()}</div>
                        </div>
                        <div className="list-item delete-button" onClick={()=>{this.delReminder(reminder.id)}}>&#x2715;</div>
                        </li>)
                    })
                }
                 </ul>
        );

    }
render()
{
    console.log('this.props',this.props);
    return(
        <div className="App">
        <div className="App-title">Reminder Pro</div>
        <div className="form-inline">
        <div className="form-group">
        <input className="form-control" 
        placeholder="I have to.." 
        id="message"
        onChange={event=>this.setState({text:event.target.value})}
        />
        </div>
        <div className="form-group">
        <input className="form-control" id="messagedate" type="datetime-local" onChange={event=>this.setState({dueDate:event.target.value})}/>
        </div>
        <button type="button"
         className="btn btn-success"
         onClick={this.addReminder.bind(this)}>Add reminder</button>
        </div>
        {this.renderReminders()} 
        <button type="button"
         className="btn btn-danger"
         onClick={this.clearReminder.bind(this)}>Clear reminder</button>
        </div>
    );
}
}
function mapStateToProps(state)
{
    return{
        reminders:state 
       }
}

export default connect(mapStateToProps,{ addReminder,deleteReminder,clearReminder }) (App);