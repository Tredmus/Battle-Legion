import classes from "./History.module.scss";
import { icons } from "../../Assets/Icons/Icons";
import { Event } from "../../Components/Event/Event";

const today = new Date();
const birth = new Date("2020-03-08");
let age = today.getFullYear() - birth.getFullYear();
if (
  today.getMonth() - birth.getMonth() < 0 ||
  today.getMonth() - birth.getMonth() === 0
)
  age--;

export const History = () => {
  return (
    <div className={`${classes.page} ${classes.history}`}>
      <h2 className={classes.heading}>
        Историята <span>{age} години Боен Легион</span>
      </h2>
      <div className={classes.body}>
        <div className={classes.timeline}>
          <div className={classes.start}>
            <icons.BiBook />
          </div>
          <ul>
            <li>
              <Event
                name={"Създаване на Легиона"}
                date={"08.03.1468"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
              />
            </li>
          </ul>
        </div>
        <footer className={classes.quote}>
          <p>
            "Или умираш като герой, или живееш достатъчно дълго, за да се
            превърнеш в злодей"
          </p>
        </footer>
      </div>
    </div>
  );
};
