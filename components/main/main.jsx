import classes from "./main.module.scss";

const Main = () => {
  return (
    <div className={classes.main}>
      <div className="container">
        <div className={classes.content}>
          <div className="classes main__left">
            <h1>Left part</h1>
          </div>
          <div className="classes main__right">
            <h1>Right part</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
