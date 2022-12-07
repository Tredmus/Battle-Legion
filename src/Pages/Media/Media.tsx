import classes from "./Media.module.scss";
import { Video } from "../../Components/Video/Video";

export const Media = () => {
  return (
    <>
      <div className={classes.background}></div>
      <div className={`${classes.page} ${classes.history}`}>
        <h2 className={classes.heading}>Медия</h2>
        <div className={classes.body}>
          <ul>
            <li>
              <Video
                link="https://www.youtube.com/embed/w0JaeJzgVIs"
                title={"Поход на Боен Легион срещу ОНЕ 1470 - Част I"}
                date={"26.11.1470"}
                description={
                  "Лето 1470-то за пръв път е избран български цар - Faraonqbg, който обявява поход срещу ОНЕ. Похода е белязан от успехи и предателства."
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
