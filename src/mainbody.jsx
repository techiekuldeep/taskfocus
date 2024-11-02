import TaskFocusUser from "./Components/User/taskFocusUser";
import UserReview from "./Components/User/UserReview";
import React from "react";

class MainBody extends React.Component {
    render() {
    const toDoItems = "tasks";
    const stickToSchedule = "deadline";
    return(
        <div style={{ minHeight: "70vh" }}>
      <p>
        On this page, we will display the to do {toDoItems} & aim to do it by {stickToSchedule}.
        using TaskFocus! app.<br />
      </p>
      <ul>
        <li>Call Yasha</li>
        <li>Talk about new TV.</li>
      </ul>
      {/* <div>
        Enter Task : <input maxLength={5} readOnly = {false} placeholder="Kuldeep"></input>
      </div> */}
        <div className ="container row">App Users</div>
            <TaskFocusUser workingHours ={6} name ="Neil Singh" headshot = "https://api.lorem.space/image/face?w=150&h=150"> <UserReview/></TaskFocusUser>
            <TaskFocusUser workingHours ={8} name ="Kuldeep Singh" headshot = "https://api.lorem.space/image/face?w=150&h=150"><UserReview/></TaskFocusUser>
            <TaskFocusUser workingHours ={8} name ="Yasha Aggarwal" headshot = "https://api.lorem.space/image/face?w=150&h=150"><UserReview/></TaskFocusUser>
        </div>
    );
    }
  }

  export default MainBody;