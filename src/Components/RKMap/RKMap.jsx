import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  AttributionControl,
} from "react-leaflet";
import { latLng, latLngBounds, GridLayer } from "leaflet";
import { nodes } from "../../Data/nodes";
import Control from "react-leaflet-custom-control";
import ArmiesButton from "../Buttons/ArmiesButton";
import NodeBox from "./NodeBox";
import ArmiesBox from "./ArmiesBox";
import axios from "axios";
import NodeMarker from "./Markers/NodeMarker";
import ArmyMarker from "./Markers/ArmyMarker";
import { icons } from "../../Assets/Icons/Icons";
import classes from "./RKMap.module.scss";

const ZoomListener = ({ setZoomLevel }) => {
  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom());
    },
  });
  return null;
};

const RKMap = () => {
  const [center, setCenter] = useState([18, -22]);
  const [zoomLevel, setZoomLevel] = useState(6);
  const [selectedNode, setSelectedNode] = useState();
  const [showArmies, setShowArmies] = useState(false);
  const [armies, setArmies] = useState([]);
  const [showArmiesInfo, setShowArmiesInfo] = useState(true);
  const [showSoldiers, setShowSoldiers] = useState(true);

  useEffect(() => {
    const token = window.localStorage.getItem("loggedBLUser");
    axios
      .get("https://battle-legion-backend.onrender.com/api/armies", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setArmies(res.data.armies))
      .catch((e) => {
        if (e.response.status === 401) {
          // Token has expired
          window.localStorage.removeItem("loggedBLUser");
          window.location.reload();
        }
      });
  }, []);

  const bounds = latLngBounds(latLng(-40, -180), latLng(90, 30));

  if (window?.chrome) {
    const originalInitTile = GridLayer.prototype._initTile;

    // Remove white lines grid
    GridLayer.include({
      _initTile: function (tile) {
        originalInitTile.call(this, tile);

        const tileSize = this.getTileSize();

        tile.style.width = `${tileSize.x + 1}px`;
        tile.style.height = `${tileSize.y + 1}px`;
      },
    });
  }

  const closeBox = () => {
    setSelectedNode(null);
    setShowArmies(false);
  };

  const toggleSoldiers = () => {
    console.log("toggleSoldiers", showSoldiers);
    setShowSoldiers(!showSoldiers);
  };

  const toggleArmiesInfo = () => {
    setShowArmiesInfo(!showArmiesInfo);
  };

  return (
    <MapContainer
      key={JSON.stringify(center)}
      center={center}
      zoom={zoomLevel}
      scrollWheelZoom={true}
      maxBoundsViscosity={1.0}
      maxBounds={bounds}
      attributionControl={false}
    >
      <TileLayer
        url={"../map/{z}/{x}/{y}.png"}
        minZoom={5}
        maxNativeZoom={6}
        maxZoom={7}
        noWrap={true}
      />
      {nodes.map((node) => (
        <NodeMarker
          key={`node-${node.id}`}
          position={node.position}
          zoomLevel={zoomLevel}
          armies={armies}
          node={node}
          showArmiesInfo={showArmiesInfo}
          showSoldiers={showSoldiers}
          eventHandlers={{
            click: (e) => {
              setSelectedNode(node);
              setShowArmies(false);
            },
          }}
        />
      ))}
      {armies.map((army) => {
        const node = nodes.find((n) => n.id === army.node);
        if (!node) {
          return null;
        }
        const armiesOnNode = armies.filter((army) => army.node === node.id);
        return (
          <ArmyMarker
            key={`army-${army.id}`}
            position={node.position}
            zoomLevel={zoomLevel}
            armies={armiesOnNode}
            showArmies={showArmies}
            eventHandlers={{
              click: (e) => {
                setSelectedNode(node);
                setShowArmies(false);
              },
            }}
          />
        );
      })}
      <Control position="topleft">
        <ul className={classes.mapMenu}>
          <ArmiesButton
            onClick={() => {
              setSelectedNode(null);
              setShowArmies(true);
            }}
          />
          <h3>
            {showArmiesInfo ? (
              <icons.AiFillEyeInvisible onClick={toggleArmiesInfo} />
            ) : (
              <icons.AiFillEye onClick={toggleArmiesInfo} />
            )}
          </h3>
          <h3>
            <icons.BsPeopleFill onClick={toggleSoldiers} />
          </h3>
        </ul>
      </Control>
      <Control>
        <div className={classes.control}>
          {selectedNode && (
            <NodeBox node={selectedNode} armies={armies} onClose={closeBox} />
          )}
          {showArmies && (
            <ArmiesBox
              armies={armies}
              nodes={nodes}
              onClose={closeBox}
              setCenter={setCenter}
            />
          )}
        </div>
      </Control>
      <ZoomListener setZoomLevel={setZoomLevel} />
      <AttributionControl prefix="Battle Legion Tacking System" />
    </MapContainer>
  );
};

export default RKMap;
