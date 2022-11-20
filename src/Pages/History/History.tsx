import React from "react";
import classes from "./History.module.scss";
import { icons } from "../../Assets/Icons/Icons";
import { Event } from "../../Components/Event/Event";

export const History = () => {
  return (
    <div className={`${classes.page} ${classes.history}`}>
      <h2 className={classes.heading}>
        Историята <span>X години Боен Легион</span>
      </h2>
      <div className={classes.body}>
        <div className={classes.timeline}>
          <div className={classes.start}>
            <icons.BiBook />
          </div>
          <ul>
            <li>
              <Event
                name={"Събитие"}
                date={"05.07.1470"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
              />
            </li>
            <li>
              <Event
                name={"Събитие 2"}
                date={"05.09.1470"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
