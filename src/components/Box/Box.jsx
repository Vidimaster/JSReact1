import classNames from "classnames";
import s from "./Box.module.css";

export const Box = ({ customStyle, style, children }) => (
  <div className={classNames(s.container, customStyle)} style={style}>
    {children}
  </div>
);
