import Header from './components/Header/Header.js'
import SignUp from './components/SignUp/SignUp.js'
import Completed from './components/Completed/Completed.js'
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ToDo from './components/ToDo/ToDo.js'

function App() {
  return (
    <div className="App">


<BrowserRouter>
<Header />

  <Routes>
  <Route path="/" element={<SignUp/>}/>
  <Route path="/todo" element={<ToDo/>}/>
  <Route path="/completed" element={<Completed/>}/>
  </Routes>
</BrowserRouter>

     
      
    </div>
  );
}

export default App;
