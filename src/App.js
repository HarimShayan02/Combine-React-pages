import './App.css';
import Home from './Pages/Home/Home';
import SecondPage from './Pages/SecondPage/SecondPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
   {/* <h1>Header</h1> */}
   <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path='/second' element={<SecondPage/>} />
    </Routes>
  </BrowserRouter>
   {/* <h1>Footer</h1> */}

    </div>
  );
}

export default App;
