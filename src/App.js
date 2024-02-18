
import Navbar from './Components/navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import ThisSummer from './Components/ThisSummer';
import About from './Components/About';
 import Login from './Components/Login';
// 
import './App.css';

// import Form1 from './Components/form';

function App() {
  return (
    <div className="container">
       
        <Navbar/>
      <Header/>
      <Feature/>
      <ThisSummer/>
      <About/>  
      { /*<Form1/> */}
        <Login/>  
      
    </div>
  );
}

export default App;
