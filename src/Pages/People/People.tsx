import { useState } from "react";
import classes from "./People.module.scss";
import { legionaries } from "../../Data/legionaries";
import { Legionary } from "../../Components/Legionary/Legionary";

export const People = () => {
  const filters = [
    "Images/banner-0.png",
    "Images/banner-1.png",
    "Images/banner-2.png",
    "Images/banner-3.png",
  ];

  const [filterIndex, setFilterIndex] = useState(-1);

  const filterPeople = () => {
    switch (filterIndex) {
      case 0:
        return legionaries.filter((legionary) => legionary.legion === "OG");
      case 1:
        return legionaries.filter((legionary) => legionary.legion === "First");
      case 2:
        return legionaries.filter((legionary) => legionary.legion === "Second");
      case 3:
        return legionaries.filter((legionary) => legionary.legion === "Third");
      default:
        return legionaries;
    }
  };
  const filtered = filterPeople();

  return (
    <>
      <div className={classes.background}></div>
      <div className={`${classes.page} ${classes.people}`}>
        <div className={classes.people__inner}>
          <h2 className={classes.heading}>Легионерите</h2>
          <ul className={classes.menu} id="menu">
            {filters.map((filter, i) => {
              return (
                <li
                  className={`${classes.banner} ${
                    i === filterIndex ? classes.active : ""
                  } ${classes.banner0}`}
                  key={i}
                >
                  <img
                    src={filter}
                    alt=""
                    onClick={() => {
                      if (filterIndex === i) {
                        setFilterIndex(-1);
                        return 0;
                      }
                      setFilterIndex(i);
                    }}
                  />
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
    </>
  );
};
