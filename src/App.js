import logo from './logo.svg';
import './App.css';
import HandleName from './profile/profile';
import raed from "./raed.jpg" ; 


const styleobject = {  width:" 50%" , height : "50%" } ; 
function App() {
  const alertName = (name,bio,profession) => {
   alert(name) 

   
  }
  
  return (
    <div className="App">
      <HandleName alertName={alertName} > <img style={styleobject}  src={raed} />  </HandleName>
    </div>
  );
}

export default App;
