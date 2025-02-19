import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PatientForm from "./components/patientForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='pages'>
      <Routes>
        <Route
          path='/'
          element = {<Home/>}
        />
      </Routes>          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
