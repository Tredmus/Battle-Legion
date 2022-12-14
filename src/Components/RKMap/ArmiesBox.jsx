import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseButton from '../Buttons/CloseButton';
import ArmyForm from './Forms/ArmyForm';

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
    <Box
      className="box"
      alignContent="left"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
      }}>
      <CloseButton onClose={onClose} />
      <p>All armies:</p>
      {armies.map((army) => 
        <Link 
          key={`army-${army.id}`} 
          onClick={() => handleClick(army)}
        >
          {army.name} - node {army.node}
        </Link>)}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size='small'
        onClick={() => setCreatingArmy(true)}
        sx={{ mt: 3, mb: 2 }}
      >
        Add new army
      </Button>
    </Box>
  )
};

export default ArmiesBox;