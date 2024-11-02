import {faker} from "@faker-js/faker";
import React from "react";
// export default function TaskFocusUser(props){
    // const fullName = "Kabir Singh";
    // const workHours = 8;
    class TaskFocusUser extends React.Component {
    render(){
      return(
      <div className="col-4 p-1">
       <div className="row border">
       <div className ="col-2">
       {/* <img src={`https://ui-avatars.com/api/?name=${props.name}`}className = "w-100"> */}
       <img src={faker.image.avatar()} className = "w-100">
       {/* <img src={props.headshot} className = "w-100"> */}
       </img>
        </div>
        <div className ="col-8">
        {this.props.name}<br/>
        Working Hours {this.props.workingHours} hours
        </div>
        <div className="col-2">{this.props.children}</div>
       </div>
       </div>
     );
    }
}

export default TaskFocusUser;