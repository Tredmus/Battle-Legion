import { useEffect, useState } from "react";
import classes from "./People.module.scss";
import { Legionary } from "../../Components/Legionary/Legionary";
import { Tree } from "../../Components/Tree/Tree";

const legionaries = [
  {
    name: "Faraonqbg",
    rank: "Praetor",
    legion: "OG",
  },
  {
    name: "Mis_ok",
    rank: "Legata",
    legion: "OG",
  },
  {
    name: "Dudie",
    rank: "Praefectus",
    legion: "OG",
  },
  {
    name: "Leora",
    rank: "Tribuna",
    legion: "OG",
  },
  {
    name: "Tredmus",
    rank: "Praetor",
    legion: "Second",
  },
  {
    name: "Marto98",
    rank: "Praefectus",
    legion: "Second",
  },
  {
    name: "Ganfi",
    rank: "Praetor",
    legion: "First",
  },
  {
    name: "Legolas_b",
    rank: "Praefectus",
    legion: "First",
  },
];

export const People = () => {
  const [choice, setChoice] = useState(0);

  const filterPeople = () => {
    switch (choice) {
      case 1:
        return legionaries.filter((legionary) => legionary.legion === "OG");
      case 2:
        return legionaries.filter(
          (legionary) => legionary.legion === "First Legion"
        );
      case 3:
        return legionaries.filter(
          (legionary) => legionary.legion === "Second Legion"
        );
      default:
        return legionaries;
    }
  };
  const filtered = filterPeople();
  const filters = document.querySelector("#menu")?.getElementsByTagName("li");

  useEffect(() => {
    if (filters) {
      for (let i = 0; i < filters?.length; i++) {
        filters[i]?.addEventListener("click", function () {
          let current = document.getElementsByClassName(classes.active);
          console.log("current", current);
          current[0].classList.remove(classes.active);
          this.classList.add(classes.active);
          console.log("done");
        });
      }
    }
  }, [choice, filters]);

  return (
    <div className={`${classes.page} ${classes.people}`}>
      <div className={classes.people__inner}>
        <h2 className={classes.heading}>Легионерите</h2>
        <ul className={classes.menu} id="menu">
          <div className={classes.tree}>
            <Tree legionaries={legionaries} />
          </div>
          <li
            className={classes.active}
            onClick={function () {
              setChoice(0);
            }}
          >
            All
          </li>
          <li
            onClick={() => {
              setChoice(1);
            }}
          >
            Battle Legion - OG
          </li>
          <li
            onClick={() => {
              setChoice(2);
            }}
          >
            Battle Legion - First Legion
          </li>
          <li
            onClick={() => {
              setChoice(3);
            }}
          >
            Battle Legion - Second Legion
          </li>
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
