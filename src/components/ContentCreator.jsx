import Button from "./Buttons";
import classes from "./components.module.scss";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ContentCreator = ({id, imageURL, description, name, youtube, twitter, instagram, onDelete }) => {
  return (
    <div className={classes.viewCreatorPage}>
      <div className={classes.creatorDetails}>
        <img className={classes.creatorImg} src={imageURL} />
        <div className={classes.detailsHolder}>
          <h1 className={classes.creatorName}>{name}</h1>
          <p className={classes.description}>{description}</p>
            {youtube && <a className={classes.socialLink} target={'_blank'} href={`https://www.youtube.com/@` + youtube}><span className={"fa-brands fa-youtube"}> </span> <p className={classes.socialHandle}>@{youtube}</p></a>}
            {twitter && <a className={classes.socialLink} target={'_blank'} href={`https://www.twitter.com/@` + twitter}><span className={'fa-brands fa-twitter'}></span> <p className={classes.socialHandle}>@{twitter}</p></a>}
            {instagram && <a className={classes.socialLink} target={'_blank'} href={`https://www.instagram.com/@` + instagram}><span className={'fa-brands fa-instagram'}></span> <p className={classes.socialHandle}>@{instagram}</p></a>}
        </div>
      </div>
      <div className={classes.buttonContainer}>
          <Link to={`/edit/${id}`}><Button.Info>Edit</Button.Info></Link>
        <Button.DELETE className={classes.margBut} onClick={() => onDelete()} />
      </div>
    </div>
  );
};

export default ContentCreator;
