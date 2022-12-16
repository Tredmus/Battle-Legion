import { useState } from 'react';
import CloseButton from '../../Buttons/CloseButton';
import axios from 'axios';
import classes from './ArmyForm.module.scss';

const ArmyForm = ({ onClose, army }) => {
  const [name, setName] = useState(army ? army.name : '');
  const [general, setGeneral] = useState(army ? army.general : '');
  const [soldiers, setSoldiers] = useState(army ? army.soldiers.join('\n') : '');
  const [walls, setWalls] = useState(army ? army.walls : false);
  const [faction, setFaction] = useState(army ? army.faction : 'o.n.e');
  const [status, setStatus] = useState(army ? army.status : 'enemy');
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
        faction: faction,
        status: status,
        walls: walls,
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
        faction: faction,
        status: status,
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

  console.log("army", army);

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
        <div>
          {updatedDate && <p>Last updated: {updatedDate}</p>}
        </div>
        <div className={classes.group}>
          <label>Faction:</label>
          <select defaultValue={faction} onChange={(e) => setFaction(e.target.value)}>
            <option value="o.n.e">O.N.E</option>
            <option value="bulgaria">Bulgaria</option>
            <option value="bl-0">Legion Legatus</option>
            <option value="bl-1">First Legion</option>
            <option value={"bl-2"}>Second Legion</option>
            <option value="csb">Carthage Sacred Band</option>
            <option value="medici">Medici</option>
            <option value="edirne">Edirne</option>
            <option value="karesi">Karesi</option>
            <option value="bursa">Bursa</option>
            <option value="greece">Greece</option>
            <option value="wallachia">Wallachia</option>
            <option value="serbia">Serbia</option>
          </select>
        </div>
        <div className={classes.group}>
          <label>Status:</label>
          <select defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
            <option value={"friend"}>Friend</option>
            <option value="neutral">Neutral</option>
            <option value="enemy">Enemy</option>
          </select>
        </div>
        {army && 
        <div className={classes.group}>
          <label>Behind Walls:</label>
          <select defaultValue={walls} onChange={(e) => setWalls(e.target.value)}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        }
        <div className={classes.group}>
          <label>Node:</label>
          <input type={'number'} placeholder='Node' defaultValue={node} onChange={(e) => setNode(e.target.value)} />
        </div>
        <input type="submit" value="Enter" className={classes.btn} />
      </form>
      {army && <button onClick={() => { handleDelete(); }} className={`${classes.btn} ${classes.delete}`}>Delete</button>}
    </div>
  )
};

export default ArmyForm;