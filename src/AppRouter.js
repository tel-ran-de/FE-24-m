import {
  BrowserRouter as Router, // Роутер, который использует функционал браузера
  Routes, // рендерит первый <Route>, совпавший с URL
  Route, //укажет маршруты path="..." element={<.../>}
} from 'react-router-dom';

import StartPage from './components/StartPage';
import UnoTodo from './UnoTodo';

function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route path="/uno-todo" element={<UnoTodo/>} />
        <Route path="/" element={<StartPage/>} />
        <Route path="*" element={<h1>404<br/>Нет такой страницы</h1>} />
      </Routes>
    </Router>
  )
}


export default AppRouter;
