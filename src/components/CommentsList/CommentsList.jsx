import { useState } from "react";

export function List() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    function del(id){
        const newList = comments.filter((item) => item.id !== id);
    
        setComments(newList);
    }
    const listItems = comments.map((element) => {
        return (
            <ul id={element.id} type="disc" className="item">

                <li>

                    {element.text}
                    
                </li>
                <div><a href="#" className="btn" onClick={() => del(element.id)}>Удалить комментарий</a></div>
            </ul>
            
        );
    });

    return <div className="container">{listItems}</div>;
}
