import { useEffect, useState } from 'react';
import { divIcon } from 'leaflet';
import { Marker, Tooltip } from 'react-leaflet';
import classes from './NodeMarker.module.scss'

const NodeMarker = ({ zoomLevel, armies, node, ...props }) => {
  const [iconSize, setIconSize] = useState([20, 20]);

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

  const armiesOnNode = armies.filter((army) => army.node === node.id);
  return (
    <Marker
      {...props}
      icon={NodeIcon}
    >
      {armiesOnNode.length !== 0 && 
        <Tooltip className={classes.tooltip} direction="bottom" permanent>
          {armiesOnNode.map((army) => 
          {
            let flag;
            switch (army.faction) {
            case "o.n.e": flag = "Images/flags/o.n.e.png"; break;
            case "bulgaria": flag = "Images/flags/bulgaria.png"; break;
            case "bl-0": flag = "Images/flags/bl-0.png"; break;
            case "bl-1": flag = "Images/flags/bl-1.png"; break;
            case "bl-2": flag = "Images/flags/bl-2.png"; break;
            case "csb": flag = "Images/flags/csb.png"; break;
            case "medici": flag = "Images/flags/medici.png"; break;
            case "edirne": flag = "Images/flags/edirne.png"; break;
            case "karesi": flag = "Images/flags/karesi.png"; break;
            case "bursa": flag = "Images/flags/bursa.png"; break;
            case "greece": flag = "Images/flags/greece.png"; break;
            case "wallachia": flag = "Images/flags/wallachia.png"; break;
            case "serbia": flag = "Images/flags/serbia.png"; break;
            default: flag = "Images/flags/default.png"; break;
          }
          const update = new Date(army.updated_date);
          const today = new Date();
          const hour = today.getHours();
          const diffTime = Math.abs(today - update);
          const diffDays = diffTime / (1000 * 60 * 60 * 24); 
          const forUpdate = diffDays >= 1 && hour >=6 ? true : false;
          let status;
          switch (army.status) {
            case "friend": status = forUpdate ? classes.friendForEdit : classes.friend; break;
            case "neutral": status = forUpdate ? classes.neutralForEdit : classes.neutral; break;
            case "enemy": status = forUpdate ? classes.enemyForEdit : classes.enemy; break;
            default: status = classes.neutral; break;
          }
          return <p key={army.id}><img src={flag} alt="" className={classes.flag}/> <span className={status}>{army.name}&nbsp;</span> ({army.soldiers.length + 1})</p>})}
        </Tooltip>}
    </Marker>
  )
}

export default NodeMarker;