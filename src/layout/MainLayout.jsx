import classes from "./layout.module.scss";
import Button from "../components/Buttons.jsx";
import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={classes.layout}>
            <div className={classes.banner}>
                <h1 className={classes.bannerHeading}>CREATORVERSE</h1>
                <div className={classes.buttonContainer}>
                    <Link to={"/"}><Button.Info>VIEW ALL CREATORS</Button.Info></Link>
                    <Link to={"/new"}><Button.Info className={classes.rightButton}>ADD A CREATOR</Button.Info></Link>
                </div>
            </div>
            <div className={classes.content}>
                <Outlet />
            </div>
        </div>
    )
}

export default  MainLayout;