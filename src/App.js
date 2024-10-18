import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Pages/Singin';
import Login from './login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign'element = {<Signin></Signin>}></Route>
        <Route path='/' element = {<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
