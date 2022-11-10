import {Landing, Error, Dashboard, Register} from "./Pages/";
import {BrowserRouter, Routes,Route, Link} from 'react-router-dom'



function App() {
  return (
   
    <BrowserRouter>

      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="*" element={<Error/>}/>



    </Routes>

    </BrowserRouter>
   
  );
}

export default App;
