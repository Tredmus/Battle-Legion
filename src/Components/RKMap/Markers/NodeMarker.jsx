import { useEffect, useState } from "react";
import { divIcon } from "leaflet";
import { Marker, Tooltip } from "react-leaflet";
import classes from "./NodeMarker.module.scss";
import { icons } from "../../../Assets/Icons/Icons";

const NodeMarker = ({
  zoomLevel,
  armies,
  node,
  showArmiesInfo,
  showSoldiers,
  showFriends,
  ...props
}) => {
  const [iconSize, setIconSize] = useState([20, 20]);
  const flagImagePath = "Images/flags";

  useEffect(() => {
    switch (zoomLevel) {
      case 5:
        setIconSize([12, 12]);
        break;
      case 6:
        setIconSize([24, 24]);
        break;
      case 7:
        setIconSize([48, 48]);
        break;
    }
  }, [zoomLevel]);

  const NodeIcon = divIcon({
    html: `
        <svg
        width="${iconSize[0]}px" height="${iconSize[1]}px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Slice 1</title>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0">
            <circle id="Circle" stroke="#03e3fc" stroke-width="2" fill="#D8D8D8" cx="15" cy="15" r="13"></circle>
          </g>
        </svg>`,
    className: "svg-icon",
    iconSize: iconSize,
    iconAnchor: [iconSize[0] / 2, iconSize[1] / 2],
  });

  function isAfterRefresh(dateObj1, dateObj2) {
    // Get the hours and minutes of both dates
    const hours1 = dateObj1.getUTCHours();
    const minutes1 = dateObj1.getUTCMinutes();
    const hours2 = dateObj2.getUTCHours();
    const minutes2 = dateObj2.getUTCMinutes();

    if (
      dateObj1.getUTCFullYear() < dateObj2.getUTCFullYear() ||
      dateObj1.getUTCMonth() !== dateObj2.getUTCMonth()
    ) {
      return true;
    }

    // Check if the dates are on the same day
    if (dateObj1.getUTCDate() === dateObj2.getUTCDate()) {
      // If the dates are on the same day, return true if the first date is before 5:30 and the second date is after 5:30
      return (
        (hours1 < 3 || (hours1 === 3 && minutes1 < 30)) &&
        (hours2 > 3 || (hours2 === 3 && minutes2 >= 30))
      );
    } else {
      // If the dates are on different days, return true if the second date is on the next day after 5:30
      return (
        dateObj2.getUTCDate() !== dateObj1.getUTCDate() &&
        (hours2 > 3 || (hours2 === 3 && minutes2 >= 30))
      );
    }
  }

  const armiesOnNode = armies.filter((army) => army.node === node.id);
  return (
    <Marker {...props} icon={NodeIcon}>
      {armiesOnNode.length !== 0 && (
        <Tooltip className={classes.tooltip} direction="bottom" permanent>
          {armiesOnNode.map((army) => {
            let flagFaction;
            let flagCountry;
            switch (army.faction) {
              case "o.n.e":
                flagFaction = `${flagImagePath}/o.n.e.png`;
                break;
              case "bulgaria":
                flagFaction = `${flagImagePath}/bulgaria.png`;
                break;
              case "bl-0":
                flagFaction = `${flagImagePath}/bl-0.png`;
                break;
              case "bl-1":
                flagFaction = `${flagImagePath}/bl-1.png`;
                break;
              case "bl-2":
                flagFaction = `${flagImagePath}/bl-2.png`;
                break;
              case "csb":
                flagFaction = `${flagImagePath}/csb.png`;
                break;
              case "medici":
                flagFaction = `${flagImagePath}/medici.png`;
                break;
              case "chaos":
                flagFaction = `${flagImagePath}/chaos.png`;
                break;
              case "vidin":
                flagFaction = `${flagImagePath}/vidin.png`;
                break;
              case "haiduks":
                flagFaction = `${flagImagePath}/haiduks.png`;
                break;
              case "edirne":
                flagFaction = `${flagImagePath}s/edirne.png`;
                break;
              case "ron":
                flagFaction = `${flagImagePath}/ron.png`;
                break;
              case "karesi":
                flagFaction = `${flagImagePath}/karesi.png`;
                break;
              case "altay":
                flagFaction = `${flagImagePath}/altay.png`;
                break;
              case "seljuk":
                flagFaction = `${flagImagePath}/seljuk.png`;
                break;
              case "bursa":
                flagFaction = `${flagImagePath}/bursa.png`;
                break;
              case "saruhan":
                flagFaction = `${flagImagePath}/saruhan.png`;
                break;
              case "sl":
                flagFaction = `${flagImagePath}/sl.png`;
                break;
              case "albania":
                flagFaction = `${flagImagePath}/albania.png`;
                break;
              case "greece":
                flagFaction = `${flagImagePath}/greece.png`;
                break;
              case "wallachia":
                flagFaction = `${flagImagePath}/wallachia.png`;
                break;
              case "serbia":
                flagFaction = `${flagImagePath}/serbia.png`;
                break;
              case "bosna":
                flagFaction = `${flagImagePath}/bosna.png`;
                break;
              default:
                flagFaction = `${flagImagePath}/default.png`;
                break;
            }
            switch (army.country) {
              case "wallachia":
                flagCountry = `${flagImagePath}/wallachia.png`;
                break;
              case "bulgaria":
                flagCountry = `${flagImagePath}/bulgaria.png`;
                break;
              case "edirne":
                flagCountry = `${flagImagePath}s/edirne.png`;
                break;
              case "karesi":
                flagCountry = `${flagImagePath}/karesi.png`;
                break;
              case "bursa":
                flagCountry = `${flagImagePath}/bursa.png`;
                break;
              case "greece":
                flagCountry = `${flagImagePath}/greece.png`;
                break;
              case "albania":
                flagCountry = `${flagImagePath}/albania.png`;
                break;
              case "serbia":
                flagCountry = `${flagImagePath}/serbia.png`;
                break;
              case "bosna":
                flagCountry = `${flagImagePath}/bosna.png`;
                break;
              case "church":
                flagCountry = `${flagImagePath}/church.png`;
                break;
              default:
                flagCountry = `${flagImagePath}/none.png`;
                break;
            }
            let updatedDate = army
              ? new Date(army.updated_date).toLocaleString()
              : null;
            const lastUpdated = new Date(army.updated_date);
            const today = new Date();
            const forUpdate = isAfterRefresh(lastUpdated, today);

            let status;
            switch (army.status) {
              case "friend":
                status = forUpdate ? classes.friendForEdit : classes.friend;
                break;
              case "neutral":
                status = forUpdate ? classes.neutralForEdit : classes.neutral;
                break;
              case "enemy":
                status = forUpdate ? classes.enemyForEdit : classes.enemy;
                break;
              default:
                status = classes.neutral;
                break;
            }
            return (
              <>
                <p key={army.id} className={classes.army}>
                  <img
                    src={flagFaction}
                    alt=""
                    className={`${classes.flag} ${
                      zoomLevel < 6 ? classes.bigFlag : ""
                    }`}
                  />
                  <img
                    src={flagCountry}
                    alt=""
                    className={`${classes.flag} ${
                      zoomLevel < 6 ? classes.bigFlag : ""
                    }`}
                  />
                  {showArmiesInfo && (
                    <>
                      {army.walls && (
                        <icons.TbBuildingCastle className={classes.walls} />
                      )}{" "}
                      {zoomLevel >= 6 ? (
                        <span className={status}>{army.name}&nbsp;</span>
                      ) : (
                        ""
                      )}{" "}
                    </>
                  )}
                  {showSoldiers ||
                    ((showFriends === false && army.status) !== "friend" &&
                      `(${army.soldiers.length + 1})`)}
                  {army.unsure && (
                    <>
                      <p className={classes.unsure}>
                        <icons.TbMapPinOff />
                        <icons.TbMapOff />
                      </p>
                      {showSoldiers && (
                        <p className={classes.unsureDate}>
                          {updatedDate.slice(0, -13)}
                        </p>
                      )}
                    </>
                  )}
                </p>
              </>
            );
          })}
        </Tooltip>
      )}
    </Marker>
  );
};

export default NodeMarker;
