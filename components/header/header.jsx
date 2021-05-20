import Image from "next/image";
import CustomLink from "../ui/link/customLink";
import Button from "../ui/button/button";
import ArrowCircle from "../../icons/arrow-circle";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className="container-md">
        <div className={classes.navbar}>
          <div className={classes.menu}>
            <div className={classes.logo}>
              <Image src="/logo.png" width={64} height={32} />
            </div>
            <div className={classes.links}>
              <CustomLink href="/" destination="Home" />
              <CustomLink href="/" destination="About" />
              <CustomLink href="/" destination="Portfolio" />
              <CustomLink href="/" destination="Services" dropdown />
              <CustomLink href="/" destination="Contact" />
            </div>
          </div>
          <div className={classes.btn}>
            <Button Icon={ArrowCircle} primary>
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
