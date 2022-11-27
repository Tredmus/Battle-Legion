import classes from "./Video.module.scss";

type Props = {
  link: string;
  title: string;
  description: string;
  date: string;
};

export const Video = ({ link, title, description, date }: Props) => {
  return (
    <div className={classes.video}>
      <div className={classes.left}>
        <iframe src={link} width={412} height={250} allow="fullscreen"></iframe>
      </div>
      <div className={classes.right}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
