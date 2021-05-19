import classes from "./header.module.scss";
import CustomLink from "../ui/link/customLink";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className="container">
        <div className={classes.navbar}>
          <div className={classes.logo}>
            <h1>Logo</h1>
          </div>
          <div className={classes.links}>
            <CustomLink href="/" destination="Home" />
            <CustomLink href="/" destination="About" />
            <CustomLink href="/" destination="Portfolio" />
            <CustomLink href="/" destination="Services" dropdown />
            <CustomLink href="/" destination="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
