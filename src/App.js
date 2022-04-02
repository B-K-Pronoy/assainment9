
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Friends from './component/Friends/Friends';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1> Welcome to my router project</h1>
            <p> This is first page</p>
     <Routes>
     <Route path="/" element={<Home />}> </Route>
     <Route path="About" element={<About />}></Route>
     <Route path="Friends" element={<Friends></Friends>}></Route>
     <Route path="*" element ={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
