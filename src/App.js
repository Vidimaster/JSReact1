// import { TodoList } from './components/CommentsList/TodoList';
// import Message from './components/Message/Message';
// import { Button } from "@mui/material";
// import TextInput from './components/TextInput/textInput';
import s from './styles/App.module.scss';
import { HomePage } from "./components/HomePage/HomePage";
import { AboutPage } from "./components/AboutPage/AboutPage";
import { Box } from "./components/Box/Box";

import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const routes = [
    {
      path: "/",
      element: <HomePage />,
      text: "Главная",
    },
    {
      path: "/about",
      element: <AboutPage />,
      text: "О нас",
    },
    {
      path: "/arr",
      element: <Box />,
      text: "Товары",
    },
    {
      path: "/txt",
      element: <Box />,
      text: "Текст",
    },
  ];


  const styleActiveLink = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };
  return (

    <div className="App">
      <BrowserRouter>
        <nav className={s.nav}>

          {routes.map(item => <NavLink className={styleActiveLink} to={item.path}>{item.text}</NavLink>)}
        </nav>
        <Routes>
          {routes.map(item => <Route key={item.path} element={item.element} path={item.path} />)}
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
