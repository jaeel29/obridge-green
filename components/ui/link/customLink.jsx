import Link from "next/link";
import ArrowBottom from "../../../icons/arrow-bottom";
import classes from "./customLink.module.scss";

const CustomLink = ({ destination, href, dropdown }) => {
  return (
    <Link href={href}>
      {dropdown ? (
        <a className={classes.dropdown__link}>
          {destination} <ArrowBottom />
        </a>
      ) : (
        <a className={classes.normal__link}>{destination}</a>
      )}
    </Link>
  );
};

export default CustomLink;
