import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<Landing></Landing>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/edit' element={<Edit></Edit>}></Route>

        </Routes>
      
    </div>
  );
}

export default App;
