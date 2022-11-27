import classes from "./Invite.module.scss";

export const Invite = () => {
  return (
    <div className={`${classes.page} ${classes.invite}`}>
      <h2 className={classes.heading}>Присъедини се</h2>
      <div className={classes.body}>
        <p>Така така така влез в приключението дъра бъра.</p>
        <a
          href="https://www.renaissancekingdoms.com/?invite=b4218ae34b"
          target="#"
          className="btn"
        >
          Влез в Приключението
        </a>
      </div>
    </div>
  );
};
