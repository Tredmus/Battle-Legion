import classes from "./Structure.module.scss";
import { Tree } from "../../Components/Tree/Tree";
import { legionaries } from "../../Data/legionaries";

export const Structure = () => {
  return (
    <>
      <div className={classes.background}></div>
      <div className={`${classes.page} ${classes.structure}`}>
        <div className={classes.people__inner}>
          <h2 className={classes.heading}>Структура</h2>
        </div>
        <div className={classes.body}>
          <Tree legionaries={legionaries} />
        </div>
      </div>
    </>
  );
};
