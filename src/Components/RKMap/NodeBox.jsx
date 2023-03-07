import { useState, useEffect, useRef } from "react";
import { DomEvent } from "leaflet";
import classes from "./NodeBox.module.scss";
import ArmyForm from "./Forms/ArmyForm";
import { nodes } from "../../Data/nodes";

export const NodeBox = ({ node, armies, onClose, ...props }) => {
  const [activeArmy, setActiveArmy] = useState();
  const [showArmy, setShowArmy] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      DomEvent.disableScrollPropagation(containerRef.current);
    }
  }, [containerRef]);

  return (
    <>
      {showArmy && (
        <ArmyForm nodes={nodes} onClose={onClose} army={activeArmy} />
      )}
      <div className={classes.nodeBox} ref={containerRef}>
        <ul>
          <li>
            <span>
              Node: <span className={classes.prop}>{node.id}</span>
            </span>
            <span className={classes.prop}>
              {node.name} {node.walls}
            </span>
          </li>
          <li>
            Armies here:
            <ul className={classes.armies}>
              {armies
                .filter((army) => army.node === node.id)
                .map((army) => (
                  <li
                    key={`army-${army.id}`}
                    onClick={() => {
                      setActiveArmy(army);
                      setShowArmy(true);
                    }}
                  >
                    {army.name}
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NodeBox;
