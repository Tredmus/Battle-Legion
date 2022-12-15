import { useState } from 'react';
import CloseButton from '../../Buttons/CloseButton';
import axios from 'axios';
import classes from './ArmyForm.module.scss';

const ArmyForm = ({ onClose, army }) => {
  const [name, setName] = useState(army ? army.name : '');
  const [general, setGeneral] = useState(army ? army.general : '');
  const [soldiers, setSoldiers] = useState(army ? army.soldiers.join('\n') : '');
  const [node, setNode] = useState(army ? army.node : 1);
  let updatedDate = army ? new Date(army.updated_date).toLocaleString() : null;

  const handleSubmit = (event) => {
    const soldiersArray = soldiers.split('\n').map(function (soldier) {
      return soldier.trim();
    }).filter(function (soldier) {
      return soldier !== '';
    });

    if (army) {
      axios.put(`https://battle-legion-backend.onrender.com/api/armies/${army.id}`, {
        name: name,
        general: general,
        soldiers: soldiersArray,
        node: node
      })
        .then(() => {
          reload();
        })
        .catch(e => console.log(e.message));
    }
    else {
      axios.post('https://battle-legion-backend.onrender.com/api/armies', {
        name: name,
        general: general,
        soldiers: soldiersArray,
        node: node
      })
        .then(() => {
          reload();
        })
        .catch(e => console.log(e.message));
    }
  }

  const reload = () => {
    window.location.reload(false);
  };

  const handleDelete = () => {
    axios.delete(`https://battle-legion-backend.onrender.com/api/armies/${army.id}`)
      .then(() => {
        reload();
      })
      .catch(e => console.log(e.message));
  }

  return (
    <div className={classes.form}>
      <CloseButton onClose={onClose} />

      <h5>{army ? 'Edit Army' : 'Add Army'}</h5>
      <form onSubmit={handleSubmit}>
        <div className={classes.group}>
          <label>Name:</label>
          <input type="text" placeholder='Name' defaultValue={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={classes.group}>
          <label>General:</label>
          <input type="text" placeholder='General' defaultValue={general} onChange={(e) => setGeneral(e.target.value)} />
        </div>
        <div className={classes.group}>
          <label>Soldiers:</label>
          <textarea type="textarea" placeholder={'Soldier 1\nSoldier 2\nSoldier 3'} defaultValue={soldiers} onChange={(e) => setSoldiers(e.target.value)} />
        </div>
        <div className={classes.group}>
          <label>Node:</label>
          <input type={'number'} placeholder='Node' defaultValue={node} onChange={(e) => setNode(e.target.value)} />
        </div>
        <div>
          {updatedDate && <p>Last updated: {updatedDate}</p>}
        </div>

        <input type="submit" value="Enter" className={classes.btn} />
      </form>
      {army && <button onClick={handleDelete()} className={`${classes.btn} ${classes.delete}`}>Delete</button>}
    </div>
  )
};

export default ArmyForm;