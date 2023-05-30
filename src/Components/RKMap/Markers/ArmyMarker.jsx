import { useEffect, useState } from "react";
import { icon } from "leaflet";
import { Marker } from "react-leaflet";
import classes from "./ArmyMarker.module.scss";

const ArmyMarker = ({ zoomLevel, armies, ...props }) => {
  const [iconSize, setIconSize] = useState([20, 20]);

  useEffect(() => {
    switch (zoomLevel) {
      case 5:
        setIconSize([22, 22]);
        break;
      case 6:
        setIconSize([44, 44]);
        break;
      case 7:
        setIconSize([88, 88]);
        break;
    }
  }, [zoomLevel]);

  let enemy = 0;
  let friend = 0;
  let scout = 0;
  armies.forEach((army) => {
    if (army.status === "enemy") enemy++;
    if (army.status === "friend") friend++;
    if (army.status === "scout") scout++;
  });

  let flag = "Images/flags/neutral.png";
  if (enemy > 0 && friend === 0) flag = "Images/flags/enemy.png";
  if (enemy === 0 && friend > 0) flag = "Images/flags/friend.png";
  if (enemy > 0 && friend > 0) flag = "Images/flags/battle.png";

  const BannerIcon = new icon({
    iconUrl: flag,
    iconSize: scout === armies.length ? [0, 0] : iconSize,
    iconAnchor: [iconSize[0] / 2, iconSize[1]],
  });

  return <Marker {...props} icon={BannerIcon} className={classes.flag} />;
};

export default ArmyMarker;
