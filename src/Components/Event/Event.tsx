import classes from "./Event.module.scss";

type Props = {
  name: string;
  date: string;
  description: string;
};

export const Event = ({ name, date, description }: Props) => {
  return (
    <div className={classes.event}>
      <div className={classes.left}>
        <h4>{name}</h4>
        <span>{date}</span>
      </div>
      <div className={classes.right}>
        <p>{description}</p>
      </div>
    </div>
  );
};
