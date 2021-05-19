import classes from "./button.module.scss";

const Button = ({ children, Icon }) => {
  return (
    <button className={classes.button}>
      <span>{children}</span>
      {Icon && <Icon className={classes.icon} />}
    </button>
  );
};

export default Button;
