// import { TodoList } from './components/CommentsList/TodoList';
// import Message from './components/Message/Message';
import { Button } from "@mui/material";
// import TextInput from './components/TextInput/textInput';
import s from './styles/App.module.scss';
import { HomePage } from "./components/HomePage/HomePage";
import { AboutPage } from "./components/AboutPage/AboutPage";
import { Box } from "./components/Box/Box";
import { useSelector } from 'react-redux';
import { Provider, useDispatch } from 'react-redux';
// import { useCallback } from "react";
import { changeTheme } from "./redux/slices/ThemeSwitch"
import store from './redux/store';
import Goods from "./components/Goods/Goods";

import { selectItems } from './redux/slices/EditSlice';
import { selectTheme } from './redux/slices/ThemeSwitch.jsx';


import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  const dispatch = useDispatch();

  const currentTheme = useSelector(selectTheme);
  const itms = useSelector(selectItems);

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
      element: <Goods products={itms} />,
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

    <div className={s[currentTheme]}>

      <BrowserRouter>
        <nav className={[s.nav, s[currentTheme]].join(' ')}>

          {routes.map(item => <NavLink className={styleActiveLink} to={item.path}>{item.text}</NavLink>)}
        </nav>
        <Button variant="contained" size="small" color="primary" onClick={() => { dispatch(changeTheme(currentTheme)) }}>{currentTheme}</Button>
        <div className={s[currentTheme]}>

          <Routes>
            {routes.map(item => <Route key={item.path} element={item.element} path={item.path} />)}
          </Routes>
        </div>
      </BrowserRouter>

      
    </div>

  );
}

export default AppWrapper;
