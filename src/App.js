import './styles/App.scss';
import { TodoList } from './components/CommentsList/TodoList';
import Message from './components/Message/Message';
import { Button } from "@mui/material";
import TextInput from './components/TextInput/textInput';

function App() {
  return (
    <div className="App">

      {/* <Message /> */}
      {/* <Button variant="contained">Contained</Button> */}
      <h2>Задание 1: Температурный конвертер с Material UI</h2>
      <TextInput />
      <h2>Задание 2: Список дел с Material UI</h2>
      <TodoList />

    </div>

  );
}

export default App;
