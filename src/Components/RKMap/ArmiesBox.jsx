import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseButton from '../Buttons/CloseButton';
import ArmyForm from './Forms/ArmyForm';
import classes from './ArmiesBox.module.scss';

const ArmiesBox = ({ armies, nodes, onClose, setCenter }) => {
  const [creatingArmy, setCreatingArmy] = useState(false);

  if (creatingArmy) {
    return <ArmyForm nodes={nodes} onClose={onClose} />
  }

  const handleClick = (army) => {
    const armyPosition = nodes.find((node) => node.id === army.node).position;
    setCenter(armyPosition);
  }

  return (
    <div className={classes.box}>
      <CloseButton onClose={onClose} />
      <h5>All armies:</h5>
      <ul>
      {armies.map((army) => 
        <li>
          <Link 
            key={`army-${army.id}`} 
            onClick={() => handleClick(army)}
          >
            {army.name} - node {army.node}
          </Link>
      </li>)}
      </ul>
      <div

        onClick={() => setCreatingArmy(true)}
        className={classes.btn}
      >
        Add new army
      </div>
    </div>
  )
};

export default ArmiesBox;