import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import CloseButton from './Buttons/CloseButton';
import ArmyForm from './Forms/ArmyForm';

const ArmiesBox = ({ armies, nodes, onClose }) => {
  const [creatingArmy, setCreatingArmy] = useState(false);

  if (creatingArmy) {
    return <ArmyForm nodes={nodes} onClose={onClose} />
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
      <Typography>All armies:</Typography>
      {armies.map((army) => <Typography>{army.name} - node {army.node}</Typography>)}
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