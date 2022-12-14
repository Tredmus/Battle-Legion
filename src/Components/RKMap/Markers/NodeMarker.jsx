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
          {armiesOnNode.map((army) => <p>● {army.name} ({army.soldiers.length + 1})</p>)}
        </Tooltip>}
    </Marker>
  )
}

export default NodeMarker;