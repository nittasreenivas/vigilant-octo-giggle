
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Projects from './Components/Projects';
import Signin from './Components/Signin';
import Navigation from './Components/Navigation';
import Doggie from './Components/Doggie';
import DummyProd from './Components/Dummyprod';
import Fakestore from './Components/Fakestore';
import Dummydesc from './Components/Dummydesc';
import Fakestoredesc from './Components/Fakestoredesc';
import DoggieDesc from './Components/DoggieDesc';
//import Fakestoredesc from './Components/Fakestoredesc';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/projects" element={<Projects/>}>
          <Route path = "doggie" element={<Doggie/>}/>
          <Route path = "dummy" element={<DummyProd/>}/>
          <Route path="fakestore" element={<Fakestore/>}/>
          </Route>
        <Route path = "/signin" element={<Signin/>}/>
        <Route path = "/projects/dummy/:id" element={<Dummydesc/>}/>
        <Route path = "/projects/fakestore/:id" element={<Fakestoredesc/>}/>
        <Route path = "/projects/doggie/:name" element={<DoggieDesc/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
