import React from "react";

const Message = (props) => {
    return (
        <div className="msg">
            <h2 className="msg_header">{props.hed}</h2>
            <p className="msg_par">{props.txt}</p>
        </div>
    );
}

export default Message;