import { useState } from 'react';
import { TextField } from '@mui/material';

function TextInput() {
    const [valueTxt, setValue] = useState({
        val1: '',
        val2: '',
    });
    const updateC = e => setValue({
        val2: e.target.value,
        val1: (+e.target.value * 9 / 5 + 32)
    })

    const updateF = e => setValue({
        val2: ((+e.target.value - 32) * 5 / 9),
        val1: e.target.value
    })

    return (
        <div>

            <TextField

                label="Фаренгейт"
                name="val1"
                value={valueTxt.val1}
                id="Text-input2"
                margin="dense"
                onChange={updateF}
            />
            <TextField

                label="Цельсий"
                name="val2"
                value={valueTxt.val2}
                id="Text-input1"
                margin="dense"
                onChange={updateC}
            />

        </div>

    );
}

export default TextInput;