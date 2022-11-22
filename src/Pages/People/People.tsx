import classes from "./People.module.scss";
import { Legionary } from "../../Components/Legionary/Legionary";

const legionaries = [
  {
    name: "Faraonqbg",
    rank: "Legatus",
    legion: "OG",
  },
  {
    name: "Mis_ok",
    rank: "Legata",
    legion: "OG",
  },
  {
    name: "Dudie",
    rank: "Tribunus",
    legion: "OG",
  },
  {
    name: "Leora",
    rank: "Tribuna",
    legion: "OG",
  },
  {
    name: "Tredmus",
    rank: "Preator",
    legion: "Second Legion",
  },
  {
    name: "Marto98",
    rank: "Praefectus",
    legion: "Second Legion",
  },
  {
    name: "Ganfi",
    rank: "Preator",
    legion: "First Legion",
  },
  {
    name: "Legolas_b",
    rank: "Praefectus",
    legion: "First Legion",
  },
];

const filterChoice = (choice: number) => {
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

export const People = () => {
  return (
    <div className={`${classes.page} ${classes.people}`}>
      <h2 className={classes.heading}>Легионерите</h2>
      <div className={classes.body}>
        <ul className={classes.menu}>
          <li onClick={() => filterChoice(0)}>All</li>
          <li onClick={() => filterChoice(1)}>Battle Legion - OG</li>
          <li onClick={() => filterChoice(2)}>Battle Legion - First Legion</li>
          <li onClick={() => filterChoice(3)}>Battle Legion - Second Legion</li>
        </ul>
        <div className={classes.legionaries}>
          {legionaries.map((legionary) => (
            <Legionary {...legionary} />
          ))}
        </div>
      </div>
    </div>
  );
};
