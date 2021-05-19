import Image from "next/image";
import classes from "./main.module.scss";

const Main = () => {
  return (
    <div className={classes.main}>
      <div className="container">
        <div className={classes.content}>
          <div className="classes main__left">
            <h1>Bring Ideas To Reality</h1>
            <p>
              To get the base of your adventure you just need to leave and go
              where you like. We are waiting for you.
            </p>
            <div className={classes.btns}>
              <button>Get started</button>
              <button>Watch video</button>
            </div>
          </div>
          <div className="classes main__right">
            <Image src="/illustration.png" width={960} height={480} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
