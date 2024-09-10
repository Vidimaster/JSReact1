import React from "react";
import { PropTypes } from "prop-types";

const Message = (props) => {
    return (
        <div className="msg">
            <h2 className="msg_header">{props.hed}</h2>
            <p className="msg_par">{props.txt}</p>
        </div>
    );
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Message;