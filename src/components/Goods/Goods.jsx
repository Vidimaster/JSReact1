import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { deleteItem } from "../../redux/slices/EditSlice"
import Forms from "../InputForm/InputForm";

function Goods({ products }) {
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
                    </li>
                )}
            </ul>

            <Forms />
        </div>
    );
}

export default Goods;