import { Box, Typography } from '@mui/material';
import CloseButton from './Buttons/CloseButton';

const NodeBox = ({ node, armies, onClose }) => {
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
      <Typography>Node: {node.id}</Typography>
      <Typography>Armies here:</Typography>
      {armies.filter((army) => army.node === node.id).map((army) => 
        <Typography>{army.name}</Typography>
      )}
    </Box>
  )
};

export default NodeBox;