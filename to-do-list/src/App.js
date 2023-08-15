import Header from './components/Header/Header.js'
import SignUp from './components/SignUp/SignUp.js'
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ToDo from './components/ToDo/ToDo.js'

function App() {
  return (
    <div className="App">

<Header />

<BrowserRouter>
  <Routes>
  <Route path="/" element={<SignUp/>}/>
  <Route path="/todo" element={<ToDo/>}/>
  </Routes>
</BrowserRouter>

     
      
    </div>
  );
}

export default App;
