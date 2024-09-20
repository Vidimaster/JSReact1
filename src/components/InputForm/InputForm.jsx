import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { addItem } from "../../redux/slices/EditSlice"
import * as React from 'react';
import { useState } from "react";

function InpForm ({ product })  {
   
    const dispatch = useDispatch();
    const [data, setData] = useState({})
    const [isChecked, setIsChecked] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleIsChecked = (e) => {
        setIsChecked(!isChecked)
        setData({ ...data, "available": !isChecked });
             
    };
    return (
        <form >
            <div>
                <label htmlFor="Name">Наименование</label>
                <input name="name" type="text" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="Desc">Описание</label>
                <input name="description" type="text" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="Price">Цена</label>
                <input name="price" type="text" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="Availability">Доступность</label>
                <input type="checkbox" id="avai" name="available" checked={isChecked} onChange={handleIsChecked} />
            </div>
            <Button onClick={() => {
                const inputs = { id: crypto.randomUUID(), ...data }
                dispatch(addItem(inputs))
            }}>Добавить</Button>
        </form>
    )
}

export default InpForm