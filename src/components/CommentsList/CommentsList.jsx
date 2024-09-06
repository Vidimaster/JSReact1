import { useState } from "react";

export function List() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const newDataList = [...comments].map(elem => ({
        text: elem.text,
        id_unique: crypto.randomUUID(),
    }));

    function del(id_unique) {
        const newList = newDataList.filter((item) => item.id_unique !== id_unique);
        setComments(newList);
    }
    const listItems = newDataList.map((element) => {
        return (
            <div>
                <ul type="disc" className="item">
                    <li key={element.id_unique}>
                        {element.text}
                    </li>
                </ul>
                <div><a href="#" className="btn" onClick={() => del(element.id_unique)}>Удалить комментарий</a></div>
            </div>
        );
    });

    return <div className="container">{listItems}</div>;
}
