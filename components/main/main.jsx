import Image from "next/image";
import BigArrow from "../../icons/big-arrow";
import ArrowRight from "../../icons/arrow-right";
import VideoIcon from "../../icons/video-icon";
import BallObject from "../../icons/animation/ball";
import StarObject from "../../icons/animation/star";
import BigArrowBottom from "../../icons/animation/arrow-bottom";
import Button from "../ui/button/button";
import classes from "./main.module.scss";

const Main = () => {
  return (
    <div className={classes.main}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.main__left}>
            <h1>
              <span className={classes.first}>
                Bring <BigArrow />
              </span>
              <br />
              <span className={classes.second}>Ideas</span> To
              <br />
              <span className={classes.third}>Reality</span>
            </h1>
            <p>
              To get the base of your adventure you just need to leave and go
              where you like. We are waiting for you.
            </p>
            <div className={classes.btns}>
              <Button Icon={ArrowRight} primary_fill>
                Get Started
              </Button>
              <Button Icon={VideoIcon} secondary>
                Watch video
              </Button>
            </div>
          </div>
          <div className={classes.main__right}>
            <Image src="/illustration.png" width={960} height={480} />
          </div>
        </div>
        <BallObject />
        <StarObject />
        <BigArrowBottom />
      </div>
    </div>
  );
};

export default Main;
