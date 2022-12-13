import { Box, Typography } from '@mui/material';
import CloseButton from '../Buttons/CloseButton';
import classes from './NodeBox.module.scss';

export const NodeBox = ({ node, armies, onClose }) => {
  return (
    <div className={classes.nodeBox}>
      <ul>
        <li>Node: <span className={classes.prop}>{node.id} {node.name}</span></li>
        <li>Armies here:
          <ul>
            {armies.filter((army) => army.node === node.id).map((army) =>
              <li>{army.name}</li>
            )}
        </ul>
        </li>
        
      </ul>
    </div> 
  )
};

export default NodeBox;