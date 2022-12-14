import classes from './NodeBox.module.scss';

export const NodeBox = ({ node, armies, onClose }) => {
  return (
    <div className={classes.nodeBox}>
      <ul>
        <li><span>Node: <span className={classes.prop}>{node.id}</span></span>
        <span className={classes.prop}>{node.name} {node.walls}</span>
        </li>
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