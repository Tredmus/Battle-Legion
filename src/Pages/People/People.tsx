import { useState } from "react";
import classes from "./People.module.scss";
import { legionaries } from "./legionaries";
import { Legionary } from "../../Components/Legionary/Legionary";
import { Tree } from "../../Components/Tree/Tree";

export const People = () => {
  const filters = [
    "All",
    "Battle Legion - OG",
    "Battle Legion - First Legion",
    "Battle Legion - Second Legion",
  ];

  const [filterIndex, setFilterIndex] = useState(0);

  const filterPeople = () => {
    switch (filterIndex) {
      case 1:
        return legionaries.filter((legionary) => legionary.legion === "OG");
      case 2:
        return legionaries.filter((legionary) => legionary.legion === "First");
      case 3:
        return legionaries.filter((legionary) => legionary.legion === "Second");
      default:
        return legionaries;
    }
  };
  const filtered = filterPeople();

  return (
    <div className={`${classes.page} ${classes.people}`}>
      <div className={classes.people__inner}>
        <h2 className={classes.heading}>Легионерите</h2>
        <ul className={classes.menu} id="menu">
          <div className={classes.tree}>
            <Tree legionaries={legionaries} />
          </div>
          {filters.map((filter, index) => {
            return (
              <li
                className={`${index === filterIndex ? classes.active : ""}`}
                key={index}
                onClick={() => setFilterIndex(index)}
              >
                {filter}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.body}>
        <div className={classes.legionaries}>
          {filtered &&
            filtered.map((legionary) => <Legionary {...legionary} />)}
        </div>
      </div>
    </div>
  );
};
