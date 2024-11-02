import logo from "../images/react.png";

function MainHeader(){
    return( 
       <div className="pt-2 py-1 p1-2" style={{backgroundColor: "black"}}>
        <img src={logo} style={{ height: "35px", verticalAlign: "top" }}></img>
        <span className="h2 pt-4 text-white-50">React Project - TaskFocus</span>
       </div>
    ); 
  }
  
const subHeaderStyle={
    color: "blueVoilet",
    backgroundColor: "lightgray"
  }
  
function SubHeader(){
    return  <p style={subHeaderStyle} className="text-center">This would help you to improve your skills.</p>
}
  

const Header=()=>{
    return(
      <div>
     <MainHeader></MainHeader>
     <SubHeader></SubHeader>
    </div>);
}

export default Header;
