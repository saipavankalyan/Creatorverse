import classes from "./creatorCard.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CreatorCard = ({
  id,
  name,
  description,
  imageURL,
  youtube,
  twitter,
  instagram,
}) => {
  return (
    <div
      className={classes.creatorCard}
      style={{
        background: `url(${imageURL})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "75%",
      }}
    >
      <div className={classes.divContainer}>
        <div className={classes.nameContainer}>
          <div className={classes.name}>{name}</div>
          <div className={classes.icons}>
            <Link to={`${id}`}>
              <span className={clsx(classes.icon, "fa-solid fa-circle-info")} />
            </Link>
            <Link to={`/edit/${id}`}>
              <span
                className={clsx(classes.icon, "fas fa-edit")}
                style={{ marginBottom: "-5px" }}
              />
            </Link>
          </div>
        </div>
        <div className={classes.socialIconContainer}>
          {youtube && (
            <a target={"_blank"} href={`https://www.youtube.com/@` + youtube}>
              <span
                className={clsx(classes.socialIcon, "fa-brands fa-youtube")}
              >
                {" "}
              </span>{" "}
            </a>
          )}
          {twitter && (
            <a target={"_blank"} href={`https://www.twitter.com/@` + twitter}>
              <span
                className={clsx(classes.socialIcon, "fa-brands fa-twitter")}
              >
                {" "}
              </span>{" "}
            </a>
          )}
          {instagram && (
            <a
              target={"_blank"}
              href={`https://www.instagram.com/` + instagram}
            >
              <span
                className={clsx(classes.socialIcon, "fa-brands fa-instagram")}
              >
                {" "}
              </span>{" "}
            </a>
          )}
        </div>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default CreatorCard;
