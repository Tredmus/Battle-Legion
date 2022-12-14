import { useState } from 'react';
import CloseButton from '../../Buttons/CloseButton';
import axios from 'axios';
import classes from './ArmyForm.module.scss';

const ArmyForm = ({ nodes, onClose, army }) => {
  const [name, setName] = useState('');
  const [general, setGeneral] = useState('');
  const [soldiers, setSoldiers] = useState('');
  const [node, setNode] = useState(1);

  const handleSubmit = (event) => {
    const soldiersArray = soldiers.split('\n').map(function(soldier) {
      return soldier.trim();
    }).filter(function(soldier) {
      return soldier !== '';
    });

    if(army) {axios.put(`https://battle-legion-backend.onrender.com/api/armies/${army.id}`, {
      name: name,
      general: general,
      soldiers: soldiersArray,
      node: node
    })
      .catch(e => console.log(e.message));}
    else {
      axios.post('https://battle-legion-backend.onrender.com/api/armies', {
        name: name,
        general: general,
        soldiers: soldiersArray,
        node: node
      })
        .catch(e => console.log(e.message));
    }
  }

  const reload = () => {
    window.location.reload(false);
  };

  const handleDelete = () => {
    axios.delete(`https://battle-legion-backend.onrender.com/api/armies/${army.id}`)
    .catch(e => console.log(e.message));
    window.location.reload(false);
  }

  return (
    <div className={classes.form}>
      <CloseButton onClose={onClose} />

      <h5>{army ? 'Edit Army' : 'Add Army'}</h5>
      <form onSubmit={handleSubmit}>
        <div className={classes.group}>
          <label>Name:</label>
          <input type="text" placeholder='Name' defaultValue={army && army.name && army.name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={classes.group}>
          <label>General:</label>
          <input type="text" placeholder='General' defaultValue={army && army.general && army.general} onChange={(e) => setGeneral(e.target.value)} />
        </div>
        <div className={classes.group}>
          <label>Soldiers:</label>
          <textarea type="textarea" placeholder={'Soldier 1\nSoldier 2\nSoldier 3'} defaultValue={army && army.soldiers && army.soldiers} onChange={(e) => setSoldiers(e.target.value)} />
        </div>
        <div className={classes.group}>
          <label>Node:</label>
          <input type={'number'} placeholder='Node' defaultValue={army && army.node && army.node} onChange={(e) => setNode(e.target.value)} />
        </div>

        <input type="submit" value="Enter" className={classes.btn}/>

        {army && <button onClick={() => {reload(); handleDelete();}} className={`${classes.btn} ${classes.delete}`}>Delete</button>}
      </form>
    </div>
  )
};

export default ArmyForm;