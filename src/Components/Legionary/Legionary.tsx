import classes from "./Legionary.module.scss";
import about from "../../Assets/Images/people/faraonqbg.png";

export type TypeLegionary = {
  name: string;
  rank: string;
  legion: string;
};

export const Legionary = ({ name }: TypeLegionary) => {
  const imageLink = `Images/people/${name}.png`;

  return (
    <div className={classes.legionary}>
      <img src={imageLink} alt="" />
      <p>{name}</p>
    </div>
  );
};
