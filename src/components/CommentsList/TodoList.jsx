import * as React from 'react';
import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import Chip from '@mui/material/Chip';

export function TodoList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const [value, setValue] = useState('');

    function del(id) {
        setComments(comments.filter((comment) => comment.id !== id));
    }

    const updateValue = (e) => {
        setValue(e.target.value)
    }

    const addList = () => {
        const newArray = [...comments, { text: value, id: crypto.randomUUID() }]; // Date.now()
        setComments(newArray);
        setValue('');
    }

    return (
        <List sx={{ width: '100%' }}>
            <TextField

                label="Новый пункт"
                name=""
                onChange={updateValue}
                value={value}
                id="Text-inputTodo"
                margin="dense"
            />
            <Chip
                label="Добавить в список"
                onClick={addList}
                deleteIcon={<DoneIcon />}
            />
            {comments.map((value) => (
                <ListItem
                    key={value.id}
                    secondaryAction={

                        <Chip
                            label="Удалить из списка"
                            onClick={() => del(value.id)}
                            deleteIcon={<DeleteIcon />}
                            variant="outlined"
                        />
                    }
                >
                    <ListItemText primary={`To do: ${value.text}`} />
                </ListItem>
            ))}
        </List>
    );
}
