import React from "react";
import style from "./button.module.css";
import cn from "classnames";
import { IoIosArrowDropright } from "react-icons/io";

function Button({ use, title, icon, theme, size = "m", disabled }) {
  return (
    <button
      className={cn(
        style.btn,
        style[`btn--${use}-${theme}`],
        style[`btn--${theme}`],
        style[`btn--${size}`],
        !title && style[`btn--icon-${size}`]
      )}
      disabled={disabled}
    >
      {title}
      {icon ? <IoIosArrowDropright /> : null}
    </button>
  );
}

export default Button;