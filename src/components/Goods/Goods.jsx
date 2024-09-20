import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { deleteItem } from "../../redux/slices/EditSlice"
import Forms from "../InputForm/InputForm";
import { useState } from 'react';


function Goods({ products }) {
    const [mounted, setMounted] = useState(0);

    function InputEdit({ id }) {
        if (id === mounted) {
            return <Forms product={id} />
        }
    }

    const dispatch = useDispatch();
    return (
        <div>
            <ul>
                {products.map(({ id, name, description, price, available }) =>
                    <li key={id}>

                        <h2>{name}</h2>
                        <p>{description}</p>
                        <p>{price}</p>
                        <p>{available === true ? "В наличии" : "Нет в наличии"}</p>
                        <Button onClick={() => {
                            dispatch(deleteItem(id))
                        }}>Удалить</Button>
                        <Button onClick={e => setMounted(id)}>Редактировать</Button>
                        <InputEdit id={id} />
                    </li>
                )}
            </ul>

            <Forms />
        </div>
    );
}

export default Goods;