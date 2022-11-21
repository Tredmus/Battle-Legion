import classes from "./People.module.scss";
import { Legionary } from "../../Components/Legionary/Legionary";

const legionaries = [
  {
    name: "Faraonqbg",
    rank: "Legatus",
    legion: "Battle Legion - OG",
    link: "https://www.renaissancekingdoms.com/FichePersonnage.php?login=Faraonqbg",
  },
  {
    name: "Mis_ok",
    rank: "Legata",
    legion: "Battle Legion - OG",
    link: "https://www.renaissancekingdoms.com/FichePersonnage.php?login=Mis_ok",
  },
  {
    name: "Dudie",
    rank: "Tribunus",
    legion: "Battle Legion - OG",
    link: "https://www.renaissancekingdoms.com/FichePersonnage.php?login=Dudie",
  },
  {
    name: "Leora",
    rank: "Tribuna",
    legion: "Battle Legion - OG",
    link: "https://www.renaissancekingdoms.com/FichePersonnage.php?login=Leora",
  },
  {
    name: "Tredmus",
    rank: "Preator",
    legion: "Battle Legion - Second Legion",
    link: "https://www.renaissancekingdoms.com/FichePersonnage.php?login=Tredmus",
  },
  {
    name: "Marto98",
    rank: "Praefectus",
    legion: "Battle Legion - Second Legion",
    link: "https://www.renaissancekingdoms.com/FichePersonnage.php?login=Marto98",
  },
  {
    name: "Ganfi",
    rank: "Preator",
    legion: "Battle Legion - First Legion",
    link: "https://www.renaissancekingdoms.com/FichePersonnage.php?login=Ganfi",
  },
  {
    name: "Legolas_b",
    rank: "Praefectus",
    legion: "Battle Legion - First Legion",
    link: "https://www.renaissancekingdoms.com/FichePersonnage.php?login=Legolas_b",
  },
];

const filterChoice = (choice: number) => {
  switch (choice) {
    case 1:
      return legionaries.filter(
        (legionary) => legionary.legion === "Battle Legion - OG"
      );
    case 2:
      return legionaries.filter(
        (legionary) => legionary.legion === "Battle Legion - First Legion"
      );
    case 3:
      return legionaries.filter(
        (legionary) => legionary.legion === "Battle Legion - Second Legion"
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
