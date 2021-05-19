import React from "react";
import classes from "./button.module.scss";

const Button = ({ children, Icon, primary, primary_fill, secondary }) => {
  return (
    <React.Fragment>
      {primary && (
        <button className={classes.primary}>
          <span>{children}</span>
          {Icon && <Icon className={classes.icon} />}
        </button>
      )}
      {primary_fill && (
        <button className={classes.primary_fill}>
          <span>{children}</span>
          {Icon && <Icon className={classes.icon} />}
        </button>
      )}
      {secondary && (
        <button className={classes.secondary}>
          {Icon && <Icon className={classes.icon} />}
          <span>{children}</span>
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;
