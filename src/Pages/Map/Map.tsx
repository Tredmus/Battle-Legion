import classes from "./Map.module.scss";
import RKMap from "../../Components/RKMap/RKMap";
import "./Map.css";

export const Map = () => {
  return (
    <div className={classes.map}>
      <RKMap />
    </div>
  );
};
