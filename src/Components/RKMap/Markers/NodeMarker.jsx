import { useEffect, useState } from 'react';
import { divIcon } from 'leaflet';
import { Marker, Tooltip } from 'react-leaflet';
import classes from './NodeMarker.module.scss'
import { icons } from '../../../Assets/Icons/Icons';

const NodeMarker = ({ zoomLevel, armies, node, ...props }) => {
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
    iconAnchor: [iconSize[0] / 2, iconSize[1] / 2]
  });

  function isAfterRefresh(dateObj1, dateObj2) {
    // Get the hours and minutes of both dates
    const hours1 = dateObj1.getUTCHours();
    const minutes1 = dateObj1.getUTCMinutes();
    const hours2 = dateObj2.getUTCHours();
    const minutes2 = dateObj2.getUTCMinutes();

    if (dateObj1.getUTCFullYear() < dateObj2.getUTCFullYear() || dateObj1.getUTCMonth() !== dateObj2.getUTCMonth()) {
      return true;
    }

    // Check if the dates are on the same day
    if (dateObj1.getUTCDate() === dateObj2.getUTCDate()) {
      // If the dates are on the same day, return true if the first date is before 5:30 and the second date is after 5:30
      return (hours1 < 3 || (hours1 === 3 && minutes1 < 30)) && (hours2 > 3 || (hours2 === 3 && minutes2 >= 30));
    } else {
      // If the dates are on different days, return true if the second date is on the next day after 5:30
      return dateObj2.getUTCDate() !== dateObj1.getUTCDate() && (hours2 > 3 || (hours2 === 3 && minutes2 >= 30));
    }
  }


  const armiesOnNode = armies.filter((army) => army.node === node.id);
  return (
    <Marker
      {...props}
      icon={NodeIcon}
    >
      {armiesOnNode.length !== 0 &&
        <Tooltip className={classes.tooltip} direction="bottom" permanent>
          {armiesOnNode.map((army) => {
            let flag;
            switch (army.faction) {
              case "o.n.e": flag = `${flagImagePath}/o.n.e.png`; break;
              case "bulgaria": flag = `${flagImagePath}/bulgaria.png`; break;
              case "bl-0": flag = `${flagImagePath}/bl-0.png`; break;
              case "bl-1": flag = `${flagImagePath}/bl-1.png`; break;
              case "bl-2": flag = `${flagImagePath}/bl-2.png`; break;
              case "csb": flag = `${flagImagePath}/csb.png`; break;
              case "medici": flag = `${flagImagePath}/medici.png`; break;
              case "chaos": flag = `${flagImagePath}/chaos.png`; break;
              case "vidin": flag = `${flagImagePath}/vidin.png`; break;
              case "haiduks": flag = `${flagImagePath}/haiduks.png`; break;
              case "edirne": flag = `${flagImagePath}s/edirne.png`; break;
              case "ron": flag = `${flagImagePath}/ron.png`; break;
              case "karesi": flag = `${flagImagePath}/karesi.png`; break;
              case "altay": flag = `${flagImagePath}/altay.png`; break;
              case "seljuk": flag = `${flagImagePath}/seljuk.png`; break;
              case "bursa": flag = `${flagImagePath}/bursa.png`; break;
              case "saruhan": flag = `${flagImagePath}/saruhan.png`; break;
              case "sl": flag = `${flagImagePath}/sl.png`; break;
              case "greece": flag = `${flagImagePath}/greece.png`; break;
              case "wallachia": flag = `${flagImagePath}/wallachia.png`; break;
              case "serbia": flag = `${flagImagePath}/serbia.png`; break;
              default: flag = `${flagImagePath}/default.png`; break;
            }
            const lastUpdated = new Date(army.updated_date);
            const today = new Date();
            const forUpdate = isAfterRefresh(lastUpdated, today);

            let status;
            switch (army.status) {
              case "friend": status = forUpdate ? classes.friendForEdit : classes.friend; break;
              case "neutral": status = forUpdate ? classes.neutralForEdit : classes.neutral; break;
              case "enemy": status = forUpdate ? classes.enemyForEdit : classes.enemy; break;
              default: status = classes.neutral; break;
            }
            return <p key={army.id}><img src={flag} alt="" className={`${classes.flag} ${zoomLevel < 6 ? classes.bigFlag : ''}`} />{army.walls && <icons.TbBuildingCastle className={classes.walls}/>} {zoomLevel >= 6? <span className={status}>{army.name}&nbsp;</span> : ''} ({army.soldiers.length + 1})</p>
          })}
        </Tooltip>}
    </Marker>
  )
}

export default NodeMarker;