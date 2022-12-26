import { useState, useEffect, useRef } from 'react';
import { DomEvent } from 'leaflet';
import axios from 'axios';
import CloseButton from '../../Buttons/CloseButton';
import classes from './ArmyForm.module.scss';

const ArmyForm = ({ onClose, army }) => {
  const [name, setName] = useState(army ? army.name : '');
  const [general, setGeneral] = useState(army ? army.general : '');
  const [soldiers, setSoldiers] = useState(army ? army.soldiers.join('\n') : '');
  const [walls, setWalls] = useState(army ? army.walls : false);
  const [faction, setFaction] = useState(army ? army.faction : 'o.n.e');
  const [status, setStatus] = useState(army ? army.status : 'enemy');
  const [node, setNode] = useState(army ? army.node : 1);
  const token = window.localStorage.getItem('loggedBLUser');
  let updatedDate = army ? new Date(army.updated_date).toLocaleString() : null;

  const bursaArmies = ['o.n.e', 'edirne', 'ron', 'karesi', 'altay', 'seljuk', 'sl', 'bursa', 'saruhan', 'greece', 'wallachia', 'serbia'];
  const [isBursaArmy, setIsBursaArmy] = useState(bursaArmies.includes(faction));
  const albaniaArmies = ['o.n.e', 'albania', 'serbia', 'wallachia', 'greece'];
  const [isAlbaniaArmy, setIsAlbaniaArmy] = useState(albaniaArmies.includes(faction));

  const userFaction = window.localStorage.getItem('faction');

  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      DomEvent.disableScrollPropagation(containerRef.current);
    }
  }, [containerRef]);

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
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(() => {
          reload();
        })
        .catch(e => {
          if (e.response.status === 401) {
            window.localStorage.removeItem('loggedBLUser');
            window.location.reload();
          }
        });
    }
    else {
      axios.post('https://battle-legion-backend.onrender.com/api/armies', {
        name: name,
        general: general,
        soldiers: soldiersArray,
        faction: faction,
        status: status,
        node: node
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(() => {
          reload();
        })
        .catch(e => {
          if (e.response.status === 401) {
            window.localStorage.removeItem('loggedBLUser');
            window.location.reload();
          }
        });
    }
  }

  const reload = () => {
    window.location.reload(false);
  };

  const handleDelete = () => {
    axios.delete(`https://battle-legion-backend.onrender.com/api/armies/${army.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        reload();
      })
      .catch(e => {
        if (e.response.status === 401) {
          window.localStorage.removeItem('loggedBLUser');
          window.location.reload();
        }
      });
  }

  return (
    <div className={classes.form} ref={containerRef}>
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
            {userFaction === "admin" && 
            <>
            <option value="bulgaria">Bulgaria</option>
            <option value="bl-0">Legion Legatus</option>
            <option value="bl-1">First Legion</option>
            <option value="bl-2">Second Legion</option>
            <option value="csb">Carthage Sacred Band</option>
            <option value="medici">Medici</option>
            <option value="chaos">Lords of Chaos</option>
            <option value="vidin">Baba Vida</option>
            <option value="haiduks">Haiduk Batalion</option>
            </>
            }
            {(userFaction === "admin" || userFaction === "bursa") && 
            <>
            <option value="edirne">Edirne</option>
            <option value="ron">Riders of the Night</option>
            <option value="karesi">Karesi</option>
            <option value="altay">Altay Ailesi</option>
            <option value="seljuk">Selçuklu Ailesi</option>
            <option value="sl">Steel Legion</option>
            <option value="bursa">Bursa</option>
            <option value="saruhan">Saruhanlı Ailesi</option>
            </>
            }
            {(userFaction === "admin" || userFaction === "albania") && 
            <option value="albania">Albania</option>
            }
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
        {(userFaction === "admin"  ||  (userFaction === "bursa" && (isBursaArmy || !army)) || (userFaction === "albania" && (isAlbaniaArmy || !army))) && 
        <input type="submit" value="Enter" className={classes.btn} />
        }
      </form>
      {(army && (userFaction === "admin"  ||  (userFaction === "bursa" && isBursaArmy) || (userFaction === "albania" && isAlbaniaArmy))) && 
        <button onClick={() => { handleDelete(); }} className={`${classes.btn} ${classes.delete}`}>Delete</button>
        }
    </div>
  )
};

export default ArmyForm;