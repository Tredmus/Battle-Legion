import { useEffect, useState } from 'react';
import { divIcon } from 'leaflet';
import { Marker } from 'react-leaflet';

const NodeMarker = ({ zoomLevel, ...props }) => {
  const [iconSize, setIconSize] = useState([20, 20]);

  useEffect(() => {
    const size = 0;
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
              <rect id="Rectangle" stroke="#1309B6" stroke-width="2" fill="#D8D8D8" x="1.5" y="1.5" width="27" height="27"></rect>
          </g>
        </svg>`,
    className: "svg-icon",
    iconSize: iconSize,
    iconAnchor: [iconSize[0] / 2, iconSize[1] / 2]
  });

  return (
    <Marker
      {...props}
      icon={NodeIcon}
    />
  )
}

export default NodeMarker;