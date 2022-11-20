import React from "react";
import classes from "./About.module.scss";
import about from "../../Assets/Images/about.png";

export const About = () => {
  return (
    <div className={`${classes.page} ${classes.about}`}>
      <h2 className={classes.heading}>Боен Легион</h2>
      <div className={classes.body}>
        <div className={classes.row}>
          <div className={classes.block}>
            <img src={about} alt="about" className={classes.picture} />
          </div>

          <div className={classes.block}>
            <h3>Кои са Боен Легион?</h3>
            <p>
              When I hear the buzz of the little world among the stalks, and
              grow familiar with the countless indescribable forms of the
              insects and flies, then I feel the presence of the Almighty, who
              formed us in his own image, and the breath of that universal love
              which bears and sustains us, as it floats around us in an eternity
              of bliss; and then, my friend, when darkness overspreads my eyes,
              and heaven and earth seem to dwell in my soul and absorb its
              power, like the form of a beloved mistress, then I often think
              with longing
            </p>
          </div>
        </div>
        <div className={classes.block}>
          <h3 className={`${classes.heading} ${classes.subheading}`}>
            Статистика
          </h3>
          <ul className={classes.stats}>
            <li>
              <span>Подкланове</span>
              <span>3</span>
            </li>
            <li>
              <span>Членове</span>
              <span>70</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
