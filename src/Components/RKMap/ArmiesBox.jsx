import { useState, useEffect, useRef } from "react";
import { DomEvent } from "leaflet";
import { Link } from "react-router-dom";
import CloseButton from "../Buttons/CloseButton";
import ArmyForm from "./Forms/ArmyForm";
import classes from "./ArmiesBox.module.scss";

const ArmiesBox = ({ armies, nodes, onClose, setCenter }) => {
  const [creatingArmy, setCreatingArmy] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      DomEvent.disableScrollPropagation(containerRef.current);
    }
  }, [containerRef]);

  const handleClick = (army) => {
    const armyPosition = nodes.find((node) => node.id === army.node).position;
    setCenter(armyPosition);
  };

  if (creatingArmy) {
    return <ArmyForm nodes={nodes} onClose={onClose} />;
  }

  return (
    <div className={classes.box} ref={containerRef}>
      <CloseButton onClose={onClose} />
      <h5>All armies:</h5>
      <ul>
        {armies.map((army) => (
          <li key={`army-${army.id}`}>
            <Link onClick={() => handleClick(army)}>
              {army.name} - node {army.node}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setCreatingArmy(true)} className={classes.btn}>
        Add new army
      </div>
    </div>
  );
};

export default ArmiesBox;
