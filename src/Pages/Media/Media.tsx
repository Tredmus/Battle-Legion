import classes from "./Media.module.scss";
import { Video } from "../../Components/Video/Video";

export const Media = () => {
  return (
    <div className={`${classes.page} ${classes.history}`}>
      <h2 className={classes.heading}>Медия</h2>
      <div className={classes.body}>
        <ul>
          <li>
            <Video
              link="https://www.youtube.com/embed/w0JaeJzgVIs"
              title={"Renaissance Kingdoms Battle Legion Bulgaria 1470"}
              date={"26.11.1470"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
