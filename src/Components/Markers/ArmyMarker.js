import { useEffect, useState } from 'react';
import { icon } from 'leaflet';
import { Marker } from 'react-leaflet';
import ArmyBanner from '../../Assets/army-banner.png';

const ArmyMarker = ({ zoomLevel, ...props }) => {
  const [iconSize, setIconSize] = useState([20, 20]);

  useEffect(() => {
    const size = 0;
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

  const BannerIcon = new icon({
    iconUrl: ArmyBanner,
    iconSize: iconSize,
    iconAnchor: [iconSize[0] / 2, iconSize[1]]
  });

  return (
    <Marker
      {...props}
      icon={BannerIcon}
    />
  )
}

export default ArmyMarker;