import classes from "./button.module.scss";
import clsx from "clsx";

const Button = {
  // eslint-disable-next-line react/prop-types,no-unused-vars
  DELETE: ({className = "", ...props}) => <button className={clsx(className, classes.delete)} {...props}>DELETE</button>,
  // eslint-disable-next-line react/prop-types
  Info: ({children, className, ...props}) => <button className={clsx(className, classes.edit)} {...props}>{children}</button>,
};

export default Button;
