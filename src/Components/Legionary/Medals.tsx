import classes from "./Medals.module.scss";

export type MedalsType = {
  medals: [
    { name: string; description: string; image: string; awarded: boolean }
  ];
};

export const Medals = ({ medals }: MedalsType) => {
  return (
    <div className={classes.medalsWrapper}>
      <ul className={classes.medals}>
        {medals.map((medal) => (
          <li className={classes.medal}>
            <img
              src={`Images/medals/${
                medal.awarded ? medal.image : medal.image + "null"
              }.png`}
              alt=""
            />

            <div className={classes.info}>
              <h3>{medal.name}</h3>
              <p>{medal.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
