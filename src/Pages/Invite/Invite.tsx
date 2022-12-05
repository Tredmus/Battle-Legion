import classes from "./Invite.module.scss";

export const Invite = () => {
  return (
    <div className={`${classes.page} ${classes.invite}`}>
      <h2 className={classes.heading}>Присъедини се</h2>
      <div className={classes.body}>
        <p>
          Ако искате да се присъедините към нашата борба срещу ОНЕ, пишете на{" "}
          <a
            href="https://www.renaissancekingdoms.com/FichePersonnage.php?login=tredmus"
            target="#"
          >
            Tredmus
          </a>{" "}
          или в Discord на Tredmus#7777
        </p>
      </div>
    </div>
  );
};
