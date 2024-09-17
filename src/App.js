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
import { useCallback } from "react";
import store from "./redux/themeSwitch";

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

  const setTheme = useCallback((theme) => {
    dispatch({
      type: 'TOGGLE_THEME',
      current_theme: theme === 'light' ? "dark" : "light",
    });
  }, [dispatch]);

  const currentTheme = useSelector(state => state.current_theme);

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

    <div className={s[currentTheme]}>

      <BrowserRouter>
        <nav className={[s.nav, s[currentTheme]].join(' ')}>

          {routes.map(item => <NavLink className={styleActiveLink} to={item.path}>{item.text}</NavLink>)}
        </nav>
        <Button variant="contained" size="small" color="primary" onClick={() => { setTheme(currentTheme) }}>{currentTheme}</Button>
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
